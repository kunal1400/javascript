/*jQuery.fn.serializeObject = function() {
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
}*/

/**
* This function will count the number of type and remaing character in textarea
**/
function textCounter(field) {
  var maxlimit = jQuery(field).attr("maxlength")
  if ( field.value.length > maxlimit ) {
    field.value = field.value.substring( 0, maxlimit );
    return false;
  } else {
    var typedChar = maxlimit - field.value.length;
    jQuery(field).next().find("span").text(typedChar)
  }
}

/**
* Function for calling post api
**/
function callPostApi(data, cb) {
  fetch('URL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then((data) => {
    cb(data)
  })
}

/**
* Simple function to get form data in array and then get its json
* This is very helpful in calling APIs
*
* <form name="myForm" onsubmit="return getAppointmentData();">
*
**/
function getAppointmentData(e) {
	var formData = jQuery(e).serializeArray()
	var formObj = convertSerializeArrayToObject(formData)
	console.log(formData, formObj, "formData+formObj")
	return false
}

/**
* This is tricky function getting the formdata array and returning
* the object
**/
function convertSerializeArrayToObject( serializeArray ) {
    var o = {};
    $.each(serializeArray, function() {
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
