//서치창
$(function(){
    //popup을 숨긴다.
    $('.search-input-box').hide();
    //popup_open a를 클릭하면 popup_window이 열린다.
    $('.searchbar').click(function(){
        //popup이 열린다
        $('.search-input-box').fadeIn(200);
    });
    //close button를 누르면
    $('.header_menulist').click(function(){
       $(this).addClass()
        //popup_window가 사라진다
        $('.search-input-box').fadeOut(300);
    });
});


//서브메뉴_아코디언
$(function(){
    //submenu
    $('.submenu-list').hide();
    $('.gnb li').mouseenter(function(){
        $(this).children('.submenu-list').stop().slideDown();
    });
    $('.gnb li').mouseleave(function(){ 
        $(this).children('.submenu-list').stop().slideUp();
    });
});

//모바일_메뉴
$(document).ready(function(){		
    $("#menu").mmenu({
       "slidingSubmenus": false,
       "navbar": { "title":"FRUANI" },
       "extensions": [
          "pagedim-black",
          "position-left",
          "theme-dark"
       ]
    });
});


