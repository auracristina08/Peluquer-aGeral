// script.js

// Esperar a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los enlaces del menú de navegación
    const menuItems = document.querySelectorAll('nav ul li a');

    // Añadir un evento de clic a cada enlace del menú
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            alert('Funcionalidad en desarrollo. ¡Gracias por tu paciencia!');
        });
    });

    // Seleccionar todos los artículos de productos
    const productos = document.querySelectorAll('article');

    // Añadir un evento de clic a cada artículo de producto
    productos.forEach(function(producto) {
        producto.addEventListener('click', function() {
            alert('Funcionalidad en desarrollo. ¡Gracias por tu paciencia!');
        });
    });
});
