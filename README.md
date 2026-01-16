# Neon City – Nitra

**Neon City – Nitra** is a Single Page Application (SPA) developed as a final project for the *Frontend Technologies* course. The application represents a responsive, neon-themed entertainment center website with dynamic content loading, centralized state management, and a custom dark-mode user interface.

The app allows users to browse show programs, party themes, and customer reviews without full page reloads, ensuring a smooth and modern user experience.

---

## Project Overview

The primary objective of this project was to design and implement a functional frontend application using the Vue.js framework. The website simulates a real-world business scenario for *Neon City*, a venue offering neon mini-golf experiences and themed party services.

The focus was placed on component-based architecture, state management, and clean UI design without relying on external CSS frameworks.

---

## Key Features

- **Single Page Application (SPA)**  
  Client-side navigation powered by Vue Router enables seamless transitions between views.

- **Centralized State Management**  
  Application data (shows, themes, reviews) is managed using Pinia as a single source of truth.

- **Dynamic Content Rendering**  
  Show programs and party themes are generated dynamically from the application state.

- **Interactive Reviews System**  
  Users can submit new reviews, which are immediately reflected in the UI.

- **Responsive Layout**  
  Fully responsive design optimized for mobile, tablet, and desktop devices using CSS Grid and Flexbox.

- **Reusable UI Components**  
  Custom-built components such as neon buttons, service cards, section titles, and footer elements.

---

## Technology Stack

The project was built using the following technologies:

- **Vue.js 3** – Core frontend framework (Options API)
- **Vite** – Development server and build tool
- **Pinia** – State management library
- **Vue Router** – Client-side routing
- **HTML5 & CSS3** – Semantic markup and custom styling (no external CSS frameworks)

---

## Project Structure

The codebase follows a modular and maintainable structure:

- `src/components/`  
  Reusable UI components (ServiceCard, NeonButton, SectionTitle, ReviewItem, TheFooter)

- `src/views/`  
  Main application views (HomeView, ShowsView, ThemesView, ReviewsView)

- `src/stores/`  
  Pinia store (`clubStore.js`) containing all shared application data

- `src/router/`  
  Application route configuration

- `src/assets/`  
  Static assets, images, and global stylesheets

---

## Project Setup

Follow the instructions below to run the project locally.

### Prerequisites

- Node.js (recommended LTS version)

### Installation

- Install all required dependencies:

- bash ```npm install```

### Development Server

Run the development server with hot module replacement:

```npm run dev```

### Production Build

Build the application for production:

```npm run build```

### Deployment

The project is configured for deployment via GitHub Pages.

To deploy the latest version to the gh-pages branch, run:

```npm run deploy```

## License

This project was created for educational purposes as part of a university course.