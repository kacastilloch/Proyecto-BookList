import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import ListaLibros from '../views/ListaLibros.vue'
import DetalleLibro from '../views/DetalleLibro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView
    },
    {
      path: '/libros',
      name: 'libros',
      component: ListaLibros
    },
    {
      path: '/libros/:id',
      name: 'detalle',
      component: DetalleLibro,
      props: true
    }
  ]
})

export default router