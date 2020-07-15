"use strict";

$(document).mousemove(function(e) {
    $('.pointer').css({left:e.pageX, top:e.pageY})
})