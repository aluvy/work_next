var membersSlide;

$(()=>{
  setMembersSlide();

  setSliderDotsPosition();
  window.addEventListener('resize', debounce(setSliderDotsPosition, 100));
});

const setSliderDotsPosition = function() {

  if( isMobileSize() ) {
  
    const photo = $(".slick-active .members-slide-inner .photo");

    let offsetTop = 0;
    let height = 0;
    let result = 0;
    let resultPagination = 0;

    if( photo.length > 0 ) {
      offsetTop = photo.offset().top;
      height = photo.height();
      result = Math.floor(offsetTop + height + 16);
      resultPagination = Math.floor(offsetTop + (height / 2) - 15 );
    }

    $(".members-slider-dots").css("top", `${result}px`);
    $(".members-slides-wrap .slide-pagination-area").css("top", `${resultPagination}px`);

  } else {

    $(".members-slider-dots").removeAttr("style");
    $(".members-slides-wrap .slide-pagination-area").removeAttr("style");
  }
}


const getInitialSlide = function() {
  const search = location.search;
  if( search == '' )  return 0;

  const idx = (search).replace("?idx=", '') * 1;
  return idx;
}


const setMembersSlide = function() {

  let totalCount = 0;
  let initialSlide = getInitialSlide();
  let nextSlide = 0;

  $(".members-slider").on('init', function(event, slick) {
    totalCount = slick.slideCount;

    nextSlide = ( initialSlide < totalCount ) ? initialSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(initialSlide + 1).padStart(2, 0);
    
    $(".members-slides-wrap .slide-pagination-area .total").html(next);
    $(".members-slides-wrap .slide-pagination-area .current").html(current);
  })

  membersSlide = $('.members-slider').slick({
    dots: true,
    appendDots: $('.members-slider-dots'),
    arrows: true,
    prevArrow: $('.members-slides-wrap .slide-pagination-area .slide-prev'),
    nextArrow: $('.members-slides-wrap .slide-pagination-area .slide-next'),
    initialSlide: initialSlide,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {
    	return $(`<button type="button"><span class="blind">${i + 1}</span></button>`);
    }
  });

  membersSlide.on("afterChange", function(event, slick, currentSlide) {
    nextSlide = ( currentSlide < totalCount -1 ) ? currentSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(currentSlide + 1).padStart(2, 0);
    
    $(".members-slides-wrap .slide-pagination-area .total").html(next);
    $(".members-slides-wrap .slide-pagination-area .current").html(current);

    setSliderDotsPosition();
  })
};