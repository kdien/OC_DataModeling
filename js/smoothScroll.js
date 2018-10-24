$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
  
        if (this.hash !== "") {

            event.preventDefault();
    
            var target = $(this).attr("href");
            var scrollToPosition = $(target).offset().top - 60;
    
            // Use the number to specify milliseconds to reach the anchored point
            $("html").animate({"scrollTop": scrollToPosition}, 800, function() {
                window.location.hash = target;
                $("html").animate({"scrollTop": scrollToPosition}, 0);
            });
        } // End if
    });
});