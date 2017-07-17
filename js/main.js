var fil1 = [];
var fil2 = [];
var fil3 = [];
$(document).ready(function(){
    $('.worker').fancybox({
        smallBtn: false,
    });
    $('.popup-close-btn').click(function(){
        $.fancybox.close();
    });
    $('.about-h3').click(function(){
        if ( !($('.about-span').hasClass("open-about-span")) ) {
            $('.about-span').addClass("open-about-span");
            $('.about-h3-span').removeClass("open-about");
            $('.about-h3').addClass("about-open-h3");
        } else {
            $('.about-span').removeClass("open-about-span");
            $('.about-h3-span').addClass("open-about");
            $('.about-h3').removeClass("about-open-h3");
        }
    });
    $('.table-row-panel').click(function(event){
        var tr = $(event.target).parent();
        if ( tr.hasClass("open-row") ) {
            tr.removeClass("open-row");
        } else {
            tr.addClass("open-row");
        }
    });
    $('.filter-1 span').click(function(event){
        if ( !( $(event.target).hasClass("checked-rb") ) ) {
            if ( $(event.target).hasClass("first-rb") ) {
                $('.filter-1 span').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil1 = [];
            } else {
                $('.filter-1 .first-rb').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil1[fil1.length] = $(event.target).data("fil");
            }
        } else {
            if ( !($(event.target).hasClass("first-rb")) ) {
                $(event.target).removeClass("checked-rb");
                for (var i = 0; i < fil1.length; i++) {
                    if ( fil1[i] ==  $(event.target).data("fil") ) {
                        fil1.splice(i,1);
                    }
                };
            }
        }
        if ( !($('.filter-1 span').hasClass("checked-rb")) ) {
            $('.filter-1 .first-rb').addClass("checked-rb");
            fil1 = [];
        }
    });
    $('.filter-2 span').click(function(event){
        if ( !( $(event.target).hasClass("checked-rb") ) ) {
            if ( $(event.target).hasClass("first-rb") ) {
                $('.filter-2 span').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil1 = [];
            } else {
                $('.filter-2 .first-rb').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil2[fil2.length] = $(event.target).data("fil");
            }
        } else {
            if ( !($(event.target).hasClass("first-rb")) ) {
                $(event.target).removeClass("checked-rb");
                for (var i = 0; i < fil1.length; i++) {
                    if ( fil2[i] ==  $(event.target).data("fil") ) {
                        fil2.splice(i,1);
                    }
                };
            }
        }
        if ( !($('.filter-2 span').hasClass("checked-rb")) ) {
            $('.filter-2 .first-rb').addClass("checked-rb");
            fil2 = [];
        }
    });
    $('.filter-3 span').click(function(event){
        if ( !( $(event.target).hasClass("checked-rb") ) ) {
            if ( $(event.target).hasClass("first-rb") ) {
                $('.filter-3 span').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil3 = [];
            } else {
                $('.filter-3 .first-rb').removeClass("checked-rb");
                $(event.target).addClass("checked-rb");
                fil3[fil3.length] = $(event.target).data("fil");
            }
        } else {
            if ( !($(event.target).hasClass("first-rb")) ) {
                $(event.target).removeClass("checked-rb");
                for (var i = 0; i < fil3.length; i++) {
                    if ( fil3[i] ==  $(event.target).data("fil") ) {
                        fil3.splice(i,1);
                    }
                };
            }
        }
        if ( !($('.filter-3 span').hasClass("checked-rb")) ) {
            $('.filter-3 .first-rb').addClass("checked-rb");
            fil3 = [];
        }
    });
    $('.remove').click(function(){
        $('.project-top span').removeClass("checked-rb");
        $('.first-rb').addClass("checked-rb");
        fil1 = [];
        fil2 = [];
        fil3 = [];
    });
    $('.b-menu-icon').click(function(){
        if ( !($('.slideout-menu').hasClass("open")) ) {
            $('.slideout-menu').addClass("open");
            $('.b-menu-icon').addClass("open-menu");
            $('.menu-back').addClass("menu-back-open");
        } else {
            $('.slideout-menu').removeClass("open");
            $('.b-menu-icon').removeClass("open-menu");
            $('.menu-back').removeClass("menu-back-open");
        }
    });
    $('body').click(function(event){
        $('.worker-info').removeClass("open-info");
        var n;
        if ( $(window).width() > 768 ) {
            n = $('.table').data("num");
        } else {
            n = $('.project-table-mobile').data("num");
        }
        if ( (fil1.length == 0) && (fil2.length == 0) && (fil3.length == 0) ) {
            $('.table-row').removeClass("close-tr");
        } else {
            for (var i = 1; i <= n; i++) {
                var element = $('.row-'+i);
                if ( (fil1.length == 0) && (fil2.length == 0) && (fil3.length != 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil3.length; j++) {
                        if ( element.hasClass(fil3[j]) ) {
                            element.removeClass("close-tr");
                        }
                    };
                }
                if ( (fil1.length != 0) && (fil2.length == 0) && (fil3.length == 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil1.length; j++) {
                        if ( element.hasClass(fil1[j]) ) {
                            element.removeClass("close-tr");
                        }
                    };
                }
                if ( (fil1.length == 0) && (fil2.length != 0) && (fil3.length == 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil2.length; j++) {
                        if ( element.hasClass(fil2[j]) ) {
                            element.removeClass("close-tr");
                        }
                    };
                }
                if ( (fil1.length == 0) && (fil2.length != 0) && (fil3.length != 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil3.length; j++) {
                        for (var k = 0; k < fil2.length; k++) {
                            if ( (element.hasClass(fil3[j])) && (element.hasClass(fil2[k])) ) {
                                element.removeClass("close-tr");
                            }
                        };
                    };
                }
                if ( (fil1.length != 0) && (fil2.length == 0) && (fil3.length != 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil3.length; j++) {
                        for (var k = 0; k < fil1.length; k++) {
                            if ( (element.hasClass(fil3[j])) && (element.hasClass(fil1[k])) ) {
                                element.removeClass("close-tr");
                            }
                        };
                    };
                }
                if ( (fil1.length != 0) && (fil2.length != 0) && (fil3.length == 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil1.length; j++) {
                        for (var k = 0; k < fil2.length; k++) {
                            if ( (element.hasClass(fil1[j])) && (element.hasClass(fil2[k])) ) {
                                element.removeClass("close-tr");
                            }
                        };
                    };
                }
                if ( (fil1.length != 0) && (fil2.length != 0) && (fil3.length != 0) ) {
                    element.addClass("close-tr");
                    for (var j = 0; j < fil3.length; j++) {
                        for (var k = 0; k < fil1.length; k++) {
                            for (var l = 0; l < fil2.length; l++) {
                                if ( (element.hasClass(fil3[j])) && (element.hasClass(fil1[k])) && (element.hasClass(fil2[l]))) {
                                    element.removeClass("close-tr");
                                }
                            }
                        };
                    };
                }
            };
        }
    });
    $('.worker-mobile').click(function(event){
        var src = $(event.target).data("src");
        if ( !($(src).hasClass("open-info")) ) {
            $('.worker-info').removeClass("open-info");
            $(src).addClass("open-info");
        } else {
            $(src).removeClass("open-info");
        }
        event.stopImmediatePropagation();
    });
    $('.worker-info').click(function(event){
        event.stopImmediatePropagation();
    });
    $('.menu-back').click(function(){
        $('.slideout-menu').removeClass("open");
        $('.b-menu-icon').removeClass("open-menu");
        $('.menu-back').removeClass("menu-back-open");
    });
    $('.lek-el-h3').click(function(event){
        var el = $(event.target).data("el");
        if ( !($(el).hasClass("open-cont")) ) {
            $(el).addClass("open-cont");
            $(event.target).addClass("lek-el-open-h3");
        } else {
            $(el).removeClass("open-cont");
            $(event.target).removeClass("lek-el-open-h3");
        }
    });
    $('.prem-slider').slick({
        infinite: true,
        dots: true
    });
    

    

    var width=$(window).width();
        var height=$(window).height();
        var propw=width/1920;
        var proph=height/1080;
        
        if ( width < 769 ) {
            $('#fullpage').fullpage({
                menu: '#menu',
                navigation: 'true',
                afterLoad: function(anchorLink, index){
                    $.fn.fullpage.destroy('all');
                }
            });
        } else {
            $('#fullpage').fullpage({
                menu: '#menu',
                navigation: 'true',
            });
        }

        //start zoom
        if ((width >= 1200) && (width <= 2560) && (height >= 520) && (height <= 1440)) {
            $('html').css({
                "font-size": 20 * propw,
            });
            $('.b-block').css({
                "width": 1604 * propw,
                "height": 980 *proph,
            });
            $('.b-logo-cont').css({
                "margin-left" : 54 * propw,
            });
            $('.b-logo-icon').css({
                "width": 324 * propw,
                "height": 59 * propw,
                "margin-top": 20 * proph,
                "margin-bottom": 20 * proph,
            });
            $('.b-menu').css({
                "width": 494 * propw,
            });
            $('.b-menu a').css({
                "margin-right": 30 * propw,
                "padding-top": 42 * propw,
                "padding-bottom": 42 * propw,
            });
            $('.b-date-cont').css({
                "margin-top": 29 * proph,
                "margin-bottom": 22 * proph,
                "margin-right": 93 * propw,
            });
            $('.b-date-cont h2').css({
                "margin-bottom": 8 * proph,
            });
            $('.b-date-cont a').css({
                "padding-left": 45 * propw,
            });
            $('.b-mail-icon').css({
                "width": 37 * propw,
                "height": 24 * propw,
            });

            $('.b-2-span-1').css({
                "padding-top": 37 * propw,
                "padding-left": 159 * propw,
                "padding-bottom": 18 * propw,
                "padding-right": 52 * propw,
                "margin-left": -159 * propw,
                "margin-top": 200 * proph,
            });
            $('.b-2-span-2').css({
                "margin-left": 57 * propw,
                "padding-top": 18 * propw,
                "padding-left": 52 * propw,
                "padding-bottom": 28 * propw,
                "padding-right": 52 * propw,
            });
            $('.b-2-company').css({
                "bottom": 90 * propw,
            });
            $('.b-2-company-name').css({
                "margin-bottom": 12 * proph,
            });
            $('.b-2-company span').css({
                "padding-top": 9 * propw,
                "padding-left": 19 * propw,
                "padding-bottom": 5 * propw,
                "padding-right": 16 * propw,
            });
            $('.company-slider').css({
                "height": 131 * propw,
            });
            $('.b-2-slide').css({
                "height": $('.company-slider').css("height"),
            });

            $('.b-3 b-block').css({
                "width": 1484 * propw,
            });
            $('.b-3 h2').css({
                "padding-top": 24 * propw,
                "padding-left": 29 * propw,
                "padding-bottom": 17 * propw,
                "padding-right": 29 * propw,
            });
            $('.b-3-name').css({
                "margin-top": 50 * proph,
            });
            $('.b-3-span').css({
                "padding-top": 8.5 * propw,
                "padding-left": 14 * propw,
                "padding-bottom": 8.5 * propw,
                "padding-right": 14 * propw,
            });
            $('.b-3-text-1').css({
                "top": 172 * proph,
            });
            $('.b-3-text-2').css({
                "top": 182 * proph,
                "left": 622 * propw,
            });
            $('.b-3-text-3').css({
                "top": 182 * proph,
                "left": 1090 * propw,
            });
            $('.b-3-text-4').css({
                "bottom": 103 * proph,
                "left": -46 * propw, 
            });

            $('.b-4 .b-block').css({
                "width": 1264 * propw,
            });
            $('.prem-block').css({
                "width": 409 * propw,
                "height": 314 * propw,
                "margin-bottom": 12 * propw,
            });
            $('.prem-2').css({
                "margin-left": 17 * propw,
                "margin-right": 17 * propw,
            });
            $('.prem-icon').css({
                "height": 192 * propw,
            });
            $('.b-4-name').css({
                "margin-top": 47 * proph,
                "margin-bottom": 14 * proph,
            });
            $('.b-4 h2').css({
                "padding-top": 14 * propw,
                "padding-left": 26 * propw,
                "padding-bottom": 5 * propw,
                "padding-right": 26 * propw,
            });
            $('.prem-block:first-child .prem-icon').css({
                "height": 213 * propw,
            });
            $('.prem-block:nth-child(3) .prem-icon').css({
                "height": 213 * propw,
            });
            $('.prem-block:nth-child(4) .prem-icon').css({
                "height": 190 * propw,
            });
            $('.prem-block:nth-child(5) .prem-icon').css({
                "height": 206 * propw,
            });
            $('.prem-block:last-child .prem-icon').css({
                "height": 190 * propw,
            });

            $('.b-5 .b-block').css({
                "width": 1414 * propw,
            });
            $('.b-5-name').css({
                "margin-top": 170 * proph,
                "margin-bottom": 20 * proph,
            });
            $('.b-5 h2').css({
                "padding-top": 13 * propw,
                "padding-left": 23 * propw,
                "padding-bottom": 20 * propw,
                "padding-right": 35 * propw,
            });
            $('.b-5-text').css({
                "padding-top": 48 * propw,
                "padding-left": 49 * propw,
                "padding-bottom": 57 * propw,
                "padding-right": 73 * propw,
            });

            $('.map-block').css({
                "height": 585 * propw,
            });
            $('.cont-footer .b-block').css({
                "width": 1160 * propw,
            });
            $('.cont-info').css({
                "padding-right": 70 * propw,
                "margin-top": 70 * propw,
                "margin-bottom": 64 * propw,
            });
            $('.cont-info .adres').css({
                "margin-bottom": 24 * propw,
            });
            $('.cont-form').css({
                "margin-top": 70 * propw,
                "margin-bottom": 64 * propw,
            });
            $('.cont-form form input').css({
                "margin-bottom": 14 * propw,
                "width": 286 * propw,
                "padding-top": 2.5 * propw,
                "padding-left": 14 * propw,
                "padding-bottom": 2.5 * propw,
            });
            $('.cont-form .right').css({
                "margin-left": 17 * propw,
            });
            $('.cont-form form textarea').css({
                "width": 358 * propw,
                "height": 177 * propw,
                "padding": 8 * propw,
                "margin-bottom": 14 * propw,
            });
            $('.cont-form form button').css({
                "padding-top": 3.5 * propw,
                "padding-left": 13 * propw,
                "padding-bottom": 3.5 * propw,
                "padding-right": 13 * propw,
            });

            $('.service-step').css({
                "width": 470 * propw,
                "height": 790 * propw,
            });
            $('.step-top').css({
                "height": 289 * propw,
            });
            $('.step-top h3').css({
                "bottom": 15 * propw,
                "margin-left": 32 * propw,
                "margin-right": 32 * propw,
            });
            $('.service-act').css({
                "margin-left": 17 * propw,
                "margin-right": 17 * propw,
                "padding-bottom": 14 * propw, 
            });
            $('.service-act h3').css({
                "margin-left": 15 * propw,
                "margin-top": 15 * propw,
                "margin-bottom": 9 * propw,
            });
            $('.service-act ul li').css({
                "margin-left": 15 * propw,
            });
            $('.service .b-block').css({
                "padding-top": 17 * propw,
                "width": 1478 * propw,
            });
            $('.service-act span').css({
                "margin-left": 15 * propw,
                "margin-top": -5 * propw,
                "margin-bottom": 9 * propw,
            });

            $('.about-lek .b-block').css({
                "width": 1322 * propw
            });
            $('.lek-content .b-block').css({
                "width": 1322 * propw
            });
            $('.about-lek .left').css({
                "padding-top": 33 * propw,
                "padding-bottom": 30 * propw,
                "width": 630 * propw,
            });
            $('.about-lek .right').css({
                "padding-top": 33 * propw,
                "padding-bottom": 30 * propw,
                "width": 625 * propw,
            });
            $('.lek-el').css({
                "padding-top": 20 * propw,
                "padding-bottom": 20 * propw,
            });
            $('.lek-el .left').css({
                "padding-right": 75 * propw,
                "padding-top": 15 * propw,
                "width": 225 * propw,
            });
            $('.lek-el .el-cont').css({
                "margin-left": 225 * propw,
            });
            $('.el-cont span').css({
                "padding-top": 15 * propw,
                "padding-bottom": 15 * propw,
            });
            $('.el-cont span ol').css({
                "margin-left": 20 * propw,
            });

            $('.workers .b-block').css({
                "width": 1662 * propw,
            });
            $('.workers-text').css({
                "width": 400 * propw,
                "height": 485 * propw,
                "margin-right": 10 * propw,
                "margin-bottom": 20 * propw,
            });
            $('.worker').css({
                "width": 400 * propw,
                "height": 485 * propw,
                "margin-left": 10 * propw,
                "margin-right": 10 * propw,
                "margin-bottom": 20 * propw,
            });
            $('.worker span').css({
                "padding": 20 * propw,
            });
            $('.work-popup').css({
                "width": 1252 * propw,
                "height": 980 * propw,
            });
            $('.work-popup-photo').css({
                "width": 820 * propw,
            });
            $('.work-popup-text').css({
                "width": 432 * propw,
            });

            $('.project-top .b-block').css({
                "width": 1562 * propw,
            });
            $('.project-table .b-block').css({
                "width": 1562 * propw,
            });
        }
        //end zoom
    $(window).resize(function(){
        var width=$(window).width();
        var height=$(window).height();
        var propw=width/1920;
        var proph=height/1080;
        
        if (width > 768) {
            $('#fullpage').fullpage({
                menu: '#menu',
                navigation: 'true',
            });
        } else {
            $.fn.fullpage.destroy('all');
        }

        //start zoom
        if ((width >= 1200) && (width <= 2560) && (height >= 520) && (height <= 1440)) {
            $('html').css({
                "font-size": 20 * propw,
            });
            $('.b-block').css({
                "width": 1604 * propw,
                "height": 980 *proph,
            });
            $('.b-logo-cont').css({
                "margin-left" : 54 * propw,
            });
            $('.b-logo-icon').css({
                "width": 324 * propw,
                "height": 59 * propw,
                "margin-top": 20 * proph,
                "margin-bottom": 20 * proph,
            });
            $('.b-menu').css({
                "width": 494 * propw,
            });
            $('.b-menu a').css({
                "margin-right": 30 * propw,
                "padding-top": 42 * propw,
                "padding-bottom": 42 * propw,
            });
            $('.b-date-cont').css({
                "margin-top": 29 * proph,
                "margin-bottom": 22 * proph,
                "margin-right": 93 * propw,
            });
            $('.b-date-cont h2').css({
                "margin-bottom": 8 * proph,
            });
            $('.b-date-cont a').css({
                "padding-left": 45 * propw,
            });
            $('.b-mail-icon').css({
                "width": 37 * propw,
                "height": 24 * propw,
            });

            $('.b-2-span-1').css({
                "padding-top": 37 * propw,
                "padding-left": 159 * propw,
                "padding-bottom": 18 * propw,
                "padding-right": 52 * propw,
                "margin-left": -159 * propw,
                "margin-top": 200 * proph,
            });
            $('.b-2-span-2').css({
                "margin-left": 57 * propw,
                "padding-top": 18 * propw,
                "padding-left": 52 * propw,
                "padding-bottom": 28 * propw,
                "padding-right": 52 * propw,
            });
            $('.b-2-company').css({
                "bottom": 90 * propw,
            });
            $('.b-2-company-name').css({
                "margin-bottom": 12 * proph,
            });
            $('.b-2-company span').css({
                "padding-top": 9 * propw,
                "padding-left": 19 * propw,
                "padding-bottom": 5 * propw,
                "padding-right": 16 * propw,
            });
            $('.company-slider').css({
                "height": 131 * propw,
            });
            $('.b-2-slide').css({
                "height": $('.company-slider').css("height"),
            });

            $('.b-3 b-block').css({
                "width": 1484 * propw,
            });
            $('.b-3 h2').css({
                "padding-top": 24 * propw,
                "padding-left": 29 * propw,
                "padding-bottom": 17 * propw,
                "padding-right": 29 * propw,
            });
            $('.b-3-name').css({
                "margin-top": 50 * proph,
            });
            $('.b-3-span').css({
                "padding-top": 8.5 * propw,
                "padding-left": 14 * propw,
                "padding-bottom": 8.5 * propw,
                "padding-right": 14 * propw,
            });
            $('.b-3-text-1').css({
                "top": 172 * proph,
            });
            $('.b-3-text-2').css({
                "top": 182 * proph,
                "left": 622 * propw,
            });
            $('.b-3-text-3').css({
                "top": 182 * proph,
                "left": 1090 * propw,
            });
            $('.b-3-text-4').css({
                "bottom": 103 * proph,
                "left": -46 * propw, 
            });

            $('.b-4 .b-block').css({
                "width": 1264 * propw,
            });
            $('.prem-block').css({
                "width": 409 * propw,
                "height": 314 * propw,
                "margin-bottom": 12 * propw,
            });
            $('.prem-2').css({
                "margin-left": 17 * propw,
                "margin-right": 17 * propw,
            });
            $('.prem-icon').css({
                "height": 192 * propw,
            });
            $('.b-4-name').css({
                "margin-top": 47 * proph,
                "margin-bottom": 14 * proph,
            });
            $('.b-4 h2').css({
                "padding-top": 14 * propw,
                "padding-left": 26 * propw,
                "padding-bottom": 5 * propw,
                "padding-right": 26 * propw,
            });
            $('.prem-block:first-child .prem-icon').css({
                "height": 213 * propw,
            });
            $('.prem-block:nth-child(3) .prem-icon').css({
                "height": 213 * propw,
            });
            $('.prem-block:nth-child(4) .prem-icon').css({
                "height": 190 * propw,
            });
            $('.prem-block:nth-child(5) .prem-icon').css({
                "height": 206 * propw,
            });
            $('.prem-block:last-child .prem-icon').css({
                "height": 190 * propw,
            });

            $('.b-5 .b-block').css({
                "width": 1414 * propw,
            });
            $('.b-5-name').css({
                "margin-top": 170 * proph,
                "margin-bottom": 20 * proph,
            });
            $('.b-5 h2').css({
                "padding-top": 13 * propw,
                "padding-left": 23 * propw,
                "padding-bottom": 20 * propw,
                "padding-right": 35 * propw,
            });
            $('.b-5-text').css({
                "padding-top": 48 * propw,
                "padding-left": 49 * propw,
                "padding-bottom": 57 * propw,
                "padding-right": 73 * propw,
            });

            $('.map-block').css({
                "height": 585 * propw,
            });
            $('.cont-footer .b-block').css({
                "width": 1160 * propw,
            });
            $('.cont-info').css({
                "padding-right": 70 * propw,
                "margin-top": 70 * propw,
                "margin-bottom": 64 * propw,
            });
            $('.cont-info .adres').css({
                "margin-bottom": 24 * propw,
            });
            $('.cont-form').css({
                "margin-top": 70 * propw,
                "margin-bottom": 64 * propw,
            });
            $('.cont-form form input').css({
                "margin-bottom": 14 * propw,
                "width": 286 * propw,
                "padding-top": 2.5 * propw,
                "padding-left": 14 * propw,
                "padding-bottom": 2.5 * propw,
            });
            $('.cont-form .right').css({
                "margin-left": 17 * propw,
            });
            $('.cont-form form textarea').css({
                "width": 358 * propw,
                "height": 177 * propw,
                "padding": 8 * propw,
                "margin-bottom": 14 * propw,
            });
            $('.cont-form form button').css({
                "padding-top": 3.5 * propw,
                "padding-left": 13 * propw,
                "padding-bottom": 3.5 * propw,
                "padding-right": 13 * propw,
            });

            $('.service-step').css({
                "width": 470 * propw,
                "height": 790 * propw,
            });
            $('.step-top').css({
                "height": 289 * propw,
            });
            $('.step-top h3').css({
                "bottom": 15 * propw,
                "margin-left": 32 * propw,
                "margin-right": 32 * propw,
            });
            $('.service-act').css({
                "margin-left": 17 * propw,
                "margin-right": 17 * propw,
                "padding-bottom": 14 * propw, 
            });
            $('.service-act h3').css({
                "margin-left": 15 * propw,
                "margin-top": 15 * propw,
                "margin-bottom": 9 * propw,
            });
            $('.service-act ul li').css({
                "margin-left": 15 * propw,
            });
            $('.service .b-block').css({
                "padding-top": 17 * propw,
                "width": 1478 * propw,
            });
            $('.service-act span').css({
                "margin-left": 15 * propw,
                "margin-top": -5 * propw,
                "margin-bottom": 9 * propw,
            });

            $('.about-lek .b-block').css({
                "width": 1322 * propw
            });
            $('.lek-content .b-block').css({
                "width": 1322 * propw
            });
            $('.about-lek .left').css({
                "padding-top": 33 * propw,
                "padding-bottom": 30 * propw,
                "width": 630 * propw,
            });
            $('.about-lek .right').css({
                "padding-top": 33 * propw,
                "padding-bottom": 30 * propw,
                "width": 625 * propw,
            });
            $('.lek-el').css({
                "padding-top": 20 * propw,
                "padding-bottom": 20 * propw,
            });
            $('.lek-el .left').css({
                "padding-right": 75 * propw,
                "padding-top": 15 * propw,
                "width": 225 * propw,
            });
            $('.lek-el .el-cont').css({
                "margin-left": 225 * propw,
            });
            $('.el-cont span').css({
                "padding-top": 15 * propw,
                "padding-bottom": 15 * propw,
            });
            $('.el-cont span ol').css({
                "margin-left": 20 * propw,
            });

            $('.workers .b-block').css({
                "width": 1662 * propw,
            });
            $('.workers-text').css({
                "width": 400 * propw,
                "height": 485 * propw,
                "margin-right": 10 * propw,
                "margin-bottom": 20 * propw,
            });
            $('.worker').css({
                "width": 400 * propw,
                "height": 485 * propw,
                "margin-left": 10 * propw,
                "margin-right": 10 * propw,
                "margin-bottom": 20 * propw,
            });
            $('.worker span').css({
                "padding": 20 * propw,
            });
            $('.work-popup').css({
                "width": 1252 * propw,
                "height": 980 * propw,
            });
            $('.work-popup-photo').css({
                "width": 820 * propw,
            });
            $('.work-popup-text').css({
                "width": 432 * propw,
            });

            $('.project-top .b-block').css({
                "width": 1562 * propw,
            });
            $('.project-table .b-block').css({
                "width": 1562 * propw,
            });
        }
        //end zoom
    });
    $('.slider-content').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    $('.slick-arrow').text("");
    


    $.fn.placeholder = function() {
        if(typeof document.createElement("input").placeholder == 'undefined') {
            $('[placeholder]').focus(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function() {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur().parents('form').submit(function() {
                $(this).find('[placeholder]').each(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                    }
                });
            });
        }
    }
    $.fn.placeholder();
    
	var myPlace = new google.maps.LatLng(56.453753, 84.957066);
    var myOptions = {
        zoom: 16,
        center: myPlace,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: true
    }
    var contentString = '<div class="map-org-name"><span class="bold-span">Клиника НИИФиРМ им. Е. Д. Гольдберга</span><br>'+
    '<div class="map-org-info"><span>ул. Нахимова, 1а<br>Томск<br>Томская обл., Россия<br>634034</span></div>'
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); 
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
	    position: myPlace,
	    map: map,
	    title: "Клиника НИИФиРМ им. Е. Д. Гольдберга"
	});
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    /*var options = {
        $AutoPlay: true,                                
        $SlideDuration: 500,                            

        $BulletNavigatorOptions: {                      
            $Class: $JssorBulletNavigator$,             
            $ChanceToShow: 2,                           
            $AutoCenter: 1,                            
            $Steps: 1,                                  
            $Lanes: 1,                                  
            $SpacingX: 10,                              
            $SpacingY: 10,                              
            $Orientation: 1                             
        }
    };*/
    
    //var jssor_slider1 = new $JssorSlider$("slider1_container", options);


});