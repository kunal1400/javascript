/**
* Call a function before page load
**/
<script type="text/javascript">
    function preloadFunc(){
  		//userRedirection()
    }
    window.onpaint = preloadFunc();
</script>

/**
* This function will find localstorage value by key matching
* "#user"
**/
function getLocalStorageByKeyMatch(key) {
    var item = null
    for (var i = 0; i < localStorage.length; i++) {
        if ( localStorage.key(i).indexOf(key) != -1 ) {
            item = localStorage.getItem(localStorage.key(i));
            break;
        }
    }
    return item
}


/**
* This function will work on mobile
**/
(function($) {
	$(window).on('scroll', function() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      console.log("mobile device");
    }
    else {
        console.log("not a mobile device");
    }		
	});
})( jQuery );
