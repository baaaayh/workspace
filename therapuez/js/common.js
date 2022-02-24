var Common = (function () {
    function init() {
        cursorChange();
        toggleMenu();
        footerAni();
        topBtn();
    }

    function cursorChange() {
        var mouseCursor = $(".cursor");
        var cursorArea = $(".cc_area");

        $(window).on("scroll", cursor);
        $(window).on("mousemove", cursor);

        function cursor(e) {
            // console.log(e.clientX);
            mouseCursor.css("left", e.clientX + "px");
            mouseCursor.css("top", e.clientY + "px");
        }

        cursorArea.on("mouseover", function () {
            $("body").addClass("hide_cursor");
            mouseCursor.addClass("active");
        });
        cursorArea.on("mouseleave", function () {
            $("body").removeClass("hide_cursor");
            mouseCursor.removeClass("active");
        });
    }

    $(window).load(function () {
        $("body").addClass("flag-ani");
    });

    function toggleMenu() {
        $("#gnb > li > a").on("mouseenter", function () {
            $(this)
                .parents("li")
                .siblings("li")
                .children(".depth2_wrap")
                .slideUp(300);
            $(this).siblings(".depth2_wrap").slideDown(300);
        });
        $("header").on("mouseleave", function () {
            $(".depth2_wrap").slideUp(300);
        });
    }

    function footerAni() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: ".footer",
            start: "20% bottom",
            endTrigger: "html",
            toggleClass: { targets: ".footer", className: "ani" },
            markers: true,
        });
    }

    function topBtn() {
        $(".top_btn").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, 700);
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Common.init();
});
