require(['jquery', 'jquery/ui'], function($){
jQuery(document).ready(function(){
    size_li = $(".gallery td").size();
    x=70;
    $('.gallery td:lt('+x+')').show();
    $('.more').click(function () {
        x= (x+70 <= size_li) ? x+70 : size_li;
        $('.gallery td:lt('+x+')').show();
    });
    $('.less').click(function () {
        x=(x-70<0) ? 3 : x-70;
        $('.gallery td').not(':lt('+x+')').hide();
    });
});
});
