var Slider = (function () {
    function init() {
        slider();
    }

    function slider() {
        const menuSlide = new Swiper(".menu-slider", {
            slidesPerView: "auto",
        });
        $(".swiper-slide").on("click", function () {
            var sIdx = $(this).index();
            menuSlide.slideTo(sIdx, 500, false);
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Slider.init();
});
