$(function () {
    var resize = function () {
        var w_h = $(window).height();
        if ($('body').height() < w_h) {
            $('body').height(w_h);
            $('.footer').css({'position': 'absolute', 'bottom': '0'});
        } else {
            $('body').css('height', 'auto');
            $('.footer').css({'position': 'initial', 'bottom': 'initial'});
        }
        var htmlObject;
        if (!htmlObject) {
            var html = document.getElementsByTagName('html');
            if (html && html.length) {
                htmlObject = html[0];
            }
        }
        var fz, p_w = document.body.clientWidth;
        if (p_w < 300) {
            fz = p_w / 18.75;
        } else if (p_w >= 300 && p_w <= 750) {
            fz = p_w / 18.75;
        } else {
            fz = 40;
        }
        htmlObject.style.fontSize = fz + 'px';
        window.fontSize = fz;
    };
    resize();
    $(window).on('resize', function () {
        resize();
    });
    if ($('.tag-cloud').length > 0) {
        $.fn.tagcloud.defaults = {
            bgcolor: {start: '#aaccf9', end: '#ff3939'}
        };
        $('.tag-cloud>a').tagcloud();
    }
    var navHeight = $('.home-menu').height();
    $(window).on('scroll', {
        previousTop: 0
    }, function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            if (!$('.home-menu').hasClass('bgcolor')) {
                $('.home-menu').addClass('bgcolor');
            }
        } else {
            if ($('.home-menu').hasClass('bgcolor')) {
                $('.home-menu').removeClass('bgcolor');
            }
        }
        if (scrollTop < this.previousTop) {
            if (scrollTop > navHeight && !$('.home-menu').hasClass('ixed')) {
                $('.home-menu').addClass('fixed');
            }
        } else {
            if ($('.home-menu').hasClass('fixed')) {
                $('.home-menu').removeClass('fixed');
            }
        }
        this.previousTop = scrollTop;
    });
});
