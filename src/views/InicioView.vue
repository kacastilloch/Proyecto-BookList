<template>
  <div class="inicio-container">
    <div class="panel-cristal hero-section">
      <h2 class="bienvenida-titulo">Bienvenido a Editorial Nova</h2>
      <p class="subtitulo">Sistema profesional de gestión de catálogos literarios.</p>

      <div class="imagen-portada">
        <img src="../assets/libreria.jpg" alt="Biblioteca clásica" class="img-fluida" />
      </div>

      <div class="acciones-inicio">
        <router-link to="/libros" class="btn-comenzar">
          Explorar el Catálogo 🕮
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.inicio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  animation: fadeIn 0.8s ease-in;
}

.panel-cristal {
  background: #dd3012;
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(121, 122, 165, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  text-align: center;
  font-family: 'Macondo';
}

.bienvenida-titulo {
  color: #000000;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 10px;
  font-family: 'Macondo';
}

.subtitulo {
  color: #000000;
  font-size: 1.1rem;
  margin-bottom: 30px;
  font-family: 'Macondo';
}

.imagen-portada {
  margin: 0 auto 30px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-height: 350px;
}

.img-fluida {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.img-fluida:hover {
  transform: scale(1.05);
}

.btn-comenzar {
  display: inline-block;
  background: black;
  color: #de4126;
  text-decoration: none;
  padding: 15px 35px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Macondo';
}

.btn-comenzar:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(7, 22, 90, 0.4);
  filter: brightness(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>