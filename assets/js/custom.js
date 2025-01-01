$(document).ready(function () {
    $(".jarallax").jarallax({
        speed: 0.6,
    });

    // Main menu;
    $(".mobile-menu").on("click", function () {
        $(".header").addClass("active");
        $(".page-overlay").addClass("active");
    });

    $(
        ".page-overlay, .mobile-menu-close, .header .header-content .main-menu ul li a"
    ).on("click", function () {
        $(".header").removeClass("active");
        $(".page-overlay").removeClass("active");
    });

    $(".click-to-up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0,
        });
    });

    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {
            $(".click-to-up").addClass("active");
        } else {
            $(".click-to-up").removeClass("active");
        }
    });

    $(".click-to-down").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(id).offset().top,
        });
    });

    // function sendingForm(data, url, method) {
    //     $.ajax({
    //         url: url,
    //         type: method,
    //         data: data ,
    //         success: function (response) {
    //             console.log(response);
    //         },
    //         error: function(jqXHR, textStatus, errorThrown) {
    //             console.log(textStatus, errorThrown);
    //         }
    //     });
    // }
});