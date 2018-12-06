$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
  
        if (this.hash !== "") {

            event.preventDefault();
    
            var target = $(this).attr("href");
            var scrollToPosition = $(target).offset().top - 60;
    
            // Use the number to specify milliseconds to reach the anchored point
            $("html, body").animate({"scrollTop": scrollToPosition}, 800, function() {
                window.location.hash = target;
                $("html, body").animate({"scrollTop": scrollToPosition}, 0);
                
                // Remove hash from URL on address bar
                history.pushState("", document.title, window.location.pathname + window.location.search);
            });
        } // End if
    });
});