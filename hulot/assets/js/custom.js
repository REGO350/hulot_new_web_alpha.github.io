/** 
  * Template Name: OsteriaX
  * Version: 1 
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. TOP SLIDER (SLICK SLIDER) 
  2. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX ) 
  3. DATEPICKER
  4. SHEF SLIDER ( SLICK SLIDER )
  5. TESTIMONIAL SLIDER ( SLICK SLIDER )
  6. GOOGLE MAP
  7. MENU SMOOTH SCROLLING
  8. HOVER DROPDOWN MENU
  9. SCROLL TOP BUTTON
  10. BUTTON SMOOTH SCROLL ( VIEW RESERVATION FORM ) 

  
**/



jQuery(function($){
 
  alert("Version Alpha. This website is still at TEST PHASE.");
  /* ----------------------------------------------------------- */
  /*  1. TOP SLIDER (SLICK SLIDER)
  /* ----------------------------------------------------------- */    

    jQuery('.mu-top-slider').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,     
      autoplay: true,
      fade: true,
      cssEase: 'linear'
    });

  /* ----------------------------------------------------------- */
  /*  2. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
  /* ----------------------------------------------------------- */ 

  $('.mu-imglink').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery:{
      enabled:true
    }
  });

  /* ----------------------------------------------------------- */
  /*  3. DATEPICKER
  /* ----------------------------------------------------------- */      

    jQuery('#datepicker').datepicker();

   
  /* ----------------------------------------------------------- */
  /*  6. GOOGLE MAP
  /* ----------------------------------------------------------- */ 
        
    $('#mu-map').click(function () {
        $('#mu-map iframe').css("pointer-events", "auto");
    });
    
    $("#mu-map").mouseleave(function() {
      $('#mu-map iframe').css("pointer-events", "none"); 
    });
    
  /* ----------------------------------------------------------- */
  /*  7. MENU SMOOTH SCROLLING
  /* ----------------------------------------------------------- */ 
  
    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

      // Cache selectors
      var lastId,
      topMenu = $(".mu-main-nav"),
      topMenuHeight = topMenu.outerHeight()+42, //was 13
      // All list items
      menuItems = topMenu.find('a[href^=\\#]'),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });

      // Bind click handler to menu items
      // so we can get a fancy scroll animation
      menuItems.click(function(e){
        var text = $(e.target).attr("href").slice(1);
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
        jQuery('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 1500);   
        jQuery('.navbar-collapse').removeClass('in');  
        menuItems.parent().end().filter("[href=\\#"+text+"]").parent().addClass("active");
      });

      // Bind to scroll
      jQuery(window).scroll(function(){
         // Get container scroll position
         var fromTop = $(this).scrollTop()+topMenuHeight+300; //was +0
         var bottom=false;
         // Get id of current scroll item
         var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
             return this;
         });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";  

         //check if the user has reached the bottom of the page
         if($(window).scrollTop() + $(window).height() == $(document).height()) {
            menuItems.parent().removeClass("active");
            menuItems.parent().end().filter("[href=\\#"+"mu-map"+"]").parent().addClass("active");
            lastId = "mu-map";
         }else{
          if (lastId !== id) { 
            // Set/remove active class
            menuItems.parent().end().filter("[href=\\#"+lastId+"]").parent().removeClass("active");
            menuItems.parent().end().filter("[href=\\#"+id+"]").parent().addClass("active");
            lastId = id;
          }    
         }  
      })
  
  /* ----------------------------------------------------------- */
  /*  8. HOVER DROPDOWN MENU
  /* ----------------------------------------------------------- */ 
  
  // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    
  /* ----------------------------------------------------------- */
  /*  9. SCROLL TOP BUTTON
  /* ----------------------------------------------------------- */

  //Check to see if the window is top if not then display button

    jQuery(window).scroll(function(){
      if (jQuery(this).scrollTop() > 400) {
        jQuery('.scrollToTop').fadeIn();
      } else {
        jQuery('.scrollToTop').fadeOut();
      }
    });
     
    //Click event to scroll to top

    jQuery('.scrollToTop').click(function(){
      jQuery('html, body').animate({scrollTop : 0},800);
      return false;
    });
  
  /* ----------------------------------------------------------- */
  /*  10. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
  /* ----------------------------------------------------------- */

    $('.mu-reservation-btn').on('click',function (e) {
          e.preventDefault();
          var target = this.hash,
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top
          }, 1000, 'swing', function () {
              window.location.hash = target;
      });
  });
  
});

