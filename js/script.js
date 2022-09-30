const typed = new Typed('.typed', {
	strings: [
		'<span class="typed">Yo soy Laura Pereyra</span>',
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 100, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');
const close = document.getElementById('btn-close');

sidebar.addEventListener('click',()=>{
    if(header.classList[1] == 'transform'){
        header.classList.remove('transform')
    } else {
        header.classList.add('transform')
    }
})

close.addEventListener('click',()=>{
    header.classList.add('transform')
})



const questions = document.querySelectorAll(".question-cards");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


