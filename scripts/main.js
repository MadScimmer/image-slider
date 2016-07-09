var imageSum = $("#slider > li").size();
var slideNow = 2;
var slideNext = 3;
var loop;

function changeSlide() {
  $("#slider > li").fadeOut(300);
  $("#slider > li#" + slideNow).fadeIn(300);

  slideNow = slideNext;
  if(slideNext === imageSum) {
    slideNext = 1;
  } else {
    slideNext++;
  }
};

function startSlider() {
  loop = setInterval(changeSlide, 3000);
};

function stopSlider() {
  clearInterval(loop);
}


$(function() {
  startSlider();

  $("img").mouseenter(stopSlider);
  $("img").mouseleave(startSlider);

  $("#wrapper > a#prev").click(function(event) {
    event.preventDefault();

    switch (slideNow) {
      case 2:
        slideNow = 4;
        slideNext = 1;
        break;
      case 1:
        slideNow = 3;
        slideNext = 4;
        break;
      case 3:
        slideNow = 1;
        slideNext = 2;
        break;
      case 4:
        slideNow = 2;
        slideNext = 3;
        break;
      default:
        alert("wut?")

    }

    changeSlide();


  });

  $("#wrapper > a#next").click(function(event) {
    event.preventDefault();
    changeSlide();


  });
});
