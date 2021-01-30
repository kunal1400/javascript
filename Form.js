/**
* Hack of default HTML submit form
**/
jQuery("form").on("submit",function(e) { 
    var formData = jQuery(this).serializeArray()
    console.log(formData)
    jQuery(this).unbind('submit').submit()
})

jQuery.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}
