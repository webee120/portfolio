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
  $('#works').hide();
  $('#additional').hide();
  $('#works .workcont .twentynine').hide();
  $('#works .workcont .tourzy').hide();
  $('#works .workcont .stori').hide();
  $('#works .workcont .lifemind').hide();

  let lastScrollTop = 10;
  let debounceTimer;

  // svg
  $('.progress');

  //스크롤
  
  $(window).on('scroll', function() {
    let scrollTop = $(this).scrollTop();

    // 기존 코드를 모두 debounce 블록 안으로 옮김!
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {

      //up
      
      if (scrollTop < lastScrollTop){
        setTimeout(function() {
          $(window).scrollTop(10);
        }, 10);
      }

      if (scrollTop < lastScrollTop 
        && $('.cover').is(':hidden')
        && $('#profile').is(':hidden')
        && $('#works').is(':hidden')
        && $('#additional').is(':hidden')
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

      if (scrollTop > lastScrollTop 
        && $('.mainmid').is(':hidden')
        && $('#profile').is(':hidden')
        && $('#works').is(':hidden')
        && $('#additional').is(':hidden')
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
        && $('#works').is(':hidden')
        && $('#additional').is(':hidden')
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

      if (scrollTop > lastScrollTop 
        && $('.cover').is(':hidden')
        && $('#profile').is(':hidden')
        && $('#works').is(':visible')
        && $('#additional').is(':hidden')
      ){
          if($('#works .worklist .samsung').hasClass('active')){
            $('#works .worklist .twentynine').addClass('active').siblings().removeClass('active');
            $('#works .workcont .twentynine').fadeIn().siblings().hide();
          }

          else if($('#works .worklist .twentynine').hasClass('active')){
            $('#works .worklist .tourzy').addClass('active').siblings().removeClass('active');
            $('#works .workcont .tourzy').fadeIn().siblings().hide();
          }

          else if($('#works .worklist .tourzy').hasClass('active')){
            $('#works .worklist .stori').addClass('active').siblings().removeClass('active');
            $('#works .workcont .stori').fadeIn().siblings().hide();
          }

          else if($('#works .worklist .stori').hasClass('active')){
            $('#works .worklist .lifemind').addClass('active').siblings().removeClass('active');
            $('#works .workcont .lifemind').fadeIn().siblings().hide();
          }

          else if($('#works .worklist .lifemind').hasClass('active')){
            $('#works .worklist .samsung').addClass('active').siblings().removeClass('active');
            $('#works .workcont .samsung').fadeIn().siblings().hide();
          }
          


      }
    }, 50);
  });

  //클릭
  var paddingValue = ($(window).width() - 750) / 2;

  $('.eclipse').click(function() {
    // profile
    if ($('.cover').is(':hidden') 
        && $('.profile').hasClass('active')
    ){
      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').animate({ 
        top:'230px',
        padding: '0 300px',
      }, 500,); 

      $('.eclipse').animate({ 
        width:'240px',
        height:'240px',
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

    // works
    if ($('.cover').is(':hidden') 
        && $('.works').hasClass('active')
    ){
      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').css('bottom', '');
      $('.eclipse-wrapper').animate({ 
        top:'0',
        paddingLeft:'0'
      }, 500,); 
      $('.eclipse').animate({ 
        width:'1000px',
        height:'1000px',
      }, 500, ); 
      $('.sun, .sun2').hide();

      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon6.png');
      }, 600);
      $('#works').delay(600).fadeIn();
    }

  });

  $('.back').click(function() {
    if ($('.cover').is(':hidden') 
      && $('.profile').hasClass('active')
    ){
      $('#profile').fadeOut();
      $('.scroll').fadeIn();
      $('.index').fadeIn();
      $(".eclipse .moon img:last-child").fadeOut();

      $('.eclipse-wrapper').css('top', '');
      $('.eclipse-wrapper').animate({ 
        bottom:'70px',
        paddingLeft: paddingValue + 'px',
        paddingRight: paddingValue + 'px',
        height:'750px'
      }, 500,); 
      $('.eclipse').animate({ 
        width:'750px',
        height:'750px',
      }, 500, function(){
        $(this).css({overflow:'hidden'});
      }); 

      $('.sun, .sun2').delay(500).fadeIn();

      $(".eclipse .moon img:last-child").fadeOut();
      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon2.png');
      }, 600);
    }


    if ($('.cover').is(':hidden') 
      && $('.works').hasClass('active')
    ){
      
    }


    if ($('.cover').is(':hidden') 
      && $('.additional').hasClass('active')
    ){
      
    }
  });



  // 백 이후 패딩값 반영

function debounce(func, wait) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

function updatePaddingIfProfileHidden() {
  if ($('#profile').is(':hidden')
      && $('#works').is(':hidden')
      && $('#additional').is(':hidden')
    ){
    var paddingValue = ($(window).width() - 750) / 2;
    $('.eclipse-wrapper').css({
      paddingLeft: paddingValue + 'px',
      paddingRight: paddingValue + 'px'
    });
  }
}

$(window).resize(debounce(updatePaddingIfProfileHidden, 200));
});