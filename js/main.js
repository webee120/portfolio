$(document).ready(function(){
  // 초기 세팅
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  $(window).scrollTop(10);
  $('.mainmid').hide();
  $('.orbit').hide();
  $('.index').hide();

  let lastScrollTop = 10;

  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();

    
    if (scrollTop < lastScrollTop){
       setTimeout(function() {
        $(window).scrollTop(10);
      }, 10);
    }

    if (scrollTop > lastScrollTop){
       setTimeout(function() {
        $(window).scrollTop(10);
      }, 10);
    }

    if (scrollTop > lastScrollTop && $('.mainmid').is(':hidden')) {
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
        top: '-100px',
        left: '-100px'
      }, 1000);

      $('.eclipse .sun').delay(500).animate({
        width:'709px',
        height:'709px',
        top: '-100px',
        left: '-100px'
      }, 1000);

      $('.orbit').delay(1500).fadeIn();
      $('.index').delay(1500).fadeIn();
    }

    if (scrollTop > lastScrollTop 
      && $('.cover').is(':hidden')){

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
        }
    }

  });




  //   if (scrollTop > lastScrollTop && $('.profile').hasClass('active')) {
  //   $('.works').addClass("active").siblings().removeClass("active")
  // }
});