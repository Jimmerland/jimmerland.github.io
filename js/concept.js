
var currentSlide = 0
var totalSlides = $('.holder div').length

// function (next slide)
var nextSlide = function(){
  currentSlide = currentSlide + 1;
  if(currentSlide >= totalSlides){
    currentSlide = 0;
  }
  var leftPosition = (-currentSlide * 100)  + 'vw'
    $('.holder').css('left', leftPosition)
  
  var slideNumber = currentSlide + 1;
  $('.steps').text(slideNumber + ' / ' + totalSlides)
};

//function(previous slide)
var previousSlide = function(){
  currentSlide = currentSlide - 1;
 if(currentSlide < 0){
    currentSlide = totalSlides - 1;
 }

var leftPosition = (-currentSlide * 100)  + 'vw'
  $('.holder').css('left', leftPosition);

var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + ' / ' + totalSlides)
}

//setInterval 5seconds
var autoSlide = setInterval(function(){
nextSlide()}, 5000)

$('.next').on('click', function(){
  clearInterval(autoSlide)
  nextSlide()
});

$('.prev').on('click', function(){
  clearInterval(autoSlide);
  previousSlide();
});

$('body').on('keydown', function(event){
  var keyCode = event.keyCode;
  if(keyCode ==37){
    clearInterval(autoSlide);
    previousSlide();
  }
  if(keyCode ==39){
    clearInterval(autoSlide);
    nextSlide();
   }
  if(keyCode ==27) {
    clearInterval(autoSlide);
    window.location.href='./gallery.html';
  }
});