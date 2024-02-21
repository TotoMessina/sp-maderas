var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

function inicializarMapa() {
    var ubicacion = { lat: 40.712776, lng: -74.005974 }; // Coordenadas de la ubicación deseada
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15, // Nivel de zoom del mapa
      center: ubicacion // Centro del mapa en las coordenadas especificadas
    });
    var marcador = new google.maps.Marker({
      position: ubicacion,
      map: mapa,
      title: 'SP Maderas' // Título del marcador (opcional)
    });
  }