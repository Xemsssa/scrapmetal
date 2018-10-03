$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        lazyLoad:true,
        items:1,
        // autoplay: true,
        smartSpeed: 1500,
        // loop: true,
        // margin: 10,
        dots: false,
        responsiveClass: true,
        // singleItem:true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                // loop: false
            }
        }
    })
});