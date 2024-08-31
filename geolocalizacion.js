document.addEventListener('DOMContentLoaded', function () {
    const ubicacion = document.getElementById('ubicacion');

    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
                .then(response => response.json())
                .then(data => {
                    ubicacion.textContent = `Tu compra se realizará desde ${data.address.country}`;
                });
        }, function () {
            ubicacion.textContent = 'No se pudo determinar la ubicación.';
        });
    } else {
        ubicacion.textContent = 'Geolocalización no es soportada por este navegador.';
    }
});
