/////////////////////////////SLIDER->BANNER 1

//********************************************************************CAPTURA DE ELEMENTOS */

//Captura de los elementos del slide por su id.
let slider_inner = document.getElementById("sliderInner");
let slider_inner__img = document.querySelectorAll(".sliderInner__img");

//Captura de los puntos de navegación
let circulo_0 = document.getElementById("circulo1");
let circulo_1 = document.getElementById("circulo2");
let circulo_2 = document.getElementById("circulo3");
let circulo_3 = document.getElementById("circulo4");

//Array que contenga todos los puntos de navegación para trabajar mejor con ellos
let circulos=[circulo_0, circulo_1, circulo_2, circulo_3];

//Captura del contenido original h1, p y button del slide
const $h1_slide = document.getElementById("slideH1");
const $p_slide = document.getElementById("slideP");
const $butt_slide = document.getElementById("slideB");

//********************************************************************VARIABLES NECESARIAS PARA EL SLIDER */

let operacion = 0;
let contadorIndice = 0;
let numFotos = 4;

//********************************************************************MOVIMIENTO AUTOMÁTICO DEL SLIDER */

setInterval(()=>{
    movimiento();
},5000);

function movimiento(){
    
    if(contadorIndice >=3 ){
        contadorIndice = 0;
        operacion= 0;
        slider_inner.style.transform = `translate(-${operacion}%)`;
        slider_inner.style.transition = "none";
    }else{
        contadorIndice++;
        operacion = operacion + 25 ;
        slider_inner.style.transform = `translate(-${operacion}%)`;
        slider_inner.style.transition = "all ease.5s";
    }
    
    cambioContenido(contadorIndice);
}
//********************************************************************FUNCION QUE CAMBIA LOS TEXTOS */

//Función que cambie con el movimiento, estará asociado a las fotos del slide
function cambioContenido(indice){
    switch(indice){
        case 0:
            //FOTO Y CONTEXTO DE INICIO
            // título
            $h1_slide.textContent = "welcome to happy paws";
            // párrafo
            $p_slide.textContent = "We offer all the best quality products and and services for your adorable pets.";
            // botón
            $butt_slide.textContent = "our services";
            // apariencia de los puntos de navegación (cuál esta seleccionado)
                                     ///////////add
                
                circulo_0.classList.add("circulo_externo");
                                     ///////////remove
                circulo_1.classList.remove("circulo_interno");
                circulo_2.classList.remove("circulo_interno");
                circulo_3.classList.remove("circulo_interno");
        break;

        case 1:
            //PRIMER SLIDE
            // título
            $h1_slide.textContent = "enjoy your daily offers";
            // párrafo
            $p_slide.textContent = "We have great offers with amazing prices every week, check it out today!";
            // botón
            $butt_slide.textContent = "our offers";
            // apariencia de los puntos de navegación (cuál esta seleccionado)
                                    ///////////add
                
                circulo_1.classList.add("circulo_externo");
                                    ///////////remove
                circulo_0.classList.remove("circulo_interno");
                circulo_2.classList.remove("circulo_interno");
                circulo_3.classList.remove("circulo_interno");
            
        break;

        case 2: 
            //SEGUNDO SLIDE
            // título
            $h1_slide.textContent = "We Take care of your pet";
            // párrafo
            $p_slide.textContent = "Discover the amazing health services that we can offer to your pets.";
            // botón
            $butt_slide.textContent = "more about us";
            // apariencia de los puntos de navegación (cuál esta seleccionado)
                                    ///////////add
                
                circulo_2.classList.add("circulo_externo");
                                    ///////////remove
                circulo_0.classList.remove("circulo_interno");
                circulo_1.classList.remove("circulo_interno");
                circulo_3.classList.remove("circulo_interno");
        break;

        case 3:
            //TERCER SLIDE
            // título
            $h1_slide.textContent = "adopt a Pet";
            // párrafo
            $p_slide.textContent = "We have many Adorable Pets who need a home. Share the love, adopt!";
            // botón
            $butt_slide.textContent = "adopt today";
            // apariencia de los puntos de navegación (cuál esta seleccionado)
                                    ///////////add
                
                circulo_3.classList.add("circulo_externo");
                                    ///////////remove
                circulo_0.classList.remove("circulo_interno");
                circulo_1.classList.remove("circulo_interno");
                circulo_2.classList.remove("circulo_interno");
            
        break;
    }
}
//********************************************************************FUNCION DE LOS BOTONES DE NAVEGACIÓN AL HACER CLICK*/

