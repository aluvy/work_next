$(()=>{
  // _front.init();
  setSlickSlide();
  // setPartnersSlide();

  


  // $('#fullpage').fullpage({
  //   anchors:['1','2','3','4','5'],
  //   menu: '',
  //   scrollOverflow: true,
  //   scrollingSpeed: 1000,
  //   autoScrolling:true,
  //   scrollHorizontally: true,
  //   afterLoad: function(anchorLink, index){
  
  //   },
  // });

  // var myFullpage = new fullpage('#fullpage', {
  //   anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'footer'],
  //   slidesNavigation: true, 
  //   navigation: true,
  //   scrollBar: true,
  //   // responsiveHeight: 500,
  //   // responsiveWidth: 1024,  // 너비가 1000일때 수동 원페이지 -> 스크롤
  //   // menu: '#menu',
  // });


});




var mySlide;
const setSlickSlide = function() {

  let initialSlide = 0;

  $(".members-slides").on('init', function(event, slick) {
    console.log(event, slick)
    const total = String(slick.slideCount).padStart(2, 0);
    const current = String(initialSlide + 1).padStart(2, 0);
    $(".members-silder-arrows .total").html(total);
    $(".members-silder-arrows .current").html(current);
  })

  mySlide = $('.members-slides').slick({
    dots: true,
    appendDots: $('.members-slides-dots'),
    arrows: true,
    appendArrows: $('.members-silder-arrows'),
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

  // artnersSlide = $('.members-slides').slick({
  //   dots: false,
  //   // appendDots: $('.visual-slider-dots'),
  //   arrows: false,
  //   // appendArrows: $('.visual-silder-arrows'),
  //   // initialSlide: initialSlide,
  //   // autoplay: true,
  //   // autoplaySpeed: 5000,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // customPaging: function(slider, i) {
  //   // 	return $(`<button type="button"><span class="blind">${i + 1}</span></button>`);
  //   // }

  mySlide.on("afterChange", function(event, slick, currentSlide) {
    const current = String(currentSlide + 1).padStart(2, 0);
    $(".visual-silder-arrows .current").html(current);
  })
};