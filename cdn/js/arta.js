jQuery(function($){
	function initNavigation() {
		var cssClassActive = 'active';
		var $html =  $("html, body");
		var $nav = $('#js-nav');

		$nav.on('click', 'a', function(){
			var $this = $(this);
			var $target = $($this.attr('href'));

			// toggle active class
			$this.addClass(cssClassActive).siblings().removeClass(cssClassActive);

			// jump to target
			if($target.length < 1) {
				return;
			}

			$html.animate({
				scrollTop: $target.offset().top - 90 // magic number - header height
			}, {
				duration: 300,
				easing: "swing"
			});

			return false;
		});
	}

	// it all starts HERE
	$(document).ready(function() {
		initNavigation();
	});
});