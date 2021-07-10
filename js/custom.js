
$(function(){
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
      });
    $('.venobox').venobox(); 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    var mixer = mixitup('.routine-main1');
    var mixer = mixitup('.routine-margin');
    var mixer = mixitup('.mixer');
});

              