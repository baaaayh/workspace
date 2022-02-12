var Main = (function () {
    function init() {
        // parallaxImg();
        aosInit();
    }

    // function parallaxImg() {
    //     var currX = "";
    //     var currY = "";
    //     $(document).on("mousemove", function (event) {
    //         if (currX == "") currX = event.pageX;
    //         var xDiff = event.pageX - currX;
    //         currX = event.pageX;
    //         if (currY == "") currY = event.pageX;
    //         var yDiff = event.pageY - currY;
    //         currY = event.pageY;
    //         // console.log(currX, xDiff);
    //         var $el1 = $(".parallax--img");
    //         var $el2 = $(".parallax--big-orange");
    //         var $el3 = $(".parallax--small-orange");
    //         var el1X = $el1.position().left - xDiff * 0.15;
    //         var el1Y = $el1.position().top - yDiff * 0.15;
    //         var el2X = $el2.position().left - xDiff * 0.05;
    //         var el2Y = $el2.position().top - yDiff * 0.05;
    //         var el3X = $el3.position().left + xDiff * 0.1;
    //         var el3Y = $el3.position().top + yDiff * 0.1;
    //         console.log(el1X);
    //         $el1.css("left", el1X + "px");
    //         $el1.css("top", el1Y + "px");
    //         $el2.css("left", el2X + "px");
    //         $el2.css("top", el2Y + "px");
    //         $el3.css("left", el3X + "px");
    //         $el3.css("top", el3Y + "px");
    //     });
    // }

    function aosInit() {
        AOS.init({
            easing: "ease-out-back",
            duration: 1500,
        });
    }

    return {
        init: init,
    };
})();

$(document).ready(function () {
    Main.init();
    // var path = document.querySelector(".st4");
    // pathLength = path.getTotalLength();
    // console.log(pathLength);
});
$(window).on("load", function () {
    AOS.refresh();
});
