jQuery(window).load(function() { 

	jQuery('#wptime-plugin-preloader').delay(250).fadeOut("slow");
	
	setTimeout(wptime_plugin_remove_preloader, 2000);
	function wptime_plugin_remove_preloader() {	
		jQuery('#wptime-plugin-preloader').remove();
	}

});
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */