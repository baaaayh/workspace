var Common = (function () {
    function init() {
        initHeader();
        headerHide();
        noDepth();
        mobMenuToggle();
        fMenu();
        mobDepth();
    }

    function initHeader() {
        headerHide("down");
    }

    var lastScroll = 0;
    $(window).on("scroll", function (e) {
        var st = $(this).scrollTop();
        if (st < 0) {
            headerHider("down");
        }

        if (st > lastScroll + 1) {
            if ($("body").hasClass("no-scroll")) {
                headerHide("down");
            }
            if (!$("body").hasClass("no-scroll")) {
                headerHide("up");
            }
        } else if (st < lastScroll - 1) {
            if ($("body").hasClass("no-scroll")) {
                headerHide("down");
            }
            if (!$("body").hasClass("no-scroll")) {
                headerHide("down");
            }
        }
        lastScroll = st;
    });

    function headerHide(status) {
        if (status === "up") {
            $(".header").removeClass("scroll-up").addClass("scroll-down");
        } else if (status === "down") {
            $(".header").removeClass("scroll-down").addClass("scroll-up");
        }
    }

    function noDepth() {
        var $gnb = $("#gnb > li");
        $gnb.on("mouseenter", function () {
            if ($(this).hasClass("no-depth")) $("nav").addClass("no-bg");
            else $("nav").removeClass("no-bg");
        });
    }

    function mobMenuToggle() {
        $(".ham").on("click", function () {
            $("body").toggleClass("no-scroll");
            $(this).toggleClass("is-x");
            $("nav").toggleClass("is-open");
        });
    }

    function mobDepth() {
        var $dep = $("#gnb > li > a");
        $dep.on("click", function (e) {
            var winWidth = $(window).innerWidth();
            var lastMenu = $("#gnb > li:last-child");
            if (winWidth <= 960) {
                if ($(this).parents("li").hasClass("no-depth")) {
                    return;
                    $(this).addClass("no-click");
                } else {
                    if (!$(this).hasClass("no-click")) {
                        e.preventDefault();
                        // $dep.removeClass("on");
                        $(this)
                            .parent("li")
                            .siblings("li")
                            .children("a")
                            .removeClass("no-click");
                        $(this).addClass("no-click");
                    }
                    if ($(this).hasClass("no-click")) {
                        return;
                    }
                }
            }
        });
    }

    function fMenu() {
        var $fm = $(".footer-menu > li > strong");
        $fm.on("click", function () {
            $(this)
                .parent("li")
                .siblings("li")
                .children(".footer-menu__list")
                .removeClass("open");
            $(this).siblings(".footer-menu__list").toggleClass("open");
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Common.init();
});
