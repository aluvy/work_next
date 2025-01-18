var membersSlide;

$(()=>{

  setMembersSlide();

});


const setMembersSlide = function() {

  let totalCount = 0;
  let initialSlide = 0;
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
    // appendArrows: $('.members-silder-arrows'),
    prevArrow: $('.members-slides-wrap .slide-pagination-area .slide-prev'),
    nextArrow: $('.members-slides-wrap .slide-pagination-area .slide-next'),
    initialSlide: initialSlide,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {
    	return $(`<button type="button"><span class="blind">${i + 1}</span></button>`);
    }
  });

  membersSlide.on("afterChange", function(event, slick, currentSlide) {

    // const current = String(currentSlide + 1).padStart(2, 0);
    // $(".visual-silder-arrows .current").html(current);

    nextSlide = ( currentSlide < totalCount -1 ) ? currentSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(currentSlide + 1).padStart(2, 0);
    
    $(".members-slides-wrap .slide-pagination-area .total").html(next);
    $(".members-slides-wrap .slide-pagination-area .current").html(current);
  })
};