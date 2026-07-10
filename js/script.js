/* =====================================
   HUELLITAS DE ESPERANZA
   JAVASCRIPT
===================================== */


/* =====================================
   BUSCADOR Y FILTRO DE MASCOTAS
===================================== */

const buscarMascota = document.getElementById("buscarMascota");
const filtroMascota = document.getElementById("filtroMascota");
const tarjetas = document.querySelectorAll(".tarjeta");


function filtrarMascotas(){

    let texto = buscarMascota.value.toLowerCase();

    let tipo = filtroMascota.value;


    tarjetas.forEach(tarjeta => {


        let nombre = tarjeta
        .querySelector("h3")
        .textContent
        .toLowerCase();


        let categoria = tarjeta.dataset.tipo;


        let coincideNombre = nombre.includes(texto);


        let coincideTipo =
        tipo === "todos" || categoria === tipo;



        if(coincideNombre && coincideTipo){

            tarjeta.style.display="block";

        }else{

            tarjeta.style.display="none";

        }


    });


}


if(buscarMascota){

    buscarMascota.addEventListener(
        "keyup",
        filtrarMascotas
    );

}


if(filtroMascota){

    filtroMascota.addEventListener(
        "change",
        filtrarMascotas
    );

}



/* =====================================
   BOTON VOLVER ARRIBA
===================================== */


const btnArriba = document.getElementById("btnArriba");


window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 300){

        btnArriba.style.display="block";

    }else{

        btnArriba.style.display="none";

    }


});


if(btnArriba){

btnArriba.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});

}



/* =====================================
   VALIDACION DEL FORMULARIO
===================================== */


const formulario =
document.getElementById("formulario");


if(formulario){


formulario.addEventListener(
"submit",
(e)=>{


    e.preventDefault();



    let nombre =
    document.getElementById("nombre").value;


    let correo =
    document.getElementById("correo").value;


    let mensaje =
    document.getElementById("mensaje").value;



    if(
        nombre === "" ||
        correo === "" ||
        mensaje === ""
    ){

        alert(
        "Por favor completa todos los campos obligatorios."
        );

        return;

    }



    alert(
    "Gracias por contactarnos, pronto responderemos tu mensaje."
    );


    formulario.reset();



});


}



/* =====================================
   ANIMACION AL HACER SCROLL
===================================== */


const elementos =
document.querySelectorAll(
".caja, .tarjeta, .ayuda-card, .testimonio"
);



function mostrarElementos(){


    elementos.forEach(elemento=>{


        let posicion =
        elemento.getBoundingClientRect()
        .top;


        let alturaPantalla =
        window.innerHeight;


        if(posicion < alturaPantalla - 100){


            elemento.classList.add(
                "mostrar"
            );


        }


    });


}


window.addEventListener(
"scroll",
mostrarElementos
);



/* =====================================
   MENU MOVIL
===================================== */


const menu =
document.querySelector(".menu");


const header =
document.querySelector(".header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){

        header.style.background =
        "#ffffff";

    }else{

        header.style.background =
        "#ffffff";

    }


});



/* =====================================
   BOTONES DE ADOPCION
===================================== */


const botonesAdopcion =
document.querySelectorAll(
".tarjeta button"
);



botonesAdopcion.forEach(
boton=>{


    boton.addEventListener(
    "click",
    ()=>{


        alert(
        "Gracias por tu interés. Completa el formulario de contacto para iniciar el proceso de adopción."
        );


        document
        .getElementById("contacto")
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});



/* =====================================
   EFECTO DE CARGA
===================================== */


window.addEventListener(
"load",
()=>{


    document.body.classList.add(
        "cargado"
    );


});