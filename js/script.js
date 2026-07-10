document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. FILTRADO INTELIGENTE DE MASCOTAS ---
    const buscarMascota = document.getElementById("buscarMascota");
    const filtroMascota = document.getElementById("filtroMascota");
    const tarjetasPet = document.querySelectorAll(".tarjeta-pet");

    function filtrarCatalogo() {
        const textoUsuario = buscarMascota.value.toLowerCase().trim();
        const tipoSeleccionado = filtroMascota.value;

        tarjetasPet.forEach(tarjeta => {
            const nombreMascota = tarjeta.querySelector("h3").textContent.toLowerCase();
            const categoriaMascota = tarjeta.dataset.tipo;

            const coincideNombre = nombreMascota.includes(textoUsuario);
            const coincideTipo = (tipoSeleccionado === "todos" || categoriaMascota === tipoSeleccionado);

            if (coincideNombre && coincideTipo) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    }

    if (buscarMascota) buscarMascota.addEventListener("keyup", filtrarCatalogo);
    if (filtroMascota) filtroMascota.addEventListener("change", filtrarCatalogo);


    // --- 2. CONTROL DEL BOTÓN VOLVER ARRIBA ---
    const btnArriba = document.getElementById("btnArriba");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btnArriba.classList.add("active");
        } else {
            btnArriba.classList.remove("active");
        }
    });

    if (btnArriba) {
        btnArriba.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // --- 3. VALIDACIÓN INTERACTIVA DEL FORMULARIO ---
    const formulario = document.getElementById("formulario");

    if (formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Por favor, completa todos los campos obligatorios para procesar tu solicitud.");
                return;
            }

            alert(`¡Muchas gracias, ${nombre}! Hemos recibido tu mensaje. Un asesor del refugio se contactará contigo a la brevedad.`);
            formulario.reset();
        });
    }


    // --- 4. ACCIÓN DE LOS BOTONES DE ADOPCIÓN ---
    const botonesAdopcion = document.querySelectorAll(".btn-adopcion");

    botonesAdopcion.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const nombreMascota = e.target.closest(".tarjeta-info").querySelector("h3").firstChild.textContent.trim();
            
            alert(`¡Gracias por abrir tu corazón! Para iniciar la solicitud de adopción de ${nombreMascota}, por favor llena el formulario de contacto al final de la página.`);
            
            const seccionContacto = document.getElementById("contacto");
            if (seccionContacto) {
                seccionContacto.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    // --- 5. ANIMACIONES MODERNAS ON-SCROLL ---
    const elementosAnimables = document.querySelectorAll(".animate-scroll");

    function desencadenarAnimacion() {
        const alturaDisparador = (window.innerHeight / 5) * 4.2;

        elementosAnimables.forEach(elemento => {
            const distanciaTop = elemento.getBoundingClientRect().top;

            if (distanciaTop < alturaDisparador) {
                elemento.classList.add("active-view");
            }
        });
    }

    window.addEventListener("scroll", desencadenarAnimacion);
    desencadenarAnimacion(); // Ejecución inicial para capturar elementos arriba
});
