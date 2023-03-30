jQuery( document ).ready(function($) {
  
  	/* mousover - https://api.jquery.com/mouseover/ */
	$('.your-class').on('mouseover', function(){  

		/* trigger the click - https://api.jquery.com/trigger/ */
		$(this).trigger('click');  
		
	}); 
	
});
