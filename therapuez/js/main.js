var Main = (function () {
    function init() {
        initSlider();
        pagingNum();
        sliderVideo();
        bestSlider();
        productSlider();
        promoteSlider();
        techSlider();
        waveBar();
        scrollAni();
        headerBg();
    }

    $(window).scroll(function () {
        headerBg();
    });

    function headerBg() {
        var sct = $(window).scrollTop();
        if (sct === 0) {
            $(".header").addClass("transparent");
        } else {
            $(".header").removeClass("transparent");
        }
    }

    function initSlider() {
        $(".kv_slider").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 6000,
            speed: 800,
            fade: true,
        });
        $(".best_slider").slick({
            dots: true,
            arrows: true,
            speed: 1200,
        });
        $(".product_slider").slick({
            slidesToShow: 2,
            arrows: true,
            dots: false,
            appendArrows: $(".product_slider_arrow"),
            speed: 1000,
        });
        var lastSlide = $(".promote_slider.slider01 li").length - 1;
        $(".promote_slider.slider01").slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            speed: 1000,
            draggable: false,
            swipe: false,
            touchMove: false,
            initialSlide: lastSlide,
        });
        $(".promote_slider.slider02").slick({
            slidesToShow: 1,
            arrows: true,
            dots: true,
            draggable: false,
            swipe: false,
            touchMove: false,
            speed: 1000,
        });
        $(".promote_slider.slider03").slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            speed: 1000,
            draggable: false,
            swipe: false,
            touchMove: false,
            initialSlide: 1,
        });
        $(".tech_slider.tech01 ul").slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            draggable: false,
            speed: 1000,
            initialSlide: 0,
        });
        var techLast = $(".tech_slider.tech02 ul li").length - 1;
        $(".tech_slider.tech02 ul").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            draggable: false,
            appendArrows: $(".tech_slider_arrow"),
            speed: 1000,
            initialSlide: techLast,
        });
        $(".vertical_notice").slick({
            slidesToShow: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 1000,
            vertical: true,
            speed: 1000,
        });
    }

    function pagingNum() {
        var $dots = $(".main_sec01 .slick-dots > li");
        var num = $dots.length;
        for (var i = 0; i <= num - 1; i++) {
            $dots
                .eq(i)
                .children("button")
                .html("<span>" + 0 + (i + 1) + "</span>");
        }
    }

    function sliderVideo() {
        var video = new Vimeo.Player($("#sliderVideo"));
        $(".kv_slider").on(
            "beforeChange",
            function (event, slick, currentSlide, nextSlide) {
                if (nextSlide === 0) {
                    video.play();
                } else {
                    video.unload();
                }
            }
        );

        if (video) {
            video.on("loaded", function () {
                // console.log("슬릭 자동재생 중지(플레이어 로드시)");
                $(".kv_slider").slick("slickPause");
            });
            video.on("play", function () {
                // console.log("슬릭 자동재생 중지(플레이시)");
                $(".kv_slider").slick("slickPause");
            });
            video.on("ended", function () {
                setTimeout(function () {
                    // console.log("영상 끝");
                    $(".kv_slider").slick("slickNext");
                    $(".kv_slider").slick("slickPlay");
                }, 100);
            });
        }
    }

    var bestText = [
        {
            id: 0,
            top: "R3",
            bottom: "Serum",
        },
        {
            id: 1,
            top: "R3",
            bottom: "Cream",
        },
        {
            id: 2,
            top: "R3",
            bottom: "Starter",
        },
        {
            id: 3,
            top: "Ultimate",
            bottom: "Cream",
        },
    ];

    function waveBar() {
        var line = Math.ceil($(window).innerWidth() / 14);
        var lineIsChanged = false;
        // console.log(line);
        for (var i = 1; i <= line; i++) {
            var lineHeight =
                i / line < 0.3
                    ? Number(Math.random().toFixed(3) * 20) + 15
                    : Number(Math.random().toFixed(3) * 20) + 40;
            var lineMoveValue = Number(((i / line) * 40).toFixed(1));
            // console.log(moveValue);
            $(".bg_wave").append(
                "<div class='wave_bar' data-ratio='" +
                    lineHeight +
                    "' data-line-move='" +
                    lineMoveValue +
                    "'></div>"
            );

            $(window).scroll(function () {
                if (
                    $(".main_sec03").hasClass("ani") &&
                    lineIsChanged === false
                ) {
                    $(".wave_bar").each(function () {
                        var ra = $(this).attr("data-ratio"),
                            lineMove = $(this).attr("data-line-move");
                        $(this).attr(
                            "style",
                            "transform:scaleY(" +
                                ra / 100 +
                                ") translateY(" +
                                -(lineMove * 6) +
                                "px)"
                        );
                    });
                } else if ($(".main_sec03").hasClass("ani") === false) {
                    $(".wave_bar").attr(
                        "style",
                        "transform:scaleY(1) translateY(0)"
                    );
                    lineIsChanged = false;
                }
            });
        }
    }

    function bestSlider() {
        // 썸네일 클릭 시 슬라이드 이동, active 클래스 추가, text변경
        $(".best_slider").on(
            "beforeChange",
            function (e, slick, currentSlide, nextSlide) {
                var slideCount = slick.$slides.length - 1;
                if (nextSlide === 0 || nextSlide === slideCount) {
                    $(".best_slider .slick-cloned").addClass(
                        "slick-cloned-active"
                    );
                }
                $(".thumb_list li").removeClass("active");
                $(".best_top_text, .best_bottom_text").removeClass("active");
            }
        );
        $(".best_slider").on(
            "afterChange",
            function (event, slick, currentSlide, nextSlide) {
                $(".best_slider .slick-cloned").removeClass(
                    "slick-cloned-active"
                );
                $(".thumb_list li").eq(currentSlide).addClass("active");
                // 텍스트 변경
                var top = bestText[currentSlide].top;
                var bottom = bestText[currentSlide].bottom;
                $(".best_top_text").text(top);
                $(".best_bottom_text").text(bottom);
                $(".best_top_text, .best_bottom_text").addClass("active");
            }
        );
        var $t = $(".thumb_list li a");
        $t.on("click", function () {
            var idx = $(this).parent().index();
            $t.parent().removeClass("active");
            $(".best_slider").slick("slickGoTo", idx);
            $t.parent().eq(idx).addClass("active");
        });
    }

    function productSlider() {
        var sLength = $(".product_slider .slick-slide").not(
            ".slick-cloned"
        ).length;
        for (var i = 0; i <= sLength - 1; i++) {
            $(".product_slider .slick-slide")
                .not(".slick-cloned")
                .eq(i)
                .css("transitionDelay", 0.7 + i / 10 + "s");
        }
        $(".product_slider .slick-slide.slick-cloned").css(
            "transitionDelay",
            0
        );
    }

    function promoteSlider() {
        $(".promote_slider.slider02").on(
            "beforeChange",
            function (e, slick, currentSlide, nextSlide) {
                var slideCount = slick.$slides.length - 1;
                if (nextSlide === 0 || nextSlide === slideCount) {
                    $(".promote_slider .slick-cloned").addClass(
                        "slick-cloned-active"
                    );
                }
            }
        );
        $(".promote_slider.slider02").on(
            "afterChange",
            function (event, slick, currentSlide, nextSlide) {
                $(".promote_slider .slick-cloned").removeClass(
                    "slick-cloned-active"
                );
            }
        );
        $(".promote_slider.slider02 .slick-prev").click(function () {
            $(".promote_slider.slider01, .promote_slider.slider03").slick(
                "slickPrev"
            );
        });
        $(".promote_slider.slider02 .slick-next").click(function () {
            $(".promote_slider.slider01, .promote_slider.slider03").slick(
                "slickNext"
            );
        });
    }

    function techSlider() {
        $(".tech_slider.tech01 ul").on(
            "beforeChange",
            function (e, slick, currentSlide, nextSlide) {
                var text1 = $(".tech_slider.tech01 ul li")
                    .eq(nextSlide)
                    .attr("data-text");
                $(".tech_slider.tech01 .text_content span").text(text1);
            }
        );
        $(".tech_slider.tech02 ul").on(
            "beforeChange",
            function (e, slick, currentSlide, nextSlide) {
                var slideCount = slick.$slides.length - 1;
                if (nextSlide === 0 || nextSlide === slideCount) {
                    $(
                        ".tech_slider.tech02 .slick-cloned, .tech_slider.tech01 .slick-cloned"
                    ).addClass("slick-cloned-active");
                }

                var text2 = $(".tech_slider.tech02 ul li")
                    .eq(nextSlide)
                    .attr("data-text");
                $(".tech_slider.tech02 .text_content span").text(text2);
                $(".text_content span").removeClass("active");
                $(".tech_slider").removeClass("text_active");
            }
        );
        $(".tech_slider.tech02 ul").on(
            "afterChange",
            function (event, slick, currentSlide, nextSlide) {
                $(
                    ".tech_slider.tech02 .slick-cloned, .tech_slider.tech01 .slick-cloned"
                ).removeClass("slick-cloned-active");
                $(".text_content span").addClass("active");
                $(".tech_slider").addClass("text_active");
            }
        );
        $(".tech_slider_arrow .slick-prev").on("click", function () {
            $(".tech_slider.tech01 ul").slick("slickPrev");
        });
        $(".tech_slider_arrow .slick-next").on("click", function () {
            $(".tech_slider.tech01 ul").slick("slickNext");
        });
    }

    function scrollAni() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: ".best_slider .img_box",
            start: "25% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".main_sec02", className: "ani" },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".product_slider",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".main_sec03", className: "ani" },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".main_sec04 .sec_tit",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".main_sec04 .sec_tit", className: "ani" },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".main_sec04 .main_title p",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".main_sec04 .main_title p",
                className: "ani",
            },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".promote_wrap",
            start: "10% bottom",
            endTrigger: "html",
            toggleClass: {
                targets: ".promote_wrap",
                className: "ani",
            },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".tech_slider",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".main_sec05", className: "ani" },
            markers: true,
        });
        ScrollTrigger.create({
            trigger: ".main_sec06",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".main_sec06", className: "ani" },
            markers: true,
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Main.init();
});
