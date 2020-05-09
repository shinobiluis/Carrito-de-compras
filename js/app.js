// Variable
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody')



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
    // (Delegation)
    if(e.target.classList.contains('agregar-carrito')){
        // nos vamos a los 2 padres del elemento al que se sio clic
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso)
    }
}
// lee los datos del curso
function leerDatosCurso( curso ){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    console.log(curso)
    insertarCarrito(infoCurso)
}

// Muestra el curso seleccionado en el carito
function insertarCarrito(curso){
    console.log(curso)
    const row = document.createElement('tr')
    row.innerHTML=`
        <td>
            <img src="${curso.imagen}">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row)
}
