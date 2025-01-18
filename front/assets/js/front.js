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
      setTimeout(()=> myFullpage.moveTo(idx), 400);
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
      myFullpage.moveSectionDown();
    })
  }
}

function debounce(callback, time = 500) {
  let timeout
  // closer
  return function(...args) {
      clearTimeout(timeout);			// 기존 타이머 삭지
      timeout = setTimeout(() => {	// 새 타이머 할당
          callback.apply(this, args);	// this binding
      }, time)
  }
}