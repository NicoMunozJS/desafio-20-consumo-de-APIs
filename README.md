# 📌 Hito 20 – Pizzería Mamma Mía – Consumo de APIs

Este proyecto corresponde al **Hito 20 del bootcamp Desafío Latam**, donde se aplican los conocimientos de **consumo de APIs externas en React**. La aplicación obtiene la información de las pizzas desde un backend propio y renderiza dinámicamente los componentes en la interfaz.

---

## 🚀 Objetivo del desafío

- Consumir una API externa (backend de ejemplo) para obtener la información de las pizzas.
- Renderizar dinámicamente las tarjetas de pizzas en la página principal usando los datos obtenidos.
- Mostrar el detalle de una pizza individual con toda su información (nombre, precio, ingredientes, descripción e imagen).
- Mantener la estructura de la aplicación con Navbar y Footer.

---

## ✅ Requerimientos cumplidos

### Página Home
- Consume la API `GET http://localhost:5000/api/pizzas` para obtener todas las pizzas.
- Renderiza un componente `<CardPizza />` por cada pizza obtenida.
- Cada tarjeta muestra:
  - Nombre de la pizza
  - Precio
  - Lista de ingredientes
  - Imagen de la pizza

### Componente Pizza
- Consume la API `GET http://localhost:5000/api/pizzas/p001` para mostrar una pizza individual.
- Muestra:
  - Nombre de la pizza
  - Precio
  - Lista de ingredientes
  - Imagen de la pizza
  - Descripción
- Botón de "Añadir al carrito" (sin funcionalidad por ahora).

### Navbar y Footer
- Navbar con botones de Home, Login, Register y total del carrito (simulado).
- Footer fijo con derechos de autor.

---

## 🛠️ Tecnologías utilizadas

- React 18  
- JavaScript (JSX, useState, useEffect, fetch)  
- CSS3  
- Bootstrap 5  
- Vite como bundler  
- Git para control de versiones  
- Node.js (para el backend de ejemplo)

---

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio:
```bash
git clone https://github.com/NicoMunozJS/desafio-20-consumo-de-APIs.git
