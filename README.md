#  Wanderlust - Tourism Website

A modern, responsive tourism website built with **React.js**, **Tailwind CSS**, and **Framer Motion**. This project showcases travel destinations and tour packages with a clean UI, smooth animations, and a fully responsive layout.

![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-purple?logo=framer)

##  Features

- **Hero Slideshow** — Auto-sliding background images with crossfade transitions
- **Dark Mode** — Toggle between light and dark themes (persisted via localStorage)
- **Smooth Animations** — Scroll reveal effects and page transitions powered by Framer Motion
- **Fully Responsive** — Optimized for mobile, tablet, and desktop screens
- **SEO Optimized** — Proper meta tags, semantic HTML, and heading hierarchy
- **Component-Based Architecture** — Clean, reusable components for consistency

##  Pages

| Page | Description |
|------|-------------|
| **Home** | Hero slideshow, stats, features, featured destinations & packages, testimonials, CTA |
| **Destinations** | Responsive grid of travel destination cards with ratings |
| **Tour Packages** | List of tour packages with price, duration, and details |
| **Package Details** | Image gallery, highlights, description, and booking UI |
| **Contact** | Contact form, Google Map embed, contact info, and social links |

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** (Vite) | Frontend framework & build tool |
| **Tailwind CSS v4** | Utility-first CSS styling |
| **React Router DOM** | Client-side routing |
| **Framer Motion** | Animations and transitions |
| **Lucide React** | Icon library |
| **React Helmet Async** | SEO meta tag management |

##  Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   ├── Footer.jsx       # Multi-column footer with social links
│   ├── Layout.jsx       # Page layout wrapper
│   ├── SectionHeader.jsx
│   ├── DestinationCard.jsx
│   ├── PackageCard.jsx
│   ├── TestimonialCard.jsx
│   └── ScrollToTop.jsx
├── pages/               # Route-level page components
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── Packages.jsx
│   ├── PackageDetails.jsx
│   └── Contact.jsx
├── context/             # React context providers
│   └── ThemeContext.jsx  # Dark mode state management
├── data/                # Static mock data
│   └── mockData.js      # Destinations, packages, testimonials
├── App.jsx              # Root component with routing
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS configuration & theme
```




