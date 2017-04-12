$( document ).ready(function() {
    
    initNavigation();
    registerEvents();
    doAfterComponentHtmlLoaded();

});

var initNavigation = function() {

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
    console.log("page: " + page);

    // Upload the content
    $("#main-content").load( "./components/" + page + ".html" );
    
    // Set selected in navigation
    $('#main-navigation #' + page).addClass('selected');

};

var registerEvents = function() {
    $("#main-navigation li").click(function(e){
        page = e.target.id;
        $("#main-content").load( "./components/" + page + ".html", function() {
            doAfterComponentHtmlLoaded();        
        });
        window.location.hash = page;
        $('#main-navigation li').removeClass('selected');
        $('#main-navigation #' + page).addClass('selected');
    });
};

var doAfterComponentHtmlLoaded = function() {
    window.setTimeout(function() {
        // Build code text to show to user
        buildCode();

        // highlight the code
        hljs.initHighlightingOnLoad();
    },1000);
};

var buildCode = function() {
    $('.sdc-code').each(function(index, element){
        var result = $(element).prev()[0].outerHTML;
        var resultEncoded = $('<div/>').text(result).html();
        var newElement = $('<pre><code>' + resultEncoded + '</code></pre>')[0];  
        $(element).replaceWith(newElement);
        hljs.highlightBlock(newElement);
    });
};
