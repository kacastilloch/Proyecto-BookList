<template>
  <div id="app">
    <header class="main-header">
      <div class="header-content">
        <h1 class="logo">BookList SPA <i class="fa-solid fa-book-quran"></i></h1>
        <p class="user-badge">Bienvenida, {{ nombreUsuario }}</p>
      </div>

      <nav class="navbar">
        <router-link to="/" class="nav-btn">Inicio</router-link>
        <router-link to="/libros" class="nav-btn">Gestión de Libros</router-link>
      </nav>
    </header>

    <main class="viewport-container">
      <section class="glass-container">
        <div class="interaction-bar">
          <span>Interacciones en la sesión: <strong>{{ contador }}</strong></span>
          <button @click="incrementarContador" class="btn-bubble">Sumar interacción</button>
        </div>

        <hr class="divider" />

        <router-view></router-view>
      </section>
    </main>

    <footer class="footer">
      <p>© 2026 Editorial Nova - Karina Castillo</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nombreUsuario: 'Karina',
      contador: 0
    };
  },
  methods: {
    incrementarContador() {
      this.contador++;
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  background: #181419;
  color: black;
  
  display: flex;
  flex-direction: column;
}

.main-header {
  padding: 1.5rem 2rem;
  background: rgb(14, 5, 15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.header-content {
  text-align: center;
  font-family: 'Macondo';
}

.logo {
  margin: 0;
  font-size: 2.2rem;
  letter-spacing: 1px;
  background: linear-gradient(to right, #be9f17, #de4126);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'MedievalSharp';
}

.user-badge {
  margin: 5px 0 0;
  font-weight: 300;
  color: #be9f17;
}

.navbar {
  display: flex;
  gap: 10px;
  background: #000000;
  padding: 6px;
  border-radius: 12px;
  font-family: 'Macondo';
}

.nav-btn {
  text-decoration: none;
  color: #cc3e18;
  ;
  padding: 8px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgb(173, 98, 13);
}

.router-link-active {
  background: #181419;
  color: #cc3e18 !important;
  box-shadow: 0 4px 15px #cc3e18;
}

.viewport-container {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.glass-container {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  width: 100%;
  max-width: 1000px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  font-family: 'Macondo';
}

.interaction-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.btn-bubble {
  background: #000000;
  color: #de4126;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  font-family: 'Macondo';
}

.btn-bubble:active {
  transform: scale(0.95);
}

.divider {
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
}

.footer {
  text-align: center;
  padding: 1.5rem;
  color: #dd5212;
  font-size: 0.85rem;
  font-family: 'Macondo';
}
</style>