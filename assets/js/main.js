// Activación tooltips de bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Espera a que cargue todo el documento
document.addEventListener("DOMContentLoaded", function() {
    //Agrega una función on-click a la id #btn-contacto
    $("#btn-contacto").on("click",function(){
        // Agrega un console.log() para imprimir un mensaje en la consola
        console.log("Hiciste clic en el boton enviar correo");
        //genera una alerta
        alert("Mensaje enviado correctamente");  
    });
    //Activa la visualización del evento scroll
    window.addEventListener('scroll', function() {
        //Selecciona el elemento con la ID #navbar-top
        const nav = document.getElementById('navbar-top')
        // Verificar si el scroll ha bajado una cantidad equivalente a la altura de la ventana
        if (window.scrollY > window.innerHeight) {
            // Agregar la clase si cumple
            nav.classList.add('bg_black');
        } else {
            // Eliminar la clase si no cumple
            nav.classList.remove('bg_black');
        }
       
    });
    
     // --------- Scroll moth Navbar ------------
        // Nav "Quiénes Somos"
        var navnosotros = document.getElementById('nav-nosotros')
        var targetnosotros = document.getElementById('sect.nosotros')
        navnosotros.addEventListener('click', function() {
            targetnosotros.scrollIntoView ({
                behavior: "smooth"
            });
        });
        // Nav "Destacados"
        var navdestacados = document.getElementById('nav-destacados')
        var targetdestacados = document.getElementById('sect.destacados')
        navdestacados.addEventListener('click', function() {
            targetdestacados.scrollIntoView ({
                behavior: "smooth"
            });
        });
         // Nav "Contacto"
         var navcontacto = document.getElementById('nav-contacto')
         var targetcontacto = document.getElementById('sect.contacto')
         navcontacto.addEventListener('click', function() {
             targetcontacto.scrollIntoView ({
                 behavior: "smooth"
             });
         });
});


