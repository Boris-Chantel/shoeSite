var app = (function() {
	var init = function () {
		$('.Hero nav').find('button').on('click', Hero.changeSlide);
	};

	var Hero = {
		changeSlide: function() {
			var btn = $(this);

			btn.addClass('active').siblings().removeClass('active');
			$('.Hero__slides').find('.' + btn.attr('id')).addClass('active').siblings().removeClass('active');

		}
	};

	return {
		init: init
	};
})();

app.init();
