$(document).ready(function(){
  //실행
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });
  $(window).scrollTop(10);

  $('.loading').hide();
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

  var paddingValue = ($(window).width() - 750) / 2;
  var paddingValue2 = ($(window).width() - 1330) / 2;
  var paddingValue3 = ($(window).width() - 1000);
  function updatePaddingValues() {
    paddingValue = ($(window).width() - 750) / 2;
    paddingValue2 = ($(window).width() - 1330) / 2;
    paddingValue3 = ($(window).width() - 1000);
  }
  $(window).resize(function() {
    updatePaddingValues();
  });
  updatePaddingValues();

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

      if (scrollTop < lastScrollTop 
        && $('.cover').is(':hidden')
        && $('#profile').is(':hidden')
        && $('#works').is(':visible')
        && $('#additional').is(':hidden')
      ){

          if($('#works .worklist .tourzy').hasClass('active')){
            $('#works .worklist .twentynine').addClass('active').siblings().removeClass('active');
            $('#works .workcont .twentynine').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'0'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'0'
            });

            $('.moon img:first-child').attr('src', 'img/moon7-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon7.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingRight:'0',
              paddingLeft: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px'
            }, 400,); 

            $('#works .worklist').css({
              paddingLeft:'0',
              paddingRight:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              left:'auto',
              right:'0'
            });

            $('#works .backposition').css({
              paddingLeft: '0',
              paddingRight: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .stori').hasClass('active')){
            $('#works .worklist .tourzy').addClass('active').siblings().removeClass('active');
            $('#works .workcont .tourzy').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'30%'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'10%'
            });

            $('.moon img:first-child').attr('src', 'img/moon8-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon8.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingLeft:'0',
              paddingRight: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
              marginTop: '500px'
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px',
              marginTop: '0'
            }, 400,); 

            $('#works .worklist').css({
              paddingRight:'0',
              paddingLeft:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              right:'auto',
              left:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingRight: '0',
              paddingLeft: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .lifemind').hasClass('active')){
            $('#works .worklist .stori').addClass('active').siblings().removeClass('active');
            $('#works .workcont .stori').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'0'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'0'
            });

            $('.moon img:first-child').attr('src', 'img/moon9-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon9.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingRight:'0',
              paddingLeft: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px'
            }, 400,); 
            
            $('#works .worklist').css({
              paddingLeft:'0',
              paddingRight:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              left:'auto',
              right:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingLeft: '0',
              paddingRight: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .samsung').hasClass('active')){
            $('#works .worklist .lifemind').addClass('active').siblings().removeClass('active');
            $('#works .workcont .lifemind').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'30%'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'10%'
            });

            $('.moon img:first-child').attr('src', 'img/moon10-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon10.png');
            }, 600);
          }

          else if($('#works .worklist .twentynine').hasClass('active')){
            $('#works .worklist .samsung').addClass('active').siblings().removeClass('active');
            $('#works .workcont .samsung').fadeIn().siblings().hide();

            $('.orbit img:nth-child(1)').animate({
              opacity:'30%'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'10%'
            });
            $('.moon img:first-child').attr('src', 'img/moon6-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon6.png');
            }, 200);

            $('.eclipse-wrapper').animate({ 
              paddingLeft:'0',
              paddingRight: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
              marginTop: '500px'
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px',
              marginTop: '0'
            }, 400,); 

            $('#works .worklist').css({
              paddingRight:'0',
              paddingLeft:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              right:'auto',
              left:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingRight: '0',
              paddingLeft: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
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
        }, 500);

        $('.orbit').delay(1000).fadeIn();
        $('.index').delay(1000).fadeIn();

        setTimeout(function() {
          $('.moon img:first-child').attr('src', 'img/moon2.png');
        }, 1000);

        setTimeout(function() {
          $('.eclipse').css({
          cursor:'pointer'
        })
        }, 1000);
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
            $('.orbit img:nth-child(1)').animate({
              opacity:'0'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'0'
            });

            $('.moon img:first-child').attr('src', 'img/moon7-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon7.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingRight:'0',
              paddingLeft: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px'
            }, 400,); 

            $('#works .worklist').css({
              paddingLeft:'0',
              paddingRight:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              left:'auto',
              right:'0'
            });

            $('#works .backposition').css({
              paddingLeft: '0',
              paddingRight: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .twentynine').hasClass('active')){
            $('#works .worklist .tourzy').addClass('active').siblings().removeClass('active');
            $('#works .workcont .tourzy').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'30%'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'10%'
            });

            $('.moon img:first-child').attr('src', 'img/moon8-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon8.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingLeft:'0',
              paddingRight: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
              marginTop: '500px'
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px',
              marginTop: '0'
            }, 400,); 

            $('#works .worklist').css({
              paddingRight:'0',
              paddingLeft:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              right:'auto',
              left:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingRight: '0',
              paddingLeft: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .tourzy').hasClass('active')){
            $('#works .worklist .stori').addClass('active').siblings().removeClass('active');
            $('#works .workcont .stori').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'0'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'0'
            });

            $('.moon img:first-child').attr('src', 'img/moon9-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon9.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingRight:'0',
              paddingLeft: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px'
            }, 400,); 
            
            $('#works .worklist').css({
              paddingLeft:'0',
              paddingRight:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              left:'auto',
              right:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingLeft: '0',
              paddingRight: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .stori').hasClass('active')){
            $('#works .worklist .lifemind').addClass('active').siblings().removeClass('active');
            $('#works .workcont .lifemind').fadeIn().siblings().hide();
            $('.orbit img:nth-child(1)').animate({
              opacity:'30%'
            });
            $('.orbit img:nth-child(2)').animate({
              opacity:'10%'
            });

            $('.moon img:first-child').attr('src', 'img/moon10-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon10.png');
            }, 600);

            $('.eclipse-wrapper').animate({ 
              paddingLeft:'0',
              paddingRight: paddingValue3,
            }, 600,);
            $('.eclipse').animate({ 
              width:'500px',
              height: '500px',
              marginTop: '500px'
            }, 200,); 
            $('.eclipse').delay(200).animate({ 
              width:'1000px',
              height: '1000px',
              marginTop: '0'
            }, 400,); 
    
            $('#works .worklist').css({
              paddingRight:'0',
              paddingLeft:'786px'
            });
            $('#works .workcont > li .contimg').css({ 
              right:'auto',
              left:'0'
            }, 600,);

            $('#works .backposition').css({
              paddingRight: '0',
              paddingLeft: '1514px'
            });

            $('#works .worklist').hide();
            $('#works .workcont').hide();
            $('#works .backposition').hide();
            $('#works .worklist').delay(600).fadeIn();
            $('#works .workcont').delay(600).fadeIn();
            $('#works .backposition').delay(600).fadeIn();
          }

          else if($('#works .worklist .lifemind').hasClass('active')){
            $('#works .worklist .samsung').addClass('active').siblings().removeClass('active');
            $('#works .workcont .samsung').fadeIn().siblings().hide();
            $('.moon img:first-child').attr('src', 'img/moon6-1.png');
            setTimeout(function() {
              $('.moon img:first-child').attr('src', 'img/moon6.png');
            }, 200);
          }
      }
    }, 200);
  });

  //eclipse click

  $('.eclipse').click(function() {
    // profile
    if ($('.cover').is(':hidden') 
        && $('.profile').hasClass('active')
    ){ 
      $('.orbit img:nth-child(1)').animate({
        opacity:'30%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'10%'
      });
      
      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').animate({ 
        height:'546px',
        paddingLeft: paddingValue2 + 'px',
        paddingRight: paddingValue2 + 'px',
        paddingBottom: '306px',
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
      $('.orbit img:nth-child(1)').animate({
        opacity:'30%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'10%'
      });

      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').animate({ 
        paddingLeft:'0',
        height:'1000px'
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


    if ($('.cover').is(':hidden') 
        && $('.works').hasClass('active')
    ){
      $('.orbit img:nth-child(1)').animate({
        opacity:'30%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'10%'
      });
    }
  });

  $('.profile').click(function() {
    if ($('.cover').is(':hidden') 
        && $('.profile').hasClass('active')
    ){ 
      $('.orbit img:nth-child(1)').animate({
        opacity:'30%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'10%'
      });
      
      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').animate({ 
        height:'546px',
        paddingLeft: paddingValue2 + 'px',
        paddingRight: paddingValue2 + 'px',
        paddingBottom: '306px',
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
  });

  $('.works').click(function() {
    if ($('.cover').is(':hidden') 
        && $('.works').hasClass('active')
    ){
      $('.orbit img:nth-child(1)').animate({
        opacity:'30%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'10%'
      });

      $('.scroll').fadeOut();
      $('.index').fadeOut();

      $('.eclipse-wrapper').animate({ 
        paddingLeft:'0',
        height:'1000px'
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

  ////
  ////

  //back click

  $('.back').click(function() {
    if ($('.cover').is(':hidden') 
      && $('.profile').hasClass('active')
    ){
      $('.orbit img:nth-child(1)').animate({
        opacity:'80%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'30%'
      });

      $('#profile').fadeOut();
      $('.scroll').fadeIn();
      $('.index').fadeIn();
      $(".eclipse .moon img:last-child").fadeOut();

      $('.eclipse-wrapper').animate({ 
        height:'750px',
        paddingLeft: paddingValue + 'px',
        paddingRight: paddingValue + 'px',
        paddingBottom: '0'
      }, 500,); 
      $('.eclipse').animate({ 
        width:'750px',
        height:'750px',
      }, 500, function(){
        $(this).css({overflow:'hidden'});
      }); 

      $('.sun, .sun2').delay(500).fadeIn();
      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon2.png');
      }, 600);
    }


    if ($('.cover').is(':hidden') 
      && $('.works').hasClass('active')
    ){
      $('.orbit img:nth-child(1)').animate({
        opacity:'80%'
      });
      $('.orbit img:nth-child(2)').animate({
        opacity:'30%'
      });
      
      $('#works .worklist .samsung').addClass('active').siblings().removeClass('active');
      $('#works .workcont .samsung').show().siblings().hide();
      
      $('.moon img:first-child').attr('src', 'img/moon6.png');

      $('#works .worklist').css({
        paddingRight:'0',
        paddingLeft:'786px'
      });
      $('#works .backposition').css({
        paddingRight: '0',
        paddingLeft: '1514px'
      });

      setTimeout(function() {
        $('#works .workcont > li .contimg').css({
          right:'auto', 
          left:'0'
          });
      }, 2000);

      $('#works').fadeOut();
      $('.scroll').fadeIn();
      $('.index').fadeIn();

      $('.eclipse-wrapper').animate({ 
        height:'750px',
        paddingLeft: paddingValue + 'px',
        paddingRight: paddingValue + 'px',
      }, 500,); 
      $('.eclipse').animate({ 
        width:'750px',
        height:'750px',
      }, 500, function(){
        $(this).css({overflow:'hidden'});
      }); 

      $('.sun2').delay(500).fadeIn();
      $(".eclipse .moon img:last-child").fadeOut();
      setTimeout(function() {
        $('.moon img:first-child').attr('src', 'img/moon3.png');
      }, 600);
    }


    if ($('.cover').is(':hidden') 
      && $('.additional').hasClass('active')
    ){
      
    }
  });

  //hover 
  
  $('.mainmid li').mouseenter(function(){
    $('.mainmidbg').stop().fadeIn();
    $('.mainmidbg ul li').eq($(this).index()).addClass('active').siblings().removeClass('active');
    $('.mainleft').css({
      color : '#fff'
    });
    $('.mainright').css({
      color : '#fff'
    });
  });
  $('.mainmid li').mouseleave(function(){
    $('.mainmidbg').stop().fadeOut();
    $('mainmidbg ul li').removeClass('active')
    $('.mainleft').css({
      color : '#6E6857'
    });
    $('.mainright').css({
      color : '#6E6857'
    });
  });



  $('#works .workcont .samsung .contimg').hover(
    function() {
      var imgHeight = $(this).find('img').height();
      var containerHeight = $(this).height();
      var moveY = containerHeight - imgHeight;

      if (moveY < 0) {
        $(this).find('img').stop().animate({ top: moveY + 'px' }, 5000);
      }
    },
    function() {
      $(this).find('img').stop().animate({ top: '180px' }, 100); // 이 부분 속도 빠르게 (150ms)
    }
  );

  $('#works .workcont .stori .contimg').hover(
    function() {
      var imgHeight = $(this).find('img').height();
      var containerHeight = $(this).height();
      var moveY = containerHeight - imgHeight;

      if (moveY < 0) {
        $(this).find('img').stop().animate({ top: moveY + 'px' }, 20000);
      }
    },
    function() {
      $(this).find('img').stop().animate({ top: '180px' }, 200); // 이 부분 속도 빠르게 (150ms)
    }
  );


  // 백 이후 패딩값 반영

  function debounce(func, wait) {
    var timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }

  function updatePadding() {
    if ($('#profile').is(':hidden')
        && $('#works').is(':hidden')
        && $('#additional').is(':hidden')
      ){
      var paddingValue4 = ($(window).width() - 750) / 2;
      $('.eclipse-wrapper').css({
        paddingLeft: paddingValue4 + 'px',
        paddingRight: paddingValue4 + 'px'
      });
    }

    if ($('#profile').is(':visible')
        && $('#works').is(':hidden')
        && $('#additional').is(':hidden')
      ){
      var paddingValue5 = ($(window).width() - 1330) / 2;
      $('.eclipse-wrapper').css({
        paddingLeft: paddingValue5 + 'px',
        paddingRight: paddingValue5 + 'px'
      });
    }

    if ($('#works').is(':visible')
        && $('#profile').is(':hidden')
        && $('#additional').is(':hidden')
      ){
        var paddingValue6 = ($(window).width() - 1000);
        if($('#works .worklist .twentynine').hasClass('active')){
          $('.eclipse-wrapper').css({
              paddingLeft: paddingValue6 + 'px'
          });
        }
        else if($('#works .worklist .stori').hasClass('active')){
          $('.eclipse-wrapper').css({
              paddingLeft: paddingValue6 + 'px'
          });
        }
    }
  }

  $(window).resize(debounce(updatePadding, 50));
});