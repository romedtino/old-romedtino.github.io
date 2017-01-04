/* global $ */
/* global jQuery */
console.log('main.js loaded.');

$(document).ready(function() {
    

    $('button').click(function(event) {

        event.preventDefault();
        //TODO maybe we want to make sure these are the top three buttons?
        $(document.getElementById("mainportion")).scrollTo(document.getElementById($(this).context.title), 800);

    });
    
    $('#smallMenu').find('.mybutton').click(function(event) {

        event.preventDefault();
        //TODO maybe we want to make sure these are the top three buttons?
        $(document.getElementById("mainportion")).scrollTo(document.getElementById($(this).context.title), 800);
        var layout = document.querySelector('.mdl-layout');
        layout.MaterialLayout.toggleDrawer();

    });


    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return (((elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)))
    }
    
});