// Función a la hora de clickar los botones de círculos
circulo_0.addEventListener("click", function() {
    
    clearInterval(intervalo);  // Detenemos el auto-slide
    contadorIndice = 0;  // Actualizamos el índice a 0, ya que clicamos en el primer círculo
    operacion = 25 * contadorIndice;  // Movemos el slider a la posición correcta

    // Aplicamos el movimiento al slider
    slider_inner.style.transform = `translate(-${operacion}%)`;
    slider_inner.style.transition = "all .5s ease";

    // Llamamos a la función que actualiza el contenido según el índice
    cambioContenido(contadorIndice);

    // Reiniciamos el auto-slide
    intervalo = setInterval(movimiento, 5000);
});

   // CONTADOR:

  // Selecciona el elemento del banner y el contador
  const banner = document.getElementById("seccion3");
  const counterCostumers = document.getElementById("counterCostumers");
  let counting = false; // Variable para evitar que se active varias veces

  // Función para ejecutar el contador
  function startCounterCostumers() {
      let count = 0;
      counting = true; // Cambia a true cuando comienza el contador
      const interval = setInterval(() => {
          count++;
          counterCostumers.textContent = count;
          if (count >= 180) { // Detiene el contador en 180
              clearInterval(interval);
          }
      }, 20); // Ajusta la velocidad del contador
  }

  // Selecciona el elemento del banner y el contador

  const counterProfessionals = document.getElementById("counterProfessionals");


  // Función para ejecutar el contador
  function startCounterProfessionals() {
      let count = 0;
      counting = true; // Cambia a true cuando comienza el contador
      const interval = setInterval(() => {
          count++;
          counterProfessionals.textContent = count;
          if (count >= 16) { // Detiene el contador en 180
              clearInterval(interval);
          }
      }, 20); // Ajusta la velocidad del contador
  }


    // Selecciona el elemento del banner y el contador

    const counterPetsHosted = document.getElementById("counterPetsHosted");


    // Función para ejecutar el contador
    function startCounterPetsHosted() {
        let count = 0;
        counting = true; // Cambia a true cuando comienza el contador
        const interval = setInterval(() => {
            count++;
            counterPetsHosted.textContent = count;
            if (count >= 67) { // Detiene el contador en 180
                clearInterval(interval);
            }
        }, 20); // Ajusta la velocidad del contador
    }

    const counterProducts = document.getElementById("counterProducts");


    // Función para ejecutar el contador
    function startCounterProducts() {
        let count = 0;
        counting = true; // Cambia a true cuando comienza el contador
        const interval = setInterval(() => {
            count++;
            counterProducts.textContent = count;
            if (count>= 50) { // Detiene el contador en 180
                clearInterval(interval);
            }
        }, 20); // Ajusta la velocidad del contador
    }




  







  // Evento para iniciar el contador al pasar el mouse sobre el banner
  banner.addEventListener("mouseover", () => {
      if (!counting) { // Solo activa el contador si no está contando
        startCounterCostumers();
        startCounterProfessionals();
        startCounterPetsHosted();
        startCounterProducts();
        
      }
  });


  document.querySelectorAll('.contenedoresBotonesBannerTres div').forEach((button, index, buttons) => {
    const sections = document.querySelectorAll('.sliderSobreNosotrosUno, .sliderSobreNosotrosDos, .sliderSobreNosotrosTres');
    
    button.addEventListener('click', () => {
        // Oculta todas las secciones y remueve la clase 'active-tab'
        sections.forEach(section => section.classList.remove('active-tab'));
        
        // Muestra solo la sección correspondiente
        sections[index].classList.add('active-tab');

        // Elimina la clase 'pulsado' de todos los botones y la añade solo al botón actual
        buttons.forEach(btn => btn.classList.remove('pulsado'));
        button.classList.add('pulsado');
    });
});

// Inicializa mostrando solo la primera sección
document.querySelector('.sliderSobreNosotrosUno').classList.add('active-tab');
document.querySelector('.contenedoresBotonesBannerTres div').classList.add('pulsado');




