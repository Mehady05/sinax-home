$(function () {
    // $().();


    // sticky menu
    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });




    // btn click 

    $('.nav_button').click(function () {
        $('.navbar-nav').toggle();
    });


    // banner area 
    $('.banner_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.rigt_btn',
        prevArrow: '.left_btn',
    });


    // mix_it_up amazing work part
    var mixer = mixitup('.all_mix_images');




    // counter js part 
    $('.count_num').counterUp({
        delay: 10,
        time: 5000
    });



    // brand slick slide active 

    $('.slick_banner').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // veno box 
    $('.venobox').venobox();










});