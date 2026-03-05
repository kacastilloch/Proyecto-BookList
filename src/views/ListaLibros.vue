<template>
  <div class="lista-libros">
    <h2 class="main-title">Catálogo de Libros</h2>

    <div class="filtros-container panel-cristal">
      <h3>Buscador y Filtros</h3>
      <div class="form-group row-filtros">
        <input v-model="filtroTexto" type="text" placeholder="Buscar por título o autor..." />
        <select v-model="filtroCategoria">
          <option value="">Todas las categorías</option>
          <option value="Ficción 🧝🏽">Ficción 🧝🏽</option>
          <option value="Fantasía 🔮">Fantasía 🔮</option>
          <option value="Tecnología 🖥️">Tecnología 🖥️</option>
          <option value="Romance 🌹">Romance 🌹</option>
          <option value="Terror 💀">Terror 💀</option>
          <option value="Autoayuda 🌱">Autoayuda 🌱</option>
        </select>
      </div>
    </div>

    <div class="formulario-container panel-cristal">
      <h3>{{ editandoId ? 'Editar Título' : 'Añadir Nuevo Título' }}</h3>

      <form @submit.prevent="guardarLibro">
        <div class="form-group">
          <label>Título:</label>
          <input v-model="nuevoLibro.titulo" type="text" @keyup.enter="guardarLibro" placeholder="Ej: Rayuela" required>
        </div>

        <div class="form-group">
          <label>Autor:</label>
          <input v-model="nuevoLibro.autor" type="text" placeholder="Ej: Julio Cortázar" required>
        </div>

        <div class="form-group">
          <label>Categoría:</label>
          <select v-model="nuevoLibro.categoria" required>
            <option value="" disabled>Seleccione una categoría...</option>
            <option value="Ficción 🧝🏽">Ficción 🧝🏽</option>
            <option value="No Ficción 📖">No Ficción 📖</option>
            <option value="Fantasía 🔮">Fantasía 🔮</option>
            <option value="Tecnología 🖥️">Tecnología 🖥️</option>
            <option value="Romance 🌹">Romance 🌹</option>
            <option value="Terror 💀">Terror 💀</option>
            <option value="Autoayuda 🌱">Autoayuda 🌱</option>
          </select>
        </div>

        <div class="form-group">
          <label>Descripción:</label>
          <textarea v-model="nuevoLibro.descripcion" rows="2" placeholder="Breve resumen del libro..."></textarea>
        </div>

        <div class="botones-accion">
          <button type="submit" class="btn-submit">
            {{ editandoId ? 'Guardar Cambios' : 'Añadir al Catálogo' }}
          </button>

          <button v-if="editandoId" type="button" @click="cancelarEdicion" class="btn-cancelar">
            Cancelar
          </button>
        </div>
      </form>

      <div class="vista-previa" v-show="nuevoLibro.titulo || nuevoLibro.autor">
        <p><strong>Previsualización:</strong> {{ nuevoLibro.titulo }} <span v-if="nuevoLibro.autor">- {{
          nuevoLibro.autor }}</span></p>
      </div>
    </div>

    <div class="catalogo-section">
      <p v-if="librosFiltrados.length === 0" class="mensaje-vacio">
        No se encontraron libros.
      </p>

      <div v-else class="grid-libros">
        <LibroItem v-for="libro in librosFiltrados" :key="libro.id" :libro="libro" @eliminar="eliminarLibro"
          @editar="cargarEdicion" />
      </div>
    </div>
  </div>
</template>

<script>
import LibroItem from '../components/Libro.vue'

export default {
  name: 'ListaLibros',
  components: { LibroItem },
  data() {
    return {
      libros: [],
      nuevoLibro: { titulo: '', autor: '', categoria: '', descripcion: '' },
      filtroTexto: '',
      filtroCategoria: '',
      editandoId: null
    }
  },
  computed: {
    librosFiltrados() {
      return this.libros.filter(libro => {
        const coincideTexto = libro.titulo.toLowerCase().includes(this.filtroTexto.toLowerCase()) ||
          libro.autor.toLowerCase().includes(this.filtroTexto.toLowerCase());
        const coincideCategoria = this.filtroCategoria === '' || libro.categoria === this.filtroCategoria;
        return coincideTexto && coincideCategoria;
      });
    }
  },
  mounted() {
    const memoria = localStorage.getItem('libros_nova');
    if (memoria) {
      this.libros = JSON.parse(memoria);
    } else {
      this.libros = [
        { id: 1, titulo: 'El Aleph', autor: 'Jorge Luis Borges', categoria: 'Ficción 🛸', descripcion: 'Cuentos clásicos.' }
      ];
      this.actualizarMemoria();
    }
  },
  methods: {
    actualizarMemoria() {
      localStorage.setItem('libros_nova', JSON.stringify(this.libros));
    },
    guardarLibro() {
      if (this.nuevoLibro.titulo && this.nuevoLibro.autor && this.nuevoLibro.categoria) {
        if (this.editandoId) {
          const index = this.libros.findIndex(l => l.id === this.editandoId);
          if (index !== -1) {
            this.libros[index] = { ...this.nuevoLibro, id: this.editandoId };
          }
          this.editandoId = null;
        } else {
          this.libros.push({
            id: Date.now(),
            ...this.nuevoLibro
          });
        }
        this.nuevoLibro = { titulo: '', autor: '', categoria: '', descripcion: '' };
        this.actualizarMemoria();
      }
    },
    eliminarLibro(id) {
      this.libros = this.libros.filter(libro => libro.id !== id);
      this.actualizarMemoria();
    },
    cargarEdicion(libro) {
      this.editandoId = libro.id;
      this.nuevoLibro = { ...libro };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    cancelarEdicion() {
      this.editandoId = null;
      this.nuevoLibro = { titulo: '', autor: '', categoria: '', descripcion: '' };
    }
  }
}
</script>

<style scoped>
.lista-libros {
  padding: 10px;
}

.main-title {
  text-align: center;
  margin-bottom: 30px;
  color:#f0971c;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: 'Macondo';
}

.panel-cristal {
  background: #261c21;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto 30px;
  padding: 35px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  font-family: 'Macondo';
}

h3 {
  color: #cc3e18;
  margin-top: 0;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.row-filtros {
  flex-direction: row;
  gap: 15px;
}

@media (max-width: 500px) {
  .row-filtros {
    flex-direction: column;
  }
}

label {
  color: #cc3e18;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: 'Macondo';
}

input,
select,
textarea {
  background:#000000;
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 12px;
  color: #cc3e18;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Macondo';
}

select option {
  background-color: #000000;
  color: #cc3e18;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #72135a;
  background: #020202;
  box-shadow: 0 0 0 4px rgba(114, 19, 90, 0.15);
}

.botones-accion {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.btn-submit {
  flex: 1;
  background: linear-gradient(135deg, #cd5b51 0%, #554865 100%); 
  color: #000000;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-family: 'Macondo';
}

.btn-submit:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(7, 22, 90, 0.4);
  filter: brightness(1.1);
}

.btn-cancelar {
  background: #d43c12;
  color: #000000;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-cancelar:hover {
  background: #cbd5e1;
}

.vista-previa {
  margin-top: 25px;
  padding: 12px;
  background: rgba(7, 22, 90, 0.05);
  border-left: 5px solid #07165ad3;
  border-radius: 4px;
  color: #07165ad3;
  font-size: 0.9rem;
}

.grid-libros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.mensaje-vacio {
  color: #fca5a5;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  border: 1px dashed rgba(255, 255, 255, 0.3);
}
</style>