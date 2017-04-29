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

/**
 * Simple router to load components HTML based on id.
 */
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

/**
 * Wait for component to load before applying javascript actions on it.
 */
var doAfterComponentHtmlLoaded = function() {
    window.setTimeout(function() {
        // Build code text to show to user
        buildCode();

        // highlight the code
        hljs.initHighlightingOnLoad();
    },1000);
};

/**
 * Build HTML code automaticly when attribute data-code exists
 * For example:
 * <button class='sdc-button' data-code>This is button</button>
 * Will add the HTML of this (highlighted) button below the button.
 */
var buildCode = function() {
    $('[data-code]').each(function(index, element){
        var result = $(element).removeAttr('data-code')[0].outerHTML;
        var resultEncoded = $('<div/>').text(result).html();
        var newElement = $('<pre><code>' + resultEncoded + '</code></pre>')[0];  
        $(element).after(newElement);
        hljs.highlightBlock(newElement);
    });
	
	$('[data-code-id]').each(function(index, element){
        var attVlue = $(element).attr('data-code-id');
        var codeHere = $('[data-code-ref='+attVlue+']');
        var result = $(element).removeAttr('data-code-id')[0].outerHTML;
        var resultEncoded = $('<div/>').text(result).html();
        var newElement = $('<pre><code>' + resultEncoded + '</code></pre>')[0];  
        codeHere.replaceWith(newElement);
        hljs.highlightBlock(newElement);
    });
};
