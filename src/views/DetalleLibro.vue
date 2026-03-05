<template>
  <div class="detalle-libro">
    <div class="glass-card">
      <h2 class="title">Información del Libro</h2>
      
      <div class="info-box">
        <div v-if="libro" class="datos-libro">
          <span class="categoria-tag">{{ libro.categoria }}</span>
          <h3>{{ libro.titulo }}</h3>
          <p class="autor">Por: {{ libro.autor }}</p>
          <div class="descripcion">
            <p>{{ libro.descripcion || 'Sin descripción disponible.' }}</p>
          </div>
        </div>

        <p class="id-text">Registro único ID: <strong>{{ id }}</strong></p>
        
        <router-link to="/libros" class="btn-regresar">Regresar al Catálogo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleLibro',
  props: ['id'], 
  data() {
    return {
      libro: null
    }
  },
  mounted() {
    const memoria = localStorage.getItem('libros_nova');
    if (memoria) {
      const listaLibros = JSON.parse(memoria);
      this.libro = listaLibros.find(l => l.id == this.id);
    }
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
  color: #cc3e18;
}

.info-box {
  padding: 40px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  font-family: 'MedievalSharp';
  
}

.datos-libro {
  margin-bottom: 30px;
}

.categoria-tag {
  background: #000000;
  color: #f0971c ;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 15px;
}

h3 {
  font-size: 2rem;
  margin: 0;
  color: #f0971c;
}

.autor {
  font-size: 1.2rem;
  color: #cbd5e1;
  margin-top: 5px;
}

.descripcion {
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  font-style: italic;
  color: #e2e8f0;
}

.id-text {
  color: #9ca3af;
  font-size: 0.9rem;
  margin-top: 20px;
}

.btn-regresar {
  display: inline-block;
  margin-top: 20px;
  background: linear-gradient(to right, #181419, #cc3e18);
  color: #b8b8b8;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-regresar:hover {
  background: linear-gradient(to right, #181419, #4a073c);
}
</style>