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
  };


  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Cuando el usuario hace scroll, verifica si debe mostrar u ocultar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

document.getElementById('catalogoButton').addEventListener('click', function () {
  const catalogo = document.getElementById('catalogo');
  if (catalogo.style.display === 'none' || catalogo.style.display === '') {
      catalogo.style.display = 'block';
  } else {
      catalogo.style.display = 'none';
  }
});

// Cuando el usuario hace clic en el botón, scroll hasta la parte superior de la página de forma suave
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
