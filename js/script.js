$(function () {
   // Slick Slider js Start
   $('.banner_slider').slick({
      prevArrow:'<i class="banner_slider_icon fa-solid fa-chevron-left"></i>',
      nextArrow:'<i class="banner_slider_icon fa-solid fa-chevron-right"></i>',
      autoplay:true,
      autoplaySpeed:3000,
      speed:1000,
      dots:true,
      dotsClass:'banner_slider_dots',
   });
   // Slick Slider jd End
   //Back to top button Start
   $(window).on('scroll',function(){
        var scrollSize= $(this).scrollTop();
         
        if(scrollSize > 500){
           $('#backTotop_btn').fadeIn(500)
        }else{
         $('#backTotop_btn').fadeOut(500)
        }
      }); // Will Show Back to top button 500 px

   $('#backTotop_btn').click(function(){
      $('html, body').animate({
         scrollTop:0,
      },500);
   }); // Go back To Top
   //Back to top button End
   //Preloader Section Start
   $(window).on('load',function(){
      $('.preloader').fadeOut(3000)
   });
   // Preloader Section End
   // Smooth Scroll Start
   $('a').on('click',function(e){
      e.preventDefault();//For stop Default behavior
      var hash =this.hash;
      if(this.hash){
         $('html , body').animate({
            scrollTop: $(hash).offset().top
         },800);// click and scroll smooth
      }
   }); 
   //Smooth Scroll End
   //Sticky menu js Start
   $(window).on('scroll',function(){

      var scrollTop = $(window).scrollTop();
      var height = $('#header').height();

      if(scrollTop > height){
         $('#header').addClass('menu_scroll_animate')
      }else{
         $('#header').removeClass('menu_scroll_animate')
      }
   });
   //Sticky menu js End
   // Filterizr js Start
   $('.gallery_filter').filterizr();

   $('.gallery_menu li').on('click',function(){
      $(this).addClass('active')
      $(this).siblings('.active').removeClass('active')
   })
   // Filterizr js End
   // countdown js Start
   $('.count_down').countdown('2022/08/09', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="count_down_item"><span>%D</span><span>days</span></div>  '
        + '<div class="count_down_item"><span>%H</span><span>hr</span></div>  '
        + '<div class="count_down_item"><span>%M</span><span>min</span></div>  '
        + '<div class="count_down_item"><span>%S</span><span>sec</span></div>  '
        
        ));
    });
   // countdown js End

});
// venoBox js start
new VenoBox({
   
});
// venoBox js End
// aos js start
AOS.init();
// aos js End