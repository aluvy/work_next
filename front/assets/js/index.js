var myFullpage;
var sloganSlide;
var partnersSlide;

$(()=>{

  _popup.init();

  // slogan slide random image
  setRandomImage();

  setFullPage();
  setSloganSlide();
  setPartnersSlide();

  // What we do
  _whatWeDo.init();

});

const setRandomImage = function() {
  const items = $(".section-slogan .visual-slider-item .thumbnail");
  let arr = [...items].map( x => Math.round(Math.random()) );
  items.each((idx, el)=>{
    const img = $(el).find("img");
    $(img[arr[idx]]).remove();
  });
}


const _whatWeDo = {
  init() {
    _whatWeDo.tab();
    _whatWeDo.techService();
    _whatWeDo.startupConsulting();

  },
  reset() {
    $(".btn_techService").show();
    $(".btn_techService-show").hide();

    $(".what-panel2-1").show();
    $(".what-panel2-2").hide();
  },
  tab() {
    $("[fn-tabs='whatwedo'] li a").on("click", function(e) {

      if ( isMobileSize() ) {
        // console.log('이동')
      } else {
        e.preventDefault();
      }

      const tabs = $(e.target).parents("ul").find("li");
      const tab = $(e.target).parents("li");
      const idx = tabs.index(tab);
      
      const panels = $("[fn-panels='whatwedo']").find(".what-panel");
      const panel = $(`[fn-panel='whatwedo-${idx}']`);

      tabs.removeClass("active");
      tab.addClass("active");

      panels.hide();
      panel.fadeIn();

      _whatWeDo.reset();

    });

  },
  techService() {
    $(".btn_techService").on("click", function(e) {
      e.preventDefault();
      $(e.target).hide();
      $(".btn_techService-show").fadeIn();
    })
  },
  startupConsulting() {
    $(".what-panel2-1 .btn-area .btn").on("click", function(e) {
      e.preventDefault();
      $(".what-panel2-1").hide();
      $(".what-panel2-2").fadeIn();
    });

    $(".what-panel2-2 .btn-area .btn").on("click", function(e) {
      e.preventDefault();
      $(".what-panel2-2").hide();
      $(".what-panel2-1").fadeIn();
    });
  }
}


const setFullPage = function() {

  if ( isMobileSize() ) return;

  myFullpage = new fullpage('#fullpage', {
    anchors: ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'footer'],
    scrollBar: true,
    scrollOverflow: true,
    responsiveHeight: 500,
    responsiveWidth: 1025,  // 너비가 1025일때 수동 원페이지 -> 스크롤
    afterLoad: function(anchorLink, index){
      // console.log('afterLoad', anchorLink, index);
    },
  });
}


const setSloganSlide = function() {

  let totalCount = 0;
  let initialSlide = 0;
  let nextSlide = 0;

  $(".visual-slider").on('init', function(event, slick) {
    totalCount = slick.slideCount;

    nextSlide = ( initialSlide < totalCount ) ? initialSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(initialSlide + 1).padStart(2, 0);
    
    $(".section-slogan .slide-pagination-area .total").html(next);
    $(".section-slogan .slide-pagination-area .current").html(current);
  })

  sloganSlide = $('.visual-slider').slick({
    dots: true,
    appendDots: $('.visual-slider-dots'),
    arrows: true,
    prevArrow: $('.section-slogan .slide-pagination-area .slide-prev'),
    nextArrow: $('.section-slogan .slide-pagination-area .slide-next'),
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

  sloganSlide.on("afterChange", function(event, slick, currentSlide) {
    // const current = String(currentSlide + 1).padStart(2, 0);
    // $(".visual-silder-arrows .current").html(current);

    nextSlide = ( currentSlide < totalCount -1 ) ? currentSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(currentSlide + 1).padStart(2, 0);
    
    $(".section-slogan .slide-pagination-area .total").html(next);
    $(".section-slogan .slide-pagination-area .current").html(current);

  })
};


const setPartnersSlide = function() {
  
  let totalCount = 0;
  let initialSlide = 0;
  let nextSlide = 0;

  $(".partners-slider").on('init', function(event, slick) {
    totalCount = slick.slideCount;

    nextSlide = ( initialSlide < totalCount ) ? initialSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(initialSlide + 1).padStart(2, 0);
    
    $(".section-partners .slide-pagination-area .total").html(next);
    $(".section-partners .slide-pagination-area .current").html(current);
  })

  partnersSlide = $('.partners-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: $('.section-partners .slide-pagination-area .slide-prev'),
    nextArrow: $('.section-partners .slide-pagination-area .slide-next'),
    initialSlide: initialSlide,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  partnersSlide.on("afterChange", function(event, slick, currentSlide) {
    $(".partners-tabs").find("li").removeClass("active");
    $(".partners-tabs").find("li").eq(currentSlide).addClass("active");

    nextSlide = ( currentSlide < totalCount -1 ) ? currentSlide + 1 : 0;

    const total = String(totalCount).padStart(2, 0);
    const next = String(nextSlide + 1).padStart(2, 0);
    const current = String(currentSlide + 1).padStart(2, 0);
    
    $(".section-partners .slide-pagination-area .total").html(next);
    $(".section-partners .slide-pagination-area .current").html(current);

    if( currentSlide == 1) {
      $(".section-partners .slide-pagination-area").addClass("white");
      $("#header #aside_button").addClass("white");
    } else {
      $(".section-partners .slide-pagination-area").removeClass("white");
      $("#header #aside_button").removeClass("white");
    }
  });



  $(".btn_clients").on("click", function(e) {
    e.preventDefault();
    partnersSlide.slick('slickGoTo', 1);
  });

  $(".btn_partners").on("click", function(e) {
    e.preventDefault();
    partnersSlide.slick('slickGoTo', 0);
  });

  $(".partners-tabs li a").on("click", function(e) {
    e.preventDefault();

    const tabs = $(".partners-tabs li");
    const tab = $(e.target).parents("li");
    const idx = tabs.index(tab);

    partnersSlide.slick('slickGoTo', idx);

  })
}


const _popup = {
  init() {
    _popup.open();
    _popup.handleClick();
  },
  open() {
    $("#popup").show();
  },
  close() {
    $("#popup").fadeOut();
  },
  handleClick() {
    $("#popup .btn_close").on("click", function() {
      _popup.close();
    });

    $("#popup .dimmed").on("click", function() {
      _popup.close();
    })
  }
}