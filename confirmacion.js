document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaConfirmacion = document.getElementById('lista-confirmacion');
    const totalConfirmacion = document.getElementById('total-confirmacion');
    const botonConfirmar = document.getElementById('confirmar-compra');

    function renderConfirmacion() {
        listaConfirmacion.innerHTML = '';
        let total = 0;

        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
            listaConfirmacion.appendChild(li);
            total += producto.total;
        });

        totalConfirmacion.textContent = `Total a Pagar: $${total.toFixed(2)}`;
    }

    botonConfirmar.addEventListener('click', () => {
        alert('Compra Confirmada');
        localStorage.removeItem('carrito');
        renderConfirmacion();
    });

    renderConfirmacion();
});
