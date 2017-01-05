/* global $ */
console.log('main.js loaded.');

$(document).ready(function() {

    //Scroll to a specific id function
    function scrollToTarget() {
        $(document.getElementById("mainportion")).scrollTo(document.getElementById($(this).context.title), 800);
        return this;
    }

    //Apply scroll function to appropriate elements
    $('button').click(scrollToTarget);
    $('#smallMenu').find('.mybutton').click(scrollToTarget);

});