//SLIDER OFERTAS

// Selección de elementos necesarios
const sliderInnerOfertas = document.querySelector('.sliderInnerBannerOfertas');
const puntosOfertas = document.querySelectorAll('.puntitosBannerOfertas .punto');
let currentIndexOffers = 0; // Índice del slider actual
const totalSlidesOffers = puntosOfertas.length;
const slideWidthOffers = 100 / totalSlidesOffers; // Ancho de cada slider en porcentaje

// Función para actualizar el slider y los puntos activos
function updateSliderOffers(index) {
    sliderInnerOfertas.style.transform = `translateX(-${index * slideWidthOffers}%)`;
    
    puntosOfertas.forEach((punto, idx) => {
        if (idx === index) {
            punto.classList.add('rellenoPunto');
        } else {
            punto.classList.remove('rellenoPunto');
        }
    });
}

// Función para avanzar al siguiente slider
function nextSlideOffers() {
    currentIndexOffers = (currentIndexOffers + 1) % totalSlidesOffers;
    updateSliderOffers(currentIndexOffers);
}

// Evento de click en cada punto para controlar el slider
puntosOfertas.forEach((punto, idx) => {
    punto.addEventListener('click', () => {
        currentIndexOffers = idx;
        updateSliderOffers(currentIndexOffers);
    });
});

// Intervalo para cambiar el slider cada 10 segundos
setInterval(nextSlideOffers, 10000);

// Iniciar el slider con el primer punto activo
updateSliderOffers(currentIndexOffers);


// Selección de elementos necesarios
const sliderInnerClientes = document.querySelector('.sliderInnerBannerQueDicenNuestrosClientes');
const puntosClientes = document.querySelectorAll('.puntitosContenidoBannerQueDicenNuestrosClientes .punto');
let currentIndexClientes = 0; // Índice del slider actual
const totalSlidesClientes = puntosClientes.length;
const slideWidthClientes = 100 / totalSlidesClientes; // Ancho de cada slider en porcentaje

// Función para actualizar el slider y los puntos activos
function updateSliderClientes(index) {
    sliderInnerClientes.style.transform = `translateX(-${index * slideWidthClientes}%)`;
    
    puntosClientes.forEach((punto, idx) => {
        if (idx === index) {
            punto.classList.add('rellenoPunto');
        } else {
            punto.classList.remove('rellenoPunto');
        }
    });
}

// Función para avanzar al siguiente slider
function nextSlideClientes() {
    currentIndexClientes = (currentIndexClientes + 1) % totalSlidesClientes;
    updateSliderClientes(currentIndexClientes);
}

// Evento de click en cada punto para controlar el slider
puntosClientes.forEach((punto, idx) => {
    punto.addEventListener('click', () => {
        currentIndexClientes = idx;
        updateSliderClientes(currentIndexClientes);
    });
});

// Intervalo para cambiar el slider cada 10 segundos
setInterval(nextSlideClientes, 10000);

// Iniciar el slider con el primer punto activo
updateSliderClientes(currentIndexClientes);




//Desplegable adopcion

document.querySelectorAll('.tituloContenedorDesplegable').forEach(header => {
    header.addEventListener('click', () => {
        const contentBody = header.nextElementSibling;
        const icon = header.querySelector('i');

        // Alterna la visibilidad del contenido
        if (contentBody.style.display === 'block') {
            contentBody.style.display = 'none';
            icon.classList.replace('bi-chevron-up', 'bi-chevron-down');
            header.classList.remove('tituloPulsadoDesplegable');
        } else {
            contentBody.style.display = 'block';
            icon.classList.replace('bi-chevron-down', 'bi-chevron-up');
            header.classList.add('tituloPulsadoDesplegable');
        }
    });
});


//Slider encuentra uin amigo 

