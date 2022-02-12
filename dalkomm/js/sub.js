var Sub = (function () {
    function init() {
        printBizCard();
        fixTitle();
        menuPop();
        bizDrop();
    }

    function printBizCard() {
        $(".area-list ul li a").on("click", function () {
            var name = $(this).attr("data-manage-name");
            var position = $(this).attr("data-manage-position");
            var phone = $(this).attr("data-manage-phone");
            var email = $(this).attr("data-manage-email");
            $(this).parent("li").siblings("li").children("a").removeClass("on");
            $(this).addClass("on");
            $(".biz-card span strong").text(name);
            $(".biz-card span b").text(position);
            $(".biz-card .manage-phone").text(phone);
            $(".biz-card .manage-email").text(email);
        });
    }

    function fixTitle(sct) {
        var winW = $(window).innerWidth();
        if (winW > 960) {
            if ($(".board-view").length) {
                var vTop = $(".board-view").offset().top;
                var vBot = vTop + $(".board-view").outerHeight();
                var tBot = sct + $(".board-title").outerHeight();
                if (sct >= vTop && tBot < vBot) {
                    $(".board-title").addClass("fixed");
                } else if (sct < vTop) {
                    $(".board-title").removeClass("fixed");
                }

                if (tBot > vBot) {
                    $(".board-title").addClass("fixed-bottom");
                } else if (tBot < vBot) {
                    $(".board-title").removeClass("fixed-bottom");
                }
            }
        } else {
            $(".board-title").removeClass("fixed fixed-bottom ");
        }
    }

    function menuPop() {
        $(".menu-list li a").on("click", function () {
            var winW = $(window).innerWidth();
            if (winW <= 960) {
                var cont = $(this).find(".menu-info-box").html();
                console.log(cont);
                $(".popup").addClass("on");
                $(".popup").find(".menu-info-box").html(cont);
            }
        });
        $(".btn-pop-close").on("click", function () {
            $(".popup").removeClass("on");
        });
    }

    function bizDrop() {
        $('input[type="search"], input[type="search"] + i').on(
            "click",
            function () {
                $(this).parents(".area-list").find("ul").toggleClass("open");
            }
        );
        $(".manage-wrapper ul li a").on("click", function () {
            var data = $(this).text();
            $(this)
                .parents(".area-list")
                .find('input[type="search"]')
                .val(data);
            $(this).parents(".area-list").find("ul").removeClass("open");
        });
    }

    $(window).on("scroll", function () {
        var sct = $(window).scrollTop();
        fixTitle(sct);
    });

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Sub.init();
    AOS.init({
        easing: "ease-out-back",
        duration: 1500,
    });
});
