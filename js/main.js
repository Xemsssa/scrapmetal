$(document).ready(function () {
// owl carousel
    $('.owl-carousel').owlCarousel({
        lazyLoad:true,
        items:1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        // margin: 10,
        dots: false,
        nav: false,
        responsiveClass: true,
        // singleItem:true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            700: {
                items: 4,
                nav: true
            },
            1000: {
                items: 4,
                // nav: false,
                // nav: false,
                // dots: false,
                // loop: false
            }
         
        }
    })

});