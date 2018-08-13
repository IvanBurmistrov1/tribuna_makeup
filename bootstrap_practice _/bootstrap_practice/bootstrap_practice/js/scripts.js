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
    $('#slider').lightSlider({
        item: 4,
        loop: false,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        autoHeight:true,

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
})
;

/*
$(window).resize(function () { 
    var $whatever        = $('#container');
var ending_right     = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
  $("#dynamic").text("#breaking_news:after{width:" + ending_right+ "px;}");
});
*/


