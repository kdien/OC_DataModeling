$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        if (this.hash !== "") {

            event.preventDefault();
    
            var hash = this.hash;
    
            // Use the number to specify milliseconds to reach the anchored point
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } // End if
    });
});