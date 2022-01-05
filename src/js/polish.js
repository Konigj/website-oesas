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
	  "Usługi świadczone przez Oportunidad Europa przyszłym pracownikom są CAŁKOWICIE BEZPŁATNE. W trakcie tego procesu nie zostaniesz poproszony o pieniądze lub zostaną udzielone zniżki na Twoje wynagrodzenie za nasze usługi.",
	visibility: false,
  };
  const question1 = {
	answer:
	  "Cały proces od momentu rejestracji w Opportunity Europe do momentu wyjazdu do Polski trwa zwykle trzy (3) miesiące; jednak terminy te mogą się różnić w trakcie procesów.",
	visibility: false,
  };
  const question2 = {
	answer:
	  "Opportunity Europe pracuje w porozumieniu z pracodawcami otrzymującymi przepis, który pozwala nie pobierać opłat od kandydatów.",
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
