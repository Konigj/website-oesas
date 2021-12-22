const btnHamburger = document.querySelector('#btnHamburger');
const links = document.querySelectorAll('.burger-link');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

function toggleMenu() {
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
}
}

//calling the function for the burger and links
btnHamburger.addEventListener('click', toggleMenu);

links.forEach(
  function(link) {
    link.addEventListener('click', toggleMenu)
  }
);




// ACCORDION FAQ

const question0 = {
	answer:
	  "Los servicios que presta Oportunidad Europa a los futuros empleados son TOTALMENTE GRATUITOS. Durante el proceso, no se le solicitarán dinero ni se le harán descuentos en su salario por nuestros servicios.",
	visibility: false,
  };
  
  const question1 = {
	answer:
	  "Todo el proceso desde el momento en que usted se registra con Oportunidad Europa, hasta el momento en que usted va a realizar el viaje a Polonia, suele tardar tres (3) meses; sin embargo, estos plazos pueden variar durante los procesos.",
	visibility: false,
  };
  const question2 = {
	answer:
	  "Sí, es necesaria una visa de trabajo que se tramita en la Embajada de Polonia de cada país. Con Oportunidad Europa usted cuenta con la ayuda personalizada para preparar los documentos requeridos y asesorarlo para posibles entrevistas. No obstante, esto no garantiza que usted obtenga el permiso ya que este es un proceso autónomo del consulado.",
	visibility: false,
  };
  const question3 = {
	answer:
	  "Existe gran variedad de oportunidades de acuerdo con su nivel educativo y conocimiento de idiomas.",
	visibility: false,
  };
  const question4 = {
	answer:
	  "Oportunidad Europa trabaja en convenio con los empleadores recibiendo una provisión la cual le permite no realizar cobros a los aspirantes.",
	visibility: false,
  };
  
  const allQuestions = [question0, question1, question2, question3, question4];
  
  const questionTab = document.querySelector(".question");
  const question = document.querySelectorAll(".question__section-button");
  const answer = document.querySelectorAll(".question__answer");
  const visible = document.querySelector(".bold");
  const hidden = document.querySelector(".hidden");
  const icon = document.querySelectorAll(".icon");
  
  let currentQuestion;
  
  question.forEach(function (el, i, arr) {
	el.addEventListener("click", function () {
	  currentQuestion = question[i];
  
	  if (allQuestions[i].visibility === false) {
		icon[i].classList.add("rotate");
		question[i].classList.add("bold");
		answer[i].innerHTML = allQuestions[i].answer;
		allQuestions[i].visibility = true;
	  } else {
		icon[i].classList.remove("rotate");
		question[i].classList.remove("bold");
		answer[i].innerHTML = "";
		allQuestions[i].visibility = false;
	  }
	  arr.forEach(function (el, index) {
		if (el !== currentQuestion) {
		  icon[index].classList.remove("rotate");
		  question[index].classList.remove("bold");
		  answer[index].innerHTML = "";
		  allQuestions[index].visibility = false;
		}
	  });
	});
  });
