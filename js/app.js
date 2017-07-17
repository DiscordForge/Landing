$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
    if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				
			});
		}
	}
});
(function(){
    var cookies;
    function readCookie(name,c,C,i){
        if(cookies){ return cookies[name]; }

        c = document.cookie.split('; ');
        cookies = {};

        for(i=c.length-1; i>=0; i--){
           C = c[i].split('=');
           cookies[C[0]] = C[1];
        }

        return cookies[name];
    }
	window.readCookie = readCookie;
})();
/* Cookie Consent Start
-------------------------------------------------------------- */
window.cookieconsent.initialise({
	"palette": {
		"popup": {
			"background": "#23272A"
		},
		"button": {
			"background": "transparent",
			"text": "#14a7d0",
			"border": "#14a7d0"
		}
	},
	"content": {
		"message": "DiscordForge uses cookies to ensure you get the best experience on the website."
	}
});
/* Cookie Consent End
-------------------------------------------------------------- */