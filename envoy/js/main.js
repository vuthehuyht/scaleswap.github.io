let index = 0;
let slideWidth = 0;
let windowWidth = window.innerWidth;

function calSlideWitdth(width) {
    if (width >= 1200) {
        slideWidth = 306;
    }
    if (width < 1200 && width <= 1024) {
        slideWidth = 332;
    }
    if (width < 1024 && width <= 768) {
        slideWidth = 408;
    }
    if (width < 768 && width <= 414) {
        slideWidth = 378;
    }
    if (width < 414 && width <= 375) {
        slideWidth = 335;
    }
    if (width < 375 && width <= 320) {
        slideWidth = 280;
    }
}

calSlideWitdth(windowWidth);
$('.hopper-slide').css('width', slideWidth + 'px')

$(window).resize(function() {;
    calSlideWitdth($(window).width());
    $('.hopper-slide').css('width', slideWidth + 'px')
})

let btnFlag = true;

$('#hamburger').on('click', function() {
    if (btnFlag) {
        $('.mobile-menu').css('right', '0');
        $('#hamburger').addClass('active');
        btnFlag = false;
    } else {
        $('.mobile-menu').css('right', '-100%');
        $('#hamburger').removeClass('active');
        btnFlag = true;
    }
})

function isEventSupported(eventName) {
    var el = document.createElement('div');
    eventName = 'on' + eventName;
    var isSupported = (eventName in el);
    if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
}

function slideUp() {
    index++;
    if (index <= 4) {
        let translate = -slideWidth * index;
        $('.hopper-track').css('transform', `translate(${translate}px, 0px)`)
        $('.round-button-right').css('background-color', '#000');
        $('.round-button-left').css('background-color', '#000');
        if (index === 4) {
            $('.round-button-right').css('background-color', '#e6e6e6');
        }
    }
    if (index > 4) index = 4;
}

function slideDown() {
    index--;
    if (index >= 0) {
        let translate = -slideWidth * index;
        $('.hopper-track').css('transform', `translate(${translate}px, 0px)`)
        $('.round-button-left').css('background-color', '#000');
        $('.round-button-right').css('background-color', '#000');
        if (index === 0) {
            $('.round-button-left').css('background-color', '#e6e6e6');
        }
    }
    if (index < 0) index = 0;
}

$(document).ready(function() {
    let wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';

    $('.hopper-list').on(wheelEvent, function(e) {
        var oEvent = e.originalEvent,
            delta = oEvent.deltaY || oEvent.wheelDelta;
        if (delta > 0) {
            slideUp();
        }

        if (delta < 0) {
            slideDown();
        }
    })

    $('.round-button-left').on('click', function() {
        slideDown();
    })

    $('.round-button-right').on('click', function() {
        slideUp();
    })

    if (windowWidth < 1200) {
        var swiper = new Swiper(".hopper-list", {
            pagination: {
                el: '.swiper-pagination'
            },
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0
        });
    }
})

let upgradeTime = document.getElementById("countdown-time").getAttribute('data-date');
var end = new Date(upgradeTime);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;

    if (distance < 0) {
        clearInterval(timer);
        return;
    }

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    function pad(n) {
        return (n < 10 ? "0" + n : n);
    }

    document.getElementById("days").innerText = pad(days) + 'd'
    document.getElementById("hours").innerText = pad(hours) + 'h'
    document.getElementById("minutes").innerText = pad(minutes) + 'm'
    document.getElementById("seconds").innerText = pad(seconds) + 's'
}

timer = setInterval(showRemaining, 1000);