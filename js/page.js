/**
 * Created by dev on 08-19-17.
 */
(function ($) {
	var current = 1;

	$(this).on('keyup', function (e) {
		if (e.which == 37) {
			current = current - 1;
			$("div.pt-page").each( function() {
				$( this ).removeClass('pt-page-current');
				$(this).removeClass('pt-page-moveFromLeft');
			});
			$("div.pt-page").each( function(index, value) {
				if (index === current) {
					$(this).addClass('pt-page-current');
					$(this).addClass('pt-page-moveFromLeft');
				}
			});
		}
		if (e.which == 39) {
			$("#iterateEffects").click();
		}
	});

})(jQuery);