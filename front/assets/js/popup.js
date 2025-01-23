const _popup = {
  init() {
    _popup.open();
    _popup.handleClick();
  },
  open() {
    const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD" 형식
    const lastClosedDate = localStorage.getItem('lastClosedDate');

    // 오늘 하루 보지 않기 버튼이 클릭되지 않았거나 오늘 날짜가 저장되지 않은 경우
    if (lastClosedDate != today) {
      setTimeout(()=>{
        $("#popup.use").show();
        $("html, body").addClass("no-scroll");
      }, 100);
    }

  },
  close() {
    const today = new Date().toISOString().split('T')[0];
    const isChecked = $("#popup #today").is(':checked');

    if ( isChecked ) localStorage.setItem("lastClosedDate", today);

    $("#popup").fadeOut();
    $("html, body").removeClass("no-scroll");
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


$(()=>{
  _popup.init();
})