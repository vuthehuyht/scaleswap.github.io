$(document).ready(function() {
    handleDisplayMenu();

    window.onresize = function() {
        handleDisplayMenu();
    }

    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st >= 60) {
            // downscroll code
            $('.sc-FRrlG').removeClass('kycuiI');
            $('.sc-FRrlG').addClass('dLdVOb');
        }
        if (st < 60) {
            // upscroll code
            $('.sc-FRrlG').addClass('kycuiI');
            $('.sc-FRrlG').removeClass('dLdVOb');
        }

        if (st > 500) {
            $('.kaICrG').css('display', '');
        } else {
            $('.kaICrG').css('display', 'none');
        }
    });

    $('.kaICrG').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

    $('.sc-eCApnc').click(function() {
        $('.sc-eirqVv').removeClass('jTpSMJ');
        $('.sc-eirqVv').addClass('gSmTiO');
    });

    $('#close-menu').click(function() {
        $('.sc-eirqVv').addClass('jTpSMJ');
        $('.sc-eirqVv').removeClass('gSmTiO');
    });
})

function handleDisplayMenu() {
    let width = window.innerWidth;

    if (width < 1024) {
        $('.gnBPmJ').css('display', 'none');
        $('.cMTihz2').css('display', 'flex');
    } else {
        $('.gnBPmJ').css('display', 'flex');
        $('.cMTihz2').css('display', 'none');
    }
}