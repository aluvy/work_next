$(()=>{
  _front.init();
  _aside.init();
});


const _aside = {
  init: function() {
    _aside.handleClick();

  },
  open: function() {
    const asideButton = $("#aside_button");
    const body = $("body");

    asideButton.addClass("active");
    body.addClass("aside-open");
  },
  close: function() {
    const asideButton = $("#aside_button");
    const body = $("body");
    
    asideButton.removeClass("active");
    body.removeClass("aside-open");
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

      if( isMobileSize() ) {
        
        window.location.href = `index.html#slide${idx}`;

        // $('html, body').stop().animate( { scrollTop : scrollY + 600 } );
        
      } else {
        setTimeout(()=> myFullpage.moveTo(idx), 400);
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

      if( isMobileSize() ) {
        $('html, body').stop().animate( { scrollTop : scrollY + 600 } );

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

// 1024 이하: 모바일로 동작
const isMobileSize = () => window.innerWidth <= 1024 ? true : false;