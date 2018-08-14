$(document).ready(function () {
    $('#header_search_block_toggle').click(function () {
        $(this).toggleClass('active');
        $('#header_search_block').slideToggle();
        return false;
    });
    //$('html').click(function() {
    //    $('#header_search_block').slideUp();
    //    $('#header_search_block_toggle').removeClass('active');
    //});
    $('#qtranxs_select_qtranslate-chooser').selectpicker({
        size: 5,
        width: '60px'
    });
    $("<style type='text/css' id='dynamic' />").appendTo("head");
    $("#politicaonline_on_small .tab-pane").each(function (key, item) {
        var next_selector = "#politicaonline_next_" + this.id;
        var prev_selector = "#politicaonline_prev_" + this.id;
        var slider_selector = "#" + this.id + " .slider-politica";
        make_slider(slider_selector, prev_selector, next_selector);
    });
    $("#politica_tabs>ul>li>a").click(function () {
        var tab_id = this.getAttribute("href");
        var slider_selector =  tab_id + " .slider-politica";
        var next_selector = "#politicaonline_next_" + tab_id.substr(1);
        var prev_selector = "#politicaonline_prev_" + tab_id.substr(1);
        reload_slider(slider_selector,next_selector,prev_selector);
    });
    function reload_slider(slider_selector, prev_selector, next_selector) {
       /* var slider=$(slider_selector).reloadSlider({
            mode: 'vertical',
            minSlides: 5,
            maxSlides: 5,
            adaptiveHeight: true,
            hideControlOnEnd: true,
            infiniteLoop: false,
            wrapperClass: 'bx-wrapper',
            pager: false,
            controls: true,
            nextSelector: next_selector,
            prevSelector: prev_selector,
            nextText: '<div style="height:30px;width: 100%" ></div>',
            prevText: '<div style="height:30px;width: 100%" ></div>',
        });*/
        $(window).trigger('resize');

        //slider.redrawSlider();
       // $(slider_selector).resizeWindow();
    }
    $('#politica_tabs>ul>li>a').on('shown.bs.tab', function(){
       // alert('The new tab is about to be shown.');
        $(window).trigger('resize');
    });

    function make_slider(slider_selector, prev_selector, next_selector) {
        $(slider_selector).bxSlider({
            mode: 'vertical',
            minSlides: 5,
            maxSlides: 5,
            adaptiveHeight: true,
            hideControlOnEnd: true,
            infiniteLoop: false,
            wrapperClass: 'bx-wrapper',
            pager: false,
            controls: true,
            nextSelector: next_selector,
            prevSelector: prev_selector,
            nextText: '<div style="height:30px;width: 100%" ></div>',
            prevText: '<div style="height:30px;width: 100%" ></div>',
        });
    }

    /*
    $('.slider-politica').bxSlider({
        mode: 'vertical',
        minSlides: 5,
        maxSlides: 5,
        adaptiveHeight: true,
        hideControlOnEnd: true,
        infiniteLoop: false,
        wrapperClass: 'bx-wrapper',
        pager: false,
        controls: true,
        nextSelector:'#politicaonline_next',
        prevSelector:'#politicaonline_prew',
        nextText: '<div style="height:30px;width: 100%" ></div>',
        prevText: '<div style="height:30px;width: 100%" ></div>',
    });

    $('#slider-blogosfera').bxSlider({
        mode: 'vertical',
        minSlides: 5,
        maxSlides: 5,
        adaptiveHeight: true,
        hideControlOnEnd: true,
        infiniteLoop: false,
        wrapperClass: 'bx-wrapper',
        pager: false,
        controls: true,
        nextSelector:'#politicaonline_next',
        prevSelector:'#politicaonline_prew',
        nextText: '<div style="height:30px;width: 100%" ></div>',
        prevText: '<div style="height:30px;width: 100%" ></div>',
    });


    /*
        $('.slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical: true,

            adaptiveHeight: true
        });

        function onResize() {
            if (window.matchMedia('screen and (min-width: 768px) and (max-width: 1200px)').matches) {
                //...
                var height = $("#blogosfera_col_on_small").height();
                var h1 = $("#politicaonline_on_small").height();
                var h2 = $("#blogosfera_on_small").height();
                $("#separate_columns").height(Math.max(h1, h2) + 1);

            } else {
                //  $("#politicaonline_on_small").height("auto");
            }
        }

        onResize();
        $(window).resize(function () {
            onResize();
        });

    */
    /*
    var $whatever        = $('#container');
    var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
      $("#dynamic").text("#breaking_news:after{width:" + ending_right+ "px;}");

        $('.richmedia_fisc div a').click(function(){
            $('.richmedia_fisc').hide();
        });
    */
});

/*
$(window).resize(function () { 
    var $whatever        = $('#container');
var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
  $("#dynamic").text("#breaking_news:after{width:" + ending_right+ "px;}");
});
*/


