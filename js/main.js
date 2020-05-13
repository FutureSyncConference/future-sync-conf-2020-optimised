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

    var module = document.getElementsByClassName("clamp-this-module");
    //$clamp(module, {clamp: 5});

    var len = module.length;
    for(var i = 0; i < len; i++){
        $clamp(module[i], {clamp: 5});
    }

    $('#badgeImage').on('load', function() {
        resizeBadge();
    });

    $(window).resize(function() {
        resizeBadge();
    });

    $('#badgeGenerateButton').click(function()
    {
        grecaptcha.execute('kasuydfglsdygfkausdygfk', {action: 'generate_badge'}).then(function(token) {
            $.post('/generate-badge.php', {
                name: $('#name').val(),
                company: $('#companyName').val(),
                token: token
            }, function(imagePath) {
                if (imagePath) {
                    window.open(imagePath);
                }
                else {
                    console.log('error generating badge');
                }
            });
        });
    });
});

function resizeBadge()
{
    let windowWidth = $(window).width();

    let badgeMaxWidth = 500;
    let badgeScale = Math.min(windowWidth / badgeMaxWidth, 1);

    $('#badgeWrapper').css({
        '-webkit-transform': 'scale(' + badgeScale + ')',
        '-moz-transform': 'scale(' + badgeScale + ')',
        '-ms-transform': 'scale(' + badgeScale + ')',
        '-o-transform': 'scale(' + badgeScale + ')',
        'transform': 'scale(' + badgeScale + ')'
    });
    
    $('#badgeWrapper').parent().height(Math.floor($('#badgeWrapper').height()) - 1);
}
