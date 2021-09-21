$(function () {
    'use strict';
    
    $('.projects-links li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all') {
            $('.shuffle-images a').css('display', 'block');
        }else{
             $('.shuffle-images a').css('display', 'none');
             $($(this).data('class')).css('display', 'block');
        }
    
    });
    
    $('.projects-links .dropdown-item').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all') {
            $('.photos .item').css('display', 'block');
        }else{
             $('.photos .item').css('display', 'none');
             $($(this).data('class')).css('display', 'block');
        }
    
    });
    
   $('.info').on('click', function() { 
        $(this).attr('data-class', 'onlyme');
       if($(this).data('class') === 'onlyme') {
            $(this).parent().addClass('col-sm-12 show-full').removeClass('col-lg-3 col-sm-6 col-md-4 ');
            $(this).parent().children('img').css('width', 'auto');
            $(this).parent().siblings().css('display', 'none');
            $(this).parent().children('.info').css('display', 'none');
            $(this).parent().children('.show-hide').css('display', 'block');
            $('.photos .show-full').css('display', 'block');
            $('.photos .close-div').css('z-index', 9999);
            $('.photos .item:hover img').css('transform', 'scale(1.0) rotate(0deg)');
           
       }
   });
     
  $('.close-div').on('click', function() {
          $(this).attr('data-class', 'close');
               if($(this).data('class') === 'close') {
                   $(this).parent().removeClass('col-sm-12 show-full').addClass('col-lg-3 col-sm-6 col-md-4 ');
                    $(this).parent().siblings().css('display', 'flex');
                    $(this).parent().children('img').css('width', '100%');
                    $(this).parent().children('.info').css('display', 'flex');
                    $(this).parent().children('.show-hide').css('display', 'none');
                    $('.photos .show-full').css('display', 'none');
                    $('.photos .close-div').css('z-index', 9996);
       }
 });
   
    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
       console.log($(this).scrollTop());
        if($(this).scrollTop() >= 800){
            scrollButton.show();
        }else{
            scrollButton.hide();
        }
       
    });
     scrollButton.click(function() {
            $("html, body").animate({scrollTop:0}, 600);
        });
    
    $(function () {
    $(window).ready(function() {
        $(".loading-section").fadeOut(500, 
        function() {
            $("body").css("overflow", "auto");
            $(this).remove();
        });
    });
});
});
