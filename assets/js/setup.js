jQuery.noConflict();



jQuery(document).ready(function($) {

    $('div').on('click',function(e) {
        //Grid View
        if ($(this).hasClass('btnHeader')) {
            $('.container-fluid.btnHeader').removeClass('btnHeader').addClass('openBtnHeader');
            $('.fa.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
            $('.header').css({"height":"120px","overflow":"visible"});
        }
        //List View
        else if($(this).hasClass('openBtnHeader')) {
            $('.container-fluid.openBtnHeader').removeClass('openBtnHeader').addClass('btnHeader');
            $('.fa.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
            $('.header').css({"height":"0","overflow":"hidden"});
        }
    });

    // Fade In Back Top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('#back-top').css("opacity","1");
                //$('#back-top').fadeIn();
            } else {
                $('#back-top').css("opacity","0");
                //$('#back-top').fadeOut();
            }
        });

        // Scroll Body Top 0px onCLick
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        // Scroll Position Fixed
        $(document).scroll(function () {

            var scroll = $(this).scrollTop();
            var topDist = $(".fixedNav").position();

            if (scroll > topDist.top) {
                $('.container-fluid.header').addClass('headerHidden');
                $('.container-fluid.fixedNav').addClass('fixedScroll');
                $('.wnav').css({"height":"60px"});
                $('.navbar-nav>li>a').css({"padding":"20px 15px"});
                $('.navbar-brand img').css({"height":"60px"});
                $('.container-fluid.spaceNavandContent').addClass('spaceNavandContentTop');
            } else {
                $('.container-fluid.header').removeClass('headerHidden');
                $('.container-fluid.fixedNav').removeClass('fixedScroll');
                $('.wnav').css({"height":"116px"});
                $('.navbar-nav>li>a').css({"padding":"47px 18px 50px"});
                $('.navbar-brand img').css({"height":"118px"});
                $('.container-fluid.spaceNavandContent').removeClass('spaceNavandContentTop');
            }

        });

        $(window).scroll(function() {
            var media800 = window.matchMedia( "(max-width:800px)");
            var media768 = window.matchMedia( "(max-width:768px)");
            var media767 = window.matchMedia( "(max-width:767px)");

            if ($(window).width() > 767 ) {

                if (media800.matches||media768.matches) {
                    $('.navbar-nav>li>a').css({"padding":"28px 14px"});
                    $('.wnav').css({"height":"74px"});
                    $('.navbar-brand img').css({"height":"75px"});
                }
            }
            else if ($(window).width() > 300 ) {
                if (media767.matches){
                    $('.navbar-nav>li>a').css({"padding":"12px 15px"});
                    $('.wnav').css({"height":"40px"});
                    $('.navbar-brand img').css({"height":"43px"});
                    $('.container-fluid.spaceNavandContent').removeClass('spaceNavandContentTop');
                }
            }
        });


    });

});
