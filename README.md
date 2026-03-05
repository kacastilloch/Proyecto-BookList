
# BookList SPA – Gestor de Libros Interactivo con Vue.js

**Autor:** Karina  
**Módulo:** 6 - Desarrollo de Interfaces Interactivas con Framework Vue  
**Proyecto:** Evaluación Módulo #6

## 📋 Descripción General

BookList es una Single Page Application (SPA) desarrollada con Vue.js 3 que permite gestionar un catálogo de libros de forma interactiva. La aplicación implementa un sistema completo de CRUD (Create, Read, Delete) con navegación fluida entre vistas, formularios reactivos y rutas dinámicas.

## 🎯 Requisitos Implementados

- ✅ Agregar libros con título, autor y categoría
- ✅ Formularios con actualización de datos en tiempo real (v-model)
- ✅ Lista reactiva de libros con eliminación
- ✅ 3 vistas: Inicio, Lista de Libros y Detalle del Libro
- ✅ Navegación por rutas dinámicas con Vue Router
- ✅ Arquitectura modular y reutilizable

## 📁 Estructura de Carpetas Vue

```
proyecto 6 - Booklist/
├── src/
│   ├── components/
│   │   └── Libro.vue          # Componente para mostrar datos de un libro
│   ├── views/
│   │   ├── InicioView.vue     # Vista principal con contador y bienvenida
│   │   ├── ListaLibros.vue    # Vista con formulario y lista de libros
│   │   └── DetalleLibro.vue   # Vista de detalle con rutas dinámicas
│   ├── router/
│   │   └── index.js           # Configuración de rutas (/, /libros, /libros/:id)
│   ├── assets/                # Recursos estáticos
│   ├── App.vue                # Componente raíz con template/script/style
│   └── main.js                # Punto de entrada
├── public/
│   └── index.html             # HTML base
└── package.json               # Dependencias (Vue 3, Vue Router 4)
```

## 🔧 Tecnologías Utilizadas

- **Vue.js 3.2.13** – Framework reactivo
- **Vue Router 4.6.4** – Navegación SPA
- **JavaScript (Babel)** – Transpilación

## 📚 Conceptos Clave Implementados

| Lección | Concepto | Implementado |
|---------|----------|-------------|
| 1 | Estructura MVVM, datos reactivos, métodos | App.vue con contador |
| 2 | v-bind, v-if, v-for, v-show | Libro.vue y ListaLibros.vue |
| 3 | v-model, formularios reactivos | Formulario en ListaLibros.vue |
| 4 | @click, modificadores (.prevent, .once), eventos teclado | Agregar/eliminar libros |
| 5 | Vue Router, rutas dinámicas, props | DetalleLibro.vue con :id |
