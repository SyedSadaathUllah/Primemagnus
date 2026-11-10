# PrimeMagnus Care Global - React Web Application

Modern React web application for **PrimeMagnus Care Global (PMCG)**, an institutional healthcare operational advisory firm specializing in hospital performance improvement, patient flow optimization, and revenue recovery.

---

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/) (Single Page Application with smooth scroll-to-top)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with brand design tokens (`evergreen`, `gold`, `offwhite`, `charcoal`)
- **Typography:** Cormorant Garamond (Editorial serif headings) & Inter (Body)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [@emailjs/browser](https://www.emailjs.com/) (integrated contact inquiry portal)

---

## 📁 Project Structure

```text
Primemagnus/
├── public/                 # Static assets & favicons
│   ├── images/             # Brand logos and graphics
│   └── CNAME               # Custom domain config
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Sticky glassmorphic navbar with mobile menu
│   │   ├── Footer.jsx      # Comprehensive footer with quick links
│   │   ├── FloatingCTA.jsx # Floating "Book a Diagnostic" CTA pill
│   │   ├── ScrollToTop.jsx # Route change scroll reset
│   │   └── CardDivider.jsx # Signature gold gradient section divider
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with core diagnosis & outcomes
│   │   ├── Operate.jsx     # Operating pillars & governance commitment
│   │   ├── Services.jsx    # Advisory services catalog with inquiry hooks
│   │   └── Contact.jsx     # Diagnostic booking form with EmailJS integration
│   ├── App.jsx             # Main application layout and routes
│   ├── main.jsx            # React root mount and BrowserRouter
│   └── index.css           # Tailwind base styles and custom utilities
├── legacy/                 # Preserved backup of original vanilla HTML files
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✉️ Email Configuration

The contact form is pre-configured with PMCG's EmailJS service:
- **Service ID:** `service_8ks3ixs`
- **Template ID:** `template_8139cjg`
- **Public Key:** `1lgQEuouowyGa-k5u`
- **Fallback Email:** `primemagnus.careglobal@gmail.com`

