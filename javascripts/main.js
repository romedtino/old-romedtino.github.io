console.log('main.js loaded.');

$(document).ready(function() {

    $('a').click(function(event) {

        event.preventDefault();
        
        //TODO maybe we want to make sure these are the top three buttons?
        $(document.getElementById("mainportion")).scrollTo(document.getElementById($(this).context.title), 800);

    });

});
