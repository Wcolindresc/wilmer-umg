document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    function renderCarrito() {
        listaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
            listaCarrito.appendChild(li);
            total += producto.total;
        });

        totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
    }

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const producto = e.target.closest('.producto');
            const nombreProducto = producto.getAttribute('data-nombre');
            const precioProducto = parseFloat(producto.getAttribute('data-precio'));

            agregarAlCarrito(nombreProducto, precioProducto);
            renderCarrito();
        });
    });

    function agregarAlCarrito(nombre, precio) {
        const productoExistente = carrito.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            productoExistente.cantidad++;
            productoExistente.total += precio;
        } else {
            carrito.push({ nombre, precio, cantidad: 1, total: precio });
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    renderCarrito();
});