let indiceActualMascota = 0;
        const totalItemsMascota = document.querySelectorAll('.item-mascota').length;
        const mascotasPorVista = 3;
        const indiceMaximoMascota = totalItemsMascota - mascotasPorVista;

        function moverSlideMascotas(direccion) {
            // Control de límites del movimiento
            if (direccion === 1 && indiceActualMascota < indiceMaximoMascota) {
                indiceActualMascota++;
            } else if (direccion === -1 && indiceActualMascota > 0) {
                indiceActualMascota--;
            }

            // Calcular desplazamiento
            const anchoItemMascota = document.querySelector('.item-mascota').clientWidth;
            const sliderMascotas = document.querySelector('.slider-mascotas');

            // Aplicar la transformación para deslizar
            sliderMascotas.style.transform = `translateX(-${indiceActualMascota * anchoItemMascota}px)`;
        }


        

// mapa



//Con esta función nos aseguramos que esté cargado el DOM.
document.addEventListener("DOMContentLoaded", function() {
    // Inicia el mapa aquí
    let map = L.map('mapa').setView([40.738301, -74.008917], 19);

    //Capa de calles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //Creamos nuestro propio marcador:
    let customIcon = L.icon({
        iconUrl: 'https://www.ingridkuhn.com/themes/happypaws/img/mapmarker.png',  // Reemplaza con la URL de tu imagen
        iconSize: [64, 64],
        iconAnchor: [20, 40]
    });
    //Añadir marcador
    L.marker([40.738301, -74.008917],{ icon: customIcon }).addTo(map);
});



// Script Galeria: 


function filterSelection(category) {
    const items = document.querySelectorAll('.imagen-con-hover');
    
    if (category === 'all') {
        // Mostrar todos los elementos
        items.forEach(item => item.classList.remove('desaparecerImagenGaleria'));
    } else {
        // Filtrar según la categoría
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.classList.remove('desaparecerImagenGaleria');
            } else {
                item.classList.add('desaparecerImagenGaleria');
            }
        });
    }
}









/////////////////////////////CÓDIGO PARA MOSTRAR EL MENÚ CONFIGURACIÓN DE COLOR

// Selecciona el icono de ajustes y el menú de configuración
const iconoAjustes = document.getElementById('iconoAjustes');
const menuConfiguracion = document.getElementById('menuConfiguracion');
const configuracionColor = document.querySelector('.configuracionColor');

// Función para mostrar/ocultar el menú
function mostrarMenu() {
    // Si el menú ya tiene la clase 'show', la elimina y mueve el menú hacia la izquierda
    if (configuracionColor.classList.contains('show')) {
        configuracionColor.classList.remove('show');
        configuracionColor.style.left = '-306px';  // Oculta el menú
    } else {
        // Si no tiene la clase 'show', la agrega y mueve el menú hacia la posición 0
        configuracionColor.classList.add('show');
        configuracionColor.style.left = '0';  // Muestra el menú
    }
}

// Agrega el evento de clic al icono de ajustes
iconoAjustes.addEventListener('click', mostrarMenu);

/////////////////////////////CÓDIGO PARA CAMBIAR LOS COLORES DE LA PÁGINA.

// Almacena el color actual (naranja por defecto)
let colorActual = 'naranja'; 

// Definimos un objeto que contiene todas nuestras variables de color:
let paletaColores={
    azul:{primaryColor:"#0E4F7C", secondaryColor:"#2497DB"},
    marron:{primaryColor:"#8E6341", secondaryColor:"#DEB35D"},
    verde:{primaryColor:"#567E32", secondaryColor:"#31B767"}, 
    rojo:{primaryColor:"#AA180F", secondaryColor:"#E26659"}, 
    naranja:{primaryColor:"#D35400", secondaryColor:"#F29C12"}
}

// Función para cambiar el tema:
function cambiarColor(color) {

   // Cambia los valores de las variables CSS
   document.documentElement.style.setProperty('--primary-color', paletaColores[color].primaryColor);
   document.documentElement.style.setProperty('--secondary-color', paletaColores[color].secondaryColor);
   
   // Actualiza el color actual
   colorActual = color; 
}

// Agrega eventos de clic para cada botón de color
document.getElementById('azul').addEventListener('click', () => cambiarColor('azul'));
document.getElementById('rojo').addEventListener('click', () => cambiarColor('rojo'));
document.getElementById('verde').addEventListener('click', () => cambiarColor('verde'));
document.getElementById('marron').addEventListener('click', () => cambiarColor('marron'));
document.getElementById('naranja').addEventListener('click', () => cambiarColor('naranja'));







