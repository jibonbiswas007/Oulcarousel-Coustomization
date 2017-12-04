(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.listing-carousel').owlCarousel({
            loop:true,
            margin:30,
            smartSpeed:500,
            autoplay:true,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));