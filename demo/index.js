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

    console.log("page: " + page);
    $("#main-navigation li").click(function(e){
        $("#main-content").load( "./components/" + e.target.id + ".html" );
        window.location.hash = e.target.id;
    });

});