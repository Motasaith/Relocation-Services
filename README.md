# AI Novara — International Relocation Experts

A premium, single-page marketing website for **AI Novara**, an international relocation services company operating across the **United Kingdom**, **UAE / Dubai**, **Saudi Arabia**, and **Bahrain**.

## ✨ Features

- **Hero Section** — Full-screen image slideshow with crossfade transitions and Ken Burns zoom effect
- **Market Selector** — Interactive country cards showcasing each operating region
- **Services** — Overview of core services (Home Finding, Office Setup, School Search, Shipping, Company Formation, Relocation Packages)
- **Why Choose Us** — Key differentiators and value propositions
- **How It Works** — Step-by-step process breakdown with animated connectors
- **Country Highlights** — Detailed highlights for each country of operation
- **Services Marquee** — Animated scrolling ticker of available services
- **Testimonials** — Client reviews and feedback
- **CTA Banner** — Call-to-action for free consultations
- **Footer** — Full site navigation and contact information

## 🛠 Tech Stack

| Layer        | Technology                                             |
| ------------ | ------------------------------------------------------ |
| Framework    | [React 19](https://react.dev/) + TypeScript            |
| Build Tool   | [Vite 7](https://vite.dev/)                            |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com/) + Vanilla CSS |
| Animations   | [GSAP](https://gsap.com/) + ScrollTrigger              |
| Smooth Scroll| [Lenis](https://github.com/darkroomengineering/lenis)  |
| UI Components| [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Typography   | Instrument Serif + DM Sans (Google Fonts)              |

## 📁 Project Structure

```
src/
├── sections/           # Page sections (Hero, Navigation, Services, etc.)
├── components/ui/      # Reusable UI components (shadcn/ui)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── App.tsx             # Root component — assembles all sections
├── main.tsx            # Application entry point
└── index.css           # Global styles, design tokens, animations
public/
└── images/             # Hero slideshow & country highlight images
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Motasaith/Relocation-Services.git
cd Relocation-Services

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server (default: http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Type-check and build for production
npm run build

# Preview the production build locally
npm run preview
```

## 📜 Available Scripts

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot module reload  |
| `npm run build`   | Type-check with TSC and bundle for production |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint across the project                 |

## 🎨 Design System

| Token          | Value       | Usage                    |
| -------------- | ----------- | ------------------------ |
| `--navy`       | `#012A4A`   | Primary dark background  |
| `--ivory`      | `#F7F5F3`   | Light background / text  |
| `--sage`       | `#B7B7A4`   | Accent / CTA buttons     |
| `--muted-sage` | `#A5A58D`   | Secondary accents        |
| `--charcoal`   | `#2A3B45`   | Body text                |

## 📄 License

This project is private and proprietary.
