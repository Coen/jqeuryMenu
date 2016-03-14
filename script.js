var scrollValue;
var LastPosistion = 0;
var nav = $('nav');
var menuHeight = nav.outerHeight();

function scrollMenu(){
  scrollValue = $(this).scrollTop();
    if (scrollValue>LastPosistion) {
      //We scrollen naar beneden.
      console.log('we scrollen naar beneden');
      LastPosistion=scrollValue;
      nav.css('top', -menuHeight,'px');
    } else {
      console.log('haal het menu');
      LastPosistion = scrollValue;
      nav.css('top', 0);

    }
  }

$(window).on('scroll', scrollMenu);
