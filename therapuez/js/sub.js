var Sub = (function () {
    function init() {
        initSlider();
        subAni();
    }

    function initSlider() {
        $(".cosmetic_slider")
            .slick({
                speed: 2000,
                arrows: false,
                dots: false,
                infinite: false,
                vertical: true,
            })
            .on(
                "beforeChange",
                function (event, slick, currentSlide, nextSlide) {
                    setTimeout(function () {
                        slick.$slides.find(".left_box").removeClass("ani");
                        slick.$slides
                            .eq(nextSlide)
                            .find(".left_box")
                            .addClass("ani");
                    }, 1000);
                }
            );
    }

    function subAni() {
        var controller = new ScrollMagic.Controller();
        var brandScene01 = new TimelineMax();
        brandScene01
            .to(".cosmetic_slider", 2, { y: "0%", ease: Linear.easeNone })
            .to(".cosmetic_slider", 0, {
                y: "0%",
                ease: Linear.easeNone,
                onReverseComplete: function () {
                    $(".cosmetic_slider").slick("slickGoTo", 0);
                },
                onComplete: function () {
                    $(".cosmetic_slider").slick("slickGoTo", 1);
                },
            })
            .to(".cosmetic_slider", 2, { y: "0%", ease: Linear.easeNone });

        new ScrollMagic.Scene({
            triggerElement: ".brand_scene01",
            triggerHook: "onLeave",
            duration: "200%",
        })
            .setPin(".brand_scene01")
            .setTween(brandScene01)
            .on("start", function () {
                $(".brand_scene01").addClass("ani");
                $(".cosmetic_slider .slick-active")
                    .find(".left_box")
                    .addClass("ani");
            })
            .addTo(controller);

        var controller = new ScrollMagic.Controller();
        var brandScene02 = new TimelineMax();
        brandScene02
            .to(".repair_wrap", 2, { opacity: 0.3, ease: Linear.easeNone })
            .from(".repair_tile_wrap", 2, { y: "150%", ease: Linear.easeNone })
            .to(".repair_tile_wrap", 2, { y: "-150%", ease: Linear.easeNone });
        new ScrollMagic.Scene({
            triggerElement: ".brand_scene02",
            triggerHook: "onLeave",
            duration: "200%",
        })
            .setPin(".brand_scene02")
            .setTween(brandScene02)
            .on("start", function () {
                $(".brand_scene02").addClass("ani");
            })
            .addTo(controller);

        ScrollTrigger.create({
            trigger: ".brand_story02",
            start: "30% bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".brand_story02 ",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".brand_story02",
            start: "50% center",
            endTrigger: "html",
            toggleClass: {
                targets: ".brand_story02 .img_ani_box",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".brand_story03",
            start: "40% bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".brand_story03",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".live_title .tech_xl_title",
            start: "top bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".live_title .tech_xl_title",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".live_title .tech_mid_title",
            start: "top bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".live_title .tech_mid_title",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".live_title .tech_small_title",
            start: "top bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".live_title .tech_small_title",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".live_title .img_ani_box",
            start: "top center",
            endTrigger: "html",
            toggleClass: {
                targets: ".live_title .img_ani_box",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt01",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt01",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt02_tit .tech_big_title",
            start: "top bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt02_tit .tech_big_title",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt02_tit .tech_small_title",
            start: "top bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt02_tit .tech_small_title",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt01_tit",
            start: "bottom bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt01_tit",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt01 .img_ani_box",
            start: "center bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt01 .img_ani_box",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tsdt02",
            start: "center bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tsdt02",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".cert_wrap",
            start: "top center",
            endTrigger: "html",
            toggleClass: {
                targets: ".img_ani_box",
                className: "ani",
            },
            markers: false,
        });
        ScrollTrigger.create({
            trigger: ".tech_tab",
            start: "center bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".tech_tab",
                className: "ani",
            },
            markers: false,
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Sub.init();
});
