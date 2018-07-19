$(document).ready(function () {


$('.btn').on('click', function() {
  if (!$('.menu-top').hasClass('clicked')) { // если класса нет
    $('.menu-top').addClass('clicked').slideToggle('slow'); // добавляем класс
  } else { // если есть
    $('.menu-top').removeClass('clicked').SlideUp('slow'); // убираем класс

  }
});
});