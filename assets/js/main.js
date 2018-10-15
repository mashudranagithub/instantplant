$(document).ready(function(e){





$('.main_slider').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    dots: true,
    navigation: true,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.benefits_plants_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:2
        },
        450:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.featured_plants_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


$('.weekly_deal_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})



// mobile menu icon
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });





// Adding class to body to expand offcanvas from its default state
$('.offcanvas-toggle').on('click', function() {
  $('body').toggleClass('offcanvas-expanded');
});



// Mobile Dropdown Menu 
$('.dropdown_menu').hide();
$('.fa-angle-down').hide();
$('.fa-angle-right').show();

$('.instant_shop_menu li').click(function(){
    $(this).find('.dropdown_menu').slideToggle();
    $(this).find('.fa-angle-right').toggle();
    $(this).find('.fa-angle-down').toggle();
});






});



