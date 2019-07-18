
$(document).ready(function(){

    "use strict";

    $(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");

    $("html").niceScroll({
        cursorcolor: '#fff',
        cursoropacitymin: '0',
        cursoropacitymax: '1',
        cursorwidth: '2px',
        zindex: 999999,
        horizrailenabled: false,
        enablekeyboard: false
    });

    if($.find('#watch')[0]) {

        $('#watch').countDown({
            targetDate: {
                'day': 		9,
                'month': 	9,
                'year': 	2019,
                'hour': 	0,
                'min': 		0,
                'sec': 		0
            },
            omitWeeks: true
        });

        if( $('.day_field .top').html() == "0" ) $('.day_field').css('display','none');

    }

});
