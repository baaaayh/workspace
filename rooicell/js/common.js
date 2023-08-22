$(function () {
    $(window).on("resize", function () {
        const w = $(this).innerWidth();
        if (w > 1280) {
            $("html").addClass("pc").removeClass("tablet mobile");
        } else if (w <= 1280 && w > 768) {
            $("html").addClass("tablet").removeClass("pc mobile");
        } else if (w <= 768) {
            $("html").addClass("mobile").removeClass("pc tablet");
        } else {
            return;
        }
    });
    $(window).resize();

    //header
    $(".dep01_menu").on("mouseenter", function () {
        $(".dep01_menu").removeClass("on");
        $(this).addClass("on");
        $(".header").addClass("atv");
        $(".dep02_container").removeClass("atv");
        $(".dep02_bg").css("display", "none");
        $(this)
            .siblings(".dep02_container")
            .addClass("atv")
            .children(".dep02_bg")
            .slideDown(150);
    });
    $(".dep01_menu").on("mouseleave", function () {
        $(".dep01_menu").removeClass("on");
    });
    $("#gnb").on("mouseleave", function () {
        $(".header, .dep02_container").removeClass("atv");
        $(".dep02_bg").css("display", "none");
    });

    // custom cursor
    $(window).on("mousemove", function (e) {
        $(".pointer_container").css("top", e.pageY);
        $(".pointer_container").css("left", e.pageX);
    });

    $(".dep01_menu, .all_menu .menu_list .list .item").on(
        "mouseenter",
        function () {
            $(".pointer").css("width", 0).css("height", 0);
        }
    );
    $(
        ".dep01_menu, .all_menu .menu_list .list .item, .btn_hbg, .all_menu .title .logo"
    ).on("mouseleave", function () {
        $(".pointer").css("width", "15px").css("height", "15px");
    });

    $(".btn_hbg, .all_menu .title .logo").on("mouseenter", function () {
        $(".pointer").css("width", "50px").css("height", "50px");
        $(".pointer").css("margin", "-15px 0 0 -15px");
    });

    // language
    $(".lang > .btn").on("click", function () {
        $(this).siblings(".list_container").slideToggle();
    });
    $(".lang").on("mouseleave", function () {
        $(".lang .list_container").slideUp();
    });

    // all_menu
    $(".btn_hbg").on("click", function () {
        $(".all_menu").fadeIn(450).addClass("atv");
    });
    $(".all_menu").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
    });
    $(".btn_close").on("click", function () {
        $(".all_menu").css("display", "none").removeClass("atv");
    });
});
