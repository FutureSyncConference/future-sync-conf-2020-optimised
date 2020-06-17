var menuVisible = false;

$(document).ready(function () {

    $("#menuButton").click(function () {
        if(!menuVisible) {
            $("#menuButton").animate({"opacity": "0"}, 200 );
            $(".menu").animate({"margin-right": "0"}, 500 );
            menuVisible = true; 
        }
    });

    $(".cross").click(function () {
        if(menuVisible) {
            $("#menuButton").animate({"opacity": "1"}, 200 );
            if ($(window).width() > 540) {
                $(".menu").animate({"margin-right": "-400px"}, 500 );
            } else {
                $(".menu").animate({"margin-right": "-100vw"}, 500 );
            }
            menuVisible = false;
        }
    });

});
