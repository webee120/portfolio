$(document).ready(function(){
  // 실행
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  $(window).scrollTop(10);
  $('.mainmid').hide();
  $('.orbit').hide();
  $('.index').hide();
  $('.eclipse .moon img:last-child').hide();
  $('#profile').hide();

  let lastScrollTop = 10;

  // svg
  $('.progress');

  //스크롤

  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();

    //up
    
    if (scrollTop < lastScrollTop){
       setTimeout(function() {
        $(window).scrollTop(10);
      }, 10);
    }

    if (scrollTop < lastScrollTop 
      && $('.cover').is(':hidden')
      && $('#profile').is(':hidden')
      ){

         if($('.profile').hasClass('active')) {
          $('.additional').addClass("active").siblings().removeClass("active")
          $('.works').css({
            order: '1'
          });
          $('.additional').css({
            order: '2'
          });
          $('.profile').css({
            order: '3'
          });
          $('.eclipse .sun2').stop().hide();
          $('.eclipse .sun').stop().delay(100).fadeOut();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon4.png');
          }, 100);
        }

        else if($('.additional').hasClass('active')){
          $('.works').addClass("active").siblings().removeClass("active")
          $('.profile').css({
            order: '1'
          });
          $('.works').css({
            order: '2'
          });
          $('.additional').css({
            order: '3'
          });
          $('.eclipse .sun2').stop().delay(100).fadeIn();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon3.png');
          }, 100);
        }

        else if ($('.works').hasClass('active')) {
          $('.profile').addClass("active").siblings().removeClass("active")
          $('.additional').css({
            order: '1'
          });
          $('.profile').css({
            order: '2'
          });
          $('.works').css({
            order: '3'
          });
          $('.eclipse .sun').stop().delay(100).fadeIn();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon2.png');
          }, 100);
        }
    }

    //down

    if (scrollTop > lastScrollTop){
       setTimeout(function() {
        $(window).scrollTop(10);
      }, 10);
    }

    if (scrollTop > lastScrollTop && $('.mainmid').is(':hidden')
        && $('#profile').is(':hidden')
    ){
      $('.cover').fadeOut();
      $('.mainmid').slideDown();

      $('.mainleft').animate({ 
        'font-size': "6rem",
        'line-height': '36px',
        top: '7px',
        left: '160px',
      }, 500); 
       $('.mainleft').css({
        transform: 'translateX(0)',
         bottom: 'auto',
      });
      
      $('.mainright').animate({ 
        'font-size': '1.8rem',
        'font-weight': '800',
        top: '41px',
        right: '160px',
      }, 500); 
      $('.mainright').css({
        left: 'auto',
        transform: 'translateY(-50%)'
      });
      $('.mainright span').hide();
      

      $('.eclipse .sun').delay(500).animate({
        width:'709px',
        height:'709px',
        top: '-70px',
        left: '-120px'
      }, 1000);

      $('.orbit').delay(1500).fadeIn();
      $('.index').delay(1500).fadeIn();

      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon2.png');
      }, 1600);

      setTimeout(function() {
        $('.eclipse').css({
        cursor:'pointer'
      })
      }, 1600);
    }

    if (scrollTop > lastScrollTop 
      && $('.cover').is(':hidden')
      && $('#profile').is(':hidden')
    ){
        if($('.profile').hasClass('active')){
          $('.works').addClass("active").siblings().removeClass("active")
          $('.profile').css({
            order: '1'
          });
          $('.works').css({
            order: '2'
          });
          $('.additional').css({
            order: '3'
          });
          $('.eclipse .sun2').stop().show();
          $('.eclipse .sun').stop().delay(100).fadeOut();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon3.png');
          }, 100);
        }

        else if($('.works').hasClass('active')) {
          $('.additional').addClass("active").siblings().removeClass("active")
          $('.works').css({
            order: '1'
          });
          $('.additional').css({
            order: '2'
          });
          $('.profile').css({
            order: '3'
          });
          $('.eclipse .sun2').stop().delay(100).fadeOut();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon4.png');
          }, 100);
        }

        else if ($('.additional').hasClass('active')) {
          $('.profile').addClass("active").siblings().removeClass("active")
          $('.additional').css({
            order: '1'
          });
          $('.profile').css({
            order: '2'
          });
          $('.works').css({
            order: '3'
          });
          $('.eclipse .sun').stop().delay(100).fadeIn();

          setTimeout(function() {
            $('.moon img:first-child').attr('src', 'img/moon2.png');
          }, 100);
        }
    }
  });

  //클릭
  $('.eclipse').click(function() {
    if ($('.cover').is(':hidden') 
        && $('.profile').hasClass('active')
    ){
      $('.scroll').fadeOut();
      $('.index').fadeOut();
      $('.eclipse').animate({ 
        width:'240px',
        height:'240px',
        top:'230px',
        margin: '0 300px',
      }, 500, function(){
        $(this).css({overflow:'visible',});
      }); 

      $('.sun, .sun2').hide();

      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon5.png');
      }, 600);
      $(".eclipse .moon img:last-child").delay(1000).fadeIn();

      $('#profile').delay(1000).fadeIn();

      // svg
      setTimeout(function() {
        $('.progress').delay(2000).addClass('active');
      }, 1000);
    }
  });
});