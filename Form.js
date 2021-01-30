/**
* Hack of default HTML submit form
**/
jQuery("form").on("submit",function(e) { 
    var formData = jQuery(this).serializeArray()
    console.log(formData)
    jQuery(this).unbind('submit').submit()
})
