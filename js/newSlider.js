let slides = document.querySelectorAll('.slide');
let prev = document.querySelector('.left');
let next = document.querySelector('.right');
let dots = document.querySelectorAll('.dot');
let slidesWrapper = document.querySelector('.slider-wrapper');
let stop = document.querySelector('.stop');
let play = document.querySelector('.play');
let index = 0;

function activeSlide(i) {
   for (slide of slides) {
      slide.classList.remove('active');
   }
   slides[i].classList.add('active');
}

let activeFunctions = function (ind) {
   activeSlide(ind);
   activeDot(ind);
}

function activeDot(i) {
   for (dot of dots) {
      dot.classList.remove('active');
   }
   dots[i].classList.add('active');
}

function nextSlide() {
   if (index == slides.length - 1) {
      index = 0;
      activeFunctions(index);
      clearInterval(interval);
      stopBtn();
   }
   else {
      index++;
      activeFunctions(index);
      clearInterval(interval);
      stopBtn();
   }
}
function prevSlide() {
   if (index == 0) {
      index = slides.length - 1;
      activeFunctions(index);
      clearInterval(interval);
      stopBtn();
   }
   else {
      index--;
      activeFunctions(index);
      clearInterval(interval);
      stopBtn();
   }
}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      activeFunctions(index);
      clearInterval(interval);
      stopBtn();
   })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

let interval = setInterval(function () {
   if (index == slides.length - 1) {
      index = 0;
      activeFunctions(index);
   }
   else {
      index++;
      activeFunctions(index);
   }
}, 2000);

const stopBtn = () => {
   play.classList.remove('active');
   stop.classList.add('active');
}
const playBtn = () => {
   stop.classList.remove('active');
   play.classList.add('active');
}

stop.addEventListener('click', () => {
   stopBtn();
   clearInterval(interval);
});

play.addEventListener('click', () => {
   playBtn();
   interval = setInterval(() => {
      if (index == slides.length - 1) {
         index = 0;
         activeFunctions(index);
      }
      else {
         index++;
         activeFunctions(index);
      }
   }, 2000);
});