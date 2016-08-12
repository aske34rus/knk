// Слайдер
// @prepros-prepend ./slider.js

var screenMD = 995, screenSM = 768;

// Скрипт плавного перехода к нужному блоку
$(document).ready(function(){
  $(".to-link").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 800);
  });
});


// Инициализация меню
$(document).ready(function(){

  // Доваление прозрачности и фиксации при включенных скриптах
  $('nav').addClass('inTop fixed');

  // Если с мобильника убираем, прозрачность и закрываем
  if ($(window).width() <= screenMD){
     $('nav').removeClass('open inTop');
  }else{
  // При широком экране открытие срабатывает при наведении наведении
    $('nav').hover(
    function(){
      $('nav').addClass('open');
    },
    function(){
      if (!$('nav').hasClass('inTop')) {
        $('nav').removeClass('open');
      }
    });

  }
});


// Плавающее меню
$(function(){
 $(window).scroll(function() {
  var top = $(document).scrollTop();

  if (top > 100){  //это значение высоты прокрутки страницы для добавления класс
    $('nav').removeClass('inTop open');
  }else if ($(window).width() >= screenMD){
   $('nav').addClass('inTop open');
  }

  if (top > 100){  //это значение высоты прокрутки страницы для добавления класс
    $('nav').removeClass('inTop open');
  }else if ($(window).width() >= screenMD){
   $('nav').addClass('inTop open');
  }


 });
});




// Копка открытия и закрытия меню
$('.bars').click(
function(){
  if ( $('nav').hasClass('open') ) {
    $('nav').removeClass('open');
  }else{
    $('nav').addClass('open');
  }
});

// Кнопка "на верх"
$('body').append('<p id="back-top" class="to-link"><a href="#top"><img src="./assets/img/top-bottom.png"></a></p>');
$ ('#back-top').fadeOut(0);
$(document).ready(function(){
  $ (window).scroll (function () {
  if ($ (this).scrollTop () > 100) {
  $ ('#back-top').fadeIn(500);
  } else {
  $ ('#back-top').fadeOut(500);
  }
  });
});



// Как мы работаем
$(document).ready(function(){

  $(document).scroll(function(){

      var one   = [".how .row#dev", ".how .csslogo .dev"];
      var two   = [".how .row#desing", ".how .csslogo .desing"];
      var three = [".how .row#seo", ".how .csslogo .seo"];

      // console.log(one);

      var onePos   = $(one[0]).offset().top;
      var twoPos   = $(two[0]).offset().top;
      var threePos = $(three[0]).offset().top;

      var pPos = $(window).height() + $(window).scrollTop();

      var fix = false;
      pPos = pPos-400;

      if (onePos <= pPos) {
        $(one[1]).addClass('active')
        $(one[0]).addClass('active')
        fix = true;
      }else{
        $(one[1]).removeClass('active')
        $(one[0]).removeClass('active')
      }

      if (twoPos <= pPos) {
        $(one[1]).removeClass('active')
        $(two[1]).addClass('active')
        $(one[0]).removeClass('active')
        $(two[0]).addClass('active')
      }else{
        $(two[1]).removeClass('active')
        $(two[0]).removeClass('active')
      }

      if (threePos <= pPos-100) {
        $(two[1]).removeClass('active')
        $(three[1]).addClass('active')
        $(two[0]).removeClass('active')
        $(three[0]).addClass('active')
        fix = false;
      }else{
        $(three[1]).removeClass('active')
        $(three[0]).removeClass('active')
      }

      if (fix) {
        $(".how .csslogo").css({
          'top': pPos,
          'left': $(".how .container").offset().left,
          'position': 'absolute',
          'float': 'none'
        });
      }

  });
});

