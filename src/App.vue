<template>
  <div class="app-container">
    <header>
      <div class="logo">
        <RouterLink to="/" class="logo-link">NEON CITY</RouterLink>
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/shows">Shows</RouterLink>
        <RouterLink to="/themes">Themes</RouterLink>
        <RouterLink to="/reviews">Reviews</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script>
// Importovanie potrebných závislostí z Vue Router
import { RouterLink, RouterView } from 'vue-router'
// Importovanie komponentu pätičky
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  // Registrácia komponentov pre použitie v šablóne (Options API)
  components: {
    RouterLink,
    RouterView,
    TheFooter
  }
}
</script>

<style>
/* Globálne štýly pre celú aplikáciu */
/* Nastavenie tmavej témy a písma */
body {
  background-color: #050505; /* Takmer čierna farba pozadia */
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Zabránenie horizontálnemu posúvaniu */
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Aby bola pätička vždy dole */
}

/* Štýlovanie hlavičky */
header {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #111;
  border-bottom: 2px solid #d900ff; /* Neónová fialová čiara */
  box-shadow: 0 0 15px rgba(217, 0, 255, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Štýlovanie loga */
.logo-link {
  font-size: 1.8rem;
  font-weight: bold;
  color: #00ffcc; /* Neónová azúrová */
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 0 0 8px #00ffcc;
  letter-spacing: 2px;
}

/* Štýlovanie navigácie */
nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

nav a:hover {
  color: #00ffcc;
  text-shadow: 0 0 5px #00ffcc;
}

/* Router automaticky pridáva túto triedu aktívnemu odkazu */
nav a.router-link-active {
  color: #d900ff;
  text-shadow: 0 0 5px #d900ff;
  border-bottom: 2px solid #d900ff;
}

/* Hlavný obsah zaberie zvyšok miesta */
main {
  width: 100%;
  flex: 1;
  padding-bottom: 40px;
}

/* Responzívny dizajn pre mobily */
@media (max-width: 600px) {
  header {
    flex-direction: column;
    gap: 15px;
  }

  nav {
    gap: 10px;
    font-size: 0.9rem;
  }
}
</style>