$(()=>{
  _front.init();
  _aside.init();

  window.addEventListener('resize', debounce(updateVh, 300));
  window.addEventListener('scroll', updateScrollState);
});


const updateMobileScroll = function() {
  if ( isMobileSize() || isSmallHeight() ) {
    let hash = location.hash;

    if (hash) {
      hash = hash.replace("#", "");
      
      const el = $(`a[name='${hash}']`);
      if (el) scrollMoveTo(el);
    }
  }
}


const scrollMoveTo = function(element) {

  if ( !element ) return;

  setTimeout(()=>{
    const offset = Math.floor(element.offset().top);
    $('html, body').stop().animate( { scrollTop : `${offset}px` }, 500 );

    location.hash = `#${$(element).attr('name')}`;
  }, 500);
}


const updateScrollState = function() {
  if ( scrollY !== 0 ) {
    $("html").addClass("scrolled");
  } else {
    $("html").removeClass("scrolled");
  }
}


const updateVh = function() {
  if( !isMobileSize() ) _front.vh();
}


const _aside = {
  init: function() {
    _aside.handleClick();
  },
  open: function() {
    const asideButton = $("#aside_button");
    const body = $("body");

    asideButton.addClass("active");
    body.addClass("aside-open");

    try {
      myFullpage.setAllowScrolling(false);    // 스크롤 막기
      myFullpage.setKeyboardScrolling(false); // 키보드로 스크롤 비활성화
    } catch(e) {}
  },
  close: function() {
    const asideButton = $("#aside_button");
    const body = $("body");
    
    asideButton.removeClass("active");
    body.removeClass("aside-open");

    try {
      myFullpage.setAllowScrolling(true); // 스크롤 막기
      myFullpage.setKeyboardScrolling(true); // 키보드로 스크롤 비활성화
    } catch(e) {}
  },
  handleClick() {
    const asideButton = $("#aside_button");

    asideButton.off("click").on("click", function(e) {
      if( asideButton.hasClass("active") ) {
        _aside.close();
      } else {
        _aside.open();
      }
    });

    $(".aside-nav li a").on("click", function(e) {
      e.preventDefault();

      const idx = $(e.target).data('slide');
      _aside.close();

      if( isMobileSize() || isSmallHeight() ) {

        if( location.href.includes('index') ) {
          const el = $(`a[name=slide${idx}]`);
          scrollMoveTo(el);
        } else {
          window.location.href = `index.html#slide${idx}`;
        }
        
      } else {

        if( location.href.includes('index') ) {
          setTimeout(()=> myFullpage.moveTo(idx), 400);
        } else {
          window.location.href = `index.html#slide${idx}`;
        }
      }
    })
  }
}


const _front = {
  init: function(){
      _front.vh();
      _front.handleScrollDown();
  },
  vh: function(){
      const innerHeight = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${innerHeight}px`);
  },
  handleScrollDown: function() {
    const scrollDown = $("#scrolldown_button");

    scrollDown.off("click").on("click", function() {

      if( isMobileSize() || isSmallHeight() ) {
        
        const height = window.innerHeight;
        $('html, body').stop().animate( { scrollTop : scrollY + height } );

      } else {
        myFullpage.moveSectionDown();
      }
    })
  }
}


function debounce(callback, time = 500) {
  let timeout
  // closer
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        callback.apply(this, args);
    }, time)
  }
}


// 가로 1024 이하: 모바일로 동작
const isMobileSize = () => {
  const result = window.innerWidth <= 1024 ? true : false;

  if ( result ) {
    $("html").attr("data-device", "mobile");
  } else {
    $("html").attr("data-device", "pc");
  }

  return result;
};

// 세로 900이하: html[data-height="small"] 세팅
const isSmallHeight = () => {
  const result = window.innerHeight <= 900 ? true : false;

  if ( result ) {
    $("html").attr("data-height", "small");
  } else {
    $("html").attr("data-height", "normal");
  }

  return result;
};