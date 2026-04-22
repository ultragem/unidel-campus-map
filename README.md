# 🎓 UNIDEL Smart Campus Navigation System

An interactive, accessibility-focused web-based campus map for the **University of Delta (UNIDEL), Main Campus, Agbor**. Built as part of an undergraduate research project on smart campus navigation systems.

---

## 🗺️ Features

- **Interactive Satellite Map** — Powered by Leaflet.js and Esri World Imagery tiles
- **Clickable Building Markers** — Select any building to view its details in the sidebar
- **Accessibility Mode** — High-contrast display mode with distinct markers for wheelchair-accessible buildings
- **Accessibility Information** — Each building displays ramp availability, elevator status, and accessible entrance locations
- **Responsive Design** — Works on both desktop and mobile browsers
- **No Installation Required** — Runs entirely in the browser with no backend

---

## 🏛️ Mapped Buildings

| Building | Accessible |
|---|---|
| VC Administrative Block | ✅ Yes |
| Zenith ICT Center | ❌ No |
| University Clinic | ✅ Yes |
| Faculty of Computing | ❌ No |
| Faculty of Arts | ❌ No |
| Faculty of Education | ✅ Yes |
| Faculty of Science | ❌ No |
| Faculty of Agriculture | ❌ No |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Map Library | [Leaflet.js](https://leafletjs.com/) v1.9.4 |
| Satellite Tiles | [Esri World Imagery](https://www.esri.com/) |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Hosting | GitHub Pages |

---

## 📁 Project Structure

<pre>
unidel-campus-map/
├── index.html          # Main application page
├── css/
│   └── style.css       # All styles including accessibility mode
├── js/
│   ├── map.js          # Leaflet map logic and interactivity
│   └── buildings.js    # Campus buildings data and coordinates
├── assets/
│   └── unidel.png      # University logo
├── .gitignore
└── README.md
</pre>

---

## 🚀 How to Run Locally

No installation or server required.

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/unidel-campus-map.git
```

2. Open the project folder:
```bash
cd unidel-campus-map
```

3. Open `index.html` directly in your browser:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

---

## ♿ Accessibility Mode

Click the **Accessibility Mode** button in the top navigation bar to activate:

- High contrast black and yellow colour scheme
- Larger text throughout the interface
- Green markers for wheelchair-accessible buildings
- Yellow markers for standard buildings

---

## 🔭 Scope & Limitations

- This system is designed as a **static information map**, not a real-time GPS navigation tool
- No turn-by-turn routing or shortest-path calculations
- Strictly limited to **UNIDEL Main Campus, Agbor**
- Accessibility data was collected via manual campus walk-through audit

---

## 👨‍💻 Author

Gwam Chukwuebuka
Department of Software Engineering  
University of Delta, Agbor  

---

## 📄 License

This project was developed for academic purposes at the University of Delta, Agbor.