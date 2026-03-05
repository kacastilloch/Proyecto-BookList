<template>
  <div class="libro-card">
    <div class="contenido">
      <h4>{{ libro.titulo }}</h4>
      <p class="autor">{{ libro.autor }}</p>
      <span class="categoria">{{ libro.categoria }}</span>
    </div>
    
    <div class="acciones">
      <router-link :to="`/libros/${libro.id}`" class="btn-ver">Ver Detalles</router-link>
      
      <button @click="$emit('editar', libro)" class="btn-editar">Editar</button>
      <button @click="$emit('eliminar', libro.id)" class="btn-eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibroItem',
  props: {
    libro: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.libro-card {
  background: #181419;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'MedievalSharp';
}

h4 { margin: 0 0 5px 0; color: #cc3e18; font-size: 1.2rem; }
.autor { margin: 0 0 10px 0; color: #f0971c; font-size: 0.9rem; }
.categoria { background: #9e0b41; color: #f0971c; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; }

.acciones {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.btn-ver {
  flex: 1;
  text-align: center;
  background: #4a073c;
  color: #cc3e18;
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: 'MedievalSharp';
}

.btn-editar {
  flex: 1;
  background: #9e0b41;
  color: #f0971c;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: 'MedievalSharp';
}

.btn-eliminar {
  flex: 1;
  background: #ce2a0d;
  color: #181419;
  border: none;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: 'MedievalSharp';
}

button:hover, .btn-ver:hover { filter: brightness(1.1); }
</style>