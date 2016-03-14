var scrollWaarde;

function scrollMenu(){
scrollWaarde = $(this).scrollTop();
  console.log(scrollWaarde);
}

$(window).on('scroll', scrollMenu);
