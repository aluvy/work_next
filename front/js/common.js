$(document).ready(function(){

    
  $(".tab_menu ul li").click(function() {
    var idx = $(this).index();
    $(".tab_menu ul li").removeClass("on");
    $(".tab_menu ul li").eq(idx).addClass("on");
    $(".tab_cont .con_box .txt_box").hide();
    $(".tab_cont .con_box .txt_box").eq(idx).show();
  });



    // 슬릭 슬라이드 (페이징 있는 스타일) 공통
    // 페이지값변경
    $(".slide_common").on('afterChange' , function(event, slick, currentSlide){
        $(".current-num").text(currentSlide + 1);
    });
    // 페이지값변경END

            $('.slide_common').slick({
                slide: 'div',       //슬라이드 되어야 할 태그 ex) div, li 
                prevArrow: $('.prev'),
    nextArrow: $('.next'),
                infinite : true,    //무한 반복 옵션   
                slidesToShow : 1,       // 한 화면에 보여질 컨텐츠 개수
                slidesToScroll : 1,     //스크롤 한번에 움직일 컨텐츠 개수
                speed : 700,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                arrows : true,      // 옆으로 이동하는 화살표 표시 여부
                dots : true,        // 스크롤바 아래 점으로 페이지네이션 여부
                autoplay : true,            // 자동 스크롤 사용 여부
                autoplaySpeed : 40000,      // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
                pauseOnHover : false,       // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정
                vertical : false,       // 세로 방향 슬라이드 옵션
               // prevArrow : "<button type='button' class='slick-prev slide_button'>Previous</button>",        // 이전 화살표 모양 설정
                //nextArrow : "<button type='button' class='slick-next slide_button'>Next</button>",        // 다음 화살표 모양 설정
                
                dotsClass : "slick-dots",    //아래 나오는 페이지네이션(점) css class 지정
                draggable : true,   //드래그 가능 여부

                
                responsive: [ // 반응형 웹 구현 옵션
                    {  
                        breakpoint: 960, //화면 사이즈 960px
                        settings: {
                            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            slidesToShow:1
                        } 
                    },
                    { 
                        breakpoint: 768, //화면 사이즈 768px
                        settings: { 
                            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            slidesToShow:1
                        } 
                    }
                ]

            });
  
  //section slide
  
            $('.sec_st03_slide').slick({
                slide: 'div',       //슬라이드 되어야 할 태그 ex) div, li 
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
                infinite : true,    //무한 반복 옵션   
                slidesToShow : 1,       // 한 화면에 보여질 컨텐츠 개수
                slidesToScroll : 1,     //스크롤 한번에 움직일 컨텐츠 개수
                speed : 700,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
                arrows : true,      // 옆으로 이동하는 화살표 표시 여부
                dots : true,        // 스크롤바 아래 점으로 페이지네이션 여부
                autoplay : false,            // 자동 스크롤 사용 여부
                autoplaySpeed : 40000,      // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
                pauseOnHover : false,       // 슬라이드 이동  시 마우스 호버하면 슬라이더 멈추게 설정
                vertical : false,       // 세로 방향 슬라이드 옵션
               // prevArrow : "<button type='button' class='slick-prev slide_button'>Previous</button>",        // 이전 화살표 모양 설정
                //nextArrow : "<button type='button' class='slick-next slide_button'>Next</button>",        // 다음 화살표 모양 설정
                
                dotsClass : "slick-dots",    //아래 나오는 페이지네이션(점) css class 지정
                draggable : false,   //드래그 가능 여부

                
                responsive: [ // 반응형 웹 구현 옵션
                    {  
                        breakpoint: 960, //화면 사이즈 960px
                        settings: {
                            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            slidesToShow:1
                        } 
                    },
                    { 
                        breakpoint: 768, //화면 사이즈 768px
                        settings: { 
                            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                            slidesToShow:1
                        } 
                    }
                ]

            });

  
        


 });


    

//상단으로 이동
/*
$(document).ready(function() {
    $('.go_top').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
}); 
*/

