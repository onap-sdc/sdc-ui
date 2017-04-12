$( document ).ready(function() {
    
    // Set default page
    var page = window.location.hash;
    if (page === '') {
        page = "button";
        window.location.hash = page;
    }

    // Remove # at the begining
    if (page.indexOf('#')!==-1){
        page = page.substr(1);
    }

    // Upload the content
    $("#main-content").load( "./components/" + page + ".html" );
    
    // Set selected in navigation
    $('#main-navigation #' + page).addClass('selected');

    console.log("page: " + page);
    $("#main-navigation li").click(function(e){
        page = e.target.id;
        $("#main-content").load( "./components/" + page + ".html" );
        window.location.hash = page;
        $('#main-navigation li').removeClass('selected');
        $('#main-navigation #' + page).addClass('selected');
    });

});