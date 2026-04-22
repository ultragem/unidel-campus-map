// =============================================
// 1. INITIALIZE THE MAP
// =============================================

const map = L.map('map', {
  zoomControl: false  // We'll add it in a better position
}).setView([6.251033918983357, 6.177306351746614], 17); // ← Replace with your campus center coords


// =============================================
// 2. TILE LAYERS (Satellite + Labels)
// =============================================

// Esri Satellite base layer
const satelliteLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles &copy; Esri',
    maxZoom: 19
  }
);

// Label overlay — adds road/place names on top of satellite
const labelLayer = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
  { maxZoom: 19 }
);

// Add both to map
satelliteLayer.addTo(map);
labelLayer.addTo(map);


// =============================================
// 3. ZOOM CONTROL (bottom right)
// =============================================

L.control.zoom({ position: 'bottomright' }).addTo(map);


// =============================================
// 4. CUSTOM MARKER ICONS
// =============================================

// Standard marker (blue)
function createIcon(color) {
  return L.divIcon({
    className: '',
    html: `
      <div style="
        width: 14px;
        height: 14px;
        background: ${color};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
      "></div>
    `,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10]
  });
}

const standardIcon = createIcon('#1a73e8');     // Blue — standard mode
const accessibleIcon = createIcon('#f5a623');   // Orange — has ramp/accessible
const a11yStandardIcon = createIcon('#FFD700'); // Yellow — accessibility mode
const a11yAccessibleIcon = createIcon('#00FF88'); // Green — accessible in a11y mode


// =============================================
// 5. SIDEBAR LOGIC
// =============================================

function openSidebar(building) {
  // Fill in the sidebar details
  document.getElementById('sidebar-title').textContent = building.name;
  document.getElementById('info-name').textContent = building.name;
  document.getElementById('info-faculty').textContent = building.faculty;
  document.getElementById('info-ramp').textContent = building.hasRamp ? '✅ Yes' : '❌ No';
  document.getElementById('info-elevator').textContent = building.hasElevator ? '✅ Yes' : '❌ No';
  document.getElementById('info-entrance').textContent = building.accessibleEntrance;
  document.getElementById('info-notes').textContent = building.notes;

  // Show the building info section
  document.getElementById('sidebar-desc').classList.add('hidden');
  document.getElementById('building-info').classList.remove('hidden');

  // On mobile — scroll sidebar into view
  document.getElementById('sidebar').scrollIntoView({ behavior: 'smooth' });
}

function resetSidebar() {
  document.getElementById('sidebar-title').textContent = 'Select a Building';
  document.getElementById('sidebar-desc').classList.remove('hidden');
  document.getElementById('building-info').classList.add('hidden');
}


// =============================================
// 6. PLACE MARKERS ON MAP
// =============================================

let isA11yMode = false;
const markers = []; // Store markers so we can update them on toggle

buildings.forEach(building => {

  // Decide initial icon color
  const icon = building.hasRamp ? accessibleIcon : standardIcon;

  // Create marker
  const marker = L.marker(building.coords, { icon })
    .addTo(map)
    .on('click', () => openSidebar(building));

  // Store marker + building data together
  markers.push({ marker, building });
});


// =============================================
// 7. ACCESSIBILITY MODE TOGGLE
// =============================================

const a11yBtn = document.getElementById('accessibility-btn');

a11yBtn.addEventListener('click', () => {
  isA11yMode = !isA11yMode;

  // Toggle body class for CSS changes
  document.body.classList.toggle('a11y-mode', isA11yMode);

  // Update button text
  a11yBtn.textContent = isA11yMode
    ? '🔵 Standard Mode'
    : '♿ Accessibility Mode';

  // Swap marker icons
  markers.forEach(({ marker, building }) => {
    if (isA11yMode) {
      marker.setIcon(building.hasRamp ? a11yAccessibleIcon : a11yStandardIcon);
    } else {
      marker.setIcon(building.hasRamp ? accessibleIcon : standardIcon);
    }
  });
});


// =============================================
// 8. CLOSE SIDEBAR WHEN CLICKING MAP
// =============================================

map.on('click', () => {
  resetSidebar();
});