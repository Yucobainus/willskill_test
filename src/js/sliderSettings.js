$("#offerSlider").slick({
    mobileFirst: true,
    responsive: [

        {
            breakpoint: 992,
            settings: "unslick"
        },

        {
            breakpoint: 400,
            settings: {
                centerMode: true,
                arrows: false,
                dots: false,
                infinite: false,
                variableWidth: true,
                initialSlide: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ,
        {
            breakpoint: 0,
            settings: {
                arrows: false,
                dots: false,
                infinite: false,
                variableWidth: true,
                initialSlide: 0,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})