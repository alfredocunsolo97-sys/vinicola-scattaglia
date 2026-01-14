# Vinicola Scattaglia Saverio

Sito web professionale per Vinicola Scattaglia Saverio - Vini Biologici e Tradizione Pugliese dal 1920.

## 🍇 Descrizione

Sito vetrina moderno e responsive per l'azienda vinicola pugliese Scattaglia, con design "Terroir Mediterraneo" che celebra la tradizione centenaria della famiglia e i sapori autentici della Puglia.

## ✨ Caratteristiche

- **Homepage Landing Page** con Hero section, sezioni Servizi, Prodotti, Recensioni e Contatti
- **Pagina Chi Siamo** con storia aziendale e valori
- **Design Responsive** ottimizzato per mobile, tablet e desktop
- **Palette colori calda** ispirata alla terra pugliese (Rosso Primitivo, Crema Pietra Leccese, Oro Olio)
- **Tipografia elegante** con Playfair Display e Source Sans 3
- **Immagini personalizzate** generate con AI
- **Animazioni fluide** con Framer Motion
- **SEO ottimizzato** con meta tag e struttura semantica

## 🚀 Deployment su Vercel

### Opzione 1: Import da GitHub (Consigliato)

1. Vai su [vercel.com](https://vercel.com)
2. Clicca su "Add New Project"
3. Seleziona "Import Git Repository"
4. Scegli questo repository: `alfredocunsolo97-sys/vinicola-scattaglia`
5. Vercel rileverà automaticamente la configurazione Vite
6. Clicca su "Deploy"

### Opzione 2: Vercel CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Source Sans 3)

## 📦 Installazione Locale

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build

# Preview della build
pnpm preview
```

## 📁 Struttura del Progetto

```
vinicola-scattaglia/
├── client/
│   ├── public/
│   │   └── images/          # Immagini generate
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/    # Sezioni della homepage
│   │   │   ├── ui/          # Componenti shadcn/ui
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── ChiSiamo.tsx
│   │   ├── App.tsx
│   │   └── index.css        # Stili globali e tema
│   └── index.html
├── server/                   # Server Express (statico)
└── package.json
```

## 🎨 Design System

### Colori Principali

- **Rosso Primitivo** (#722F37) - Primary, CTA
- **Crema Pietra Leccese** (#F5F0E6) - Background
- **Oro Olio** (#C9A227) - Accent, dettagli
- **Verde Foglia Vite** (#4A5D23) - Secondary

### Tipografia

- **Display**: Playfair Display (serif) - Titoli
- **Body**: Source Sans 3 (sans-serif) - Testo

## 📞 Contatti Azienda

- **Indirizzo**: SP133, 70010 Adelfia (BA), Italia
- **Telefono**: +39 080 459 3500
- **Email**: info@scattaglia.it
- **Orari**: Lun-Ven 08:00-19:00, Sab 09:00-13:00

## 📄 Licenza

© 2026 Vinicola Scattaglia Saverio. Tutti i diritti riservati.

---

Sviluppato con ❤️ per celebrare oltre 100 anni di tradizione vinicola pugliese.
