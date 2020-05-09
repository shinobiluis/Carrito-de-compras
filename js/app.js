// Variable
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');



// Listeners
cargarEventListeners()
function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso)
}


// Funciones
// Funcion que añade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    console.log(e.target.classList)
    // Se ejecuta cuando el elemento contiene la clase agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){
        // nos vamos a los 2 padres del elemento al que se sio clic
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso)
    }
}
// lee los datos del curso
function leerDatosCurso( curso ){
    console.log(curso)
}
