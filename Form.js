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
* <form name="myForm" onsubmit="return getAppointmentData(this);">
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
    jQuery.each(serializeArray, function() {
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

/**
* Javascript file upload and handling
**/
function handleFileSelect() {
	if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
	  alert('The File APIs are not fully supported in this browser.');
	  return;
	}   

	var input = document.getElementById('fileinput');
	if (!input) {
	  alert("Um, couldn't find the fileinput element.");
	}
	else if (!input.files) {
	  alert("This browser doesn't seem to support the `files` property of file inputs.");
	}
	else if (!input.files[0]) {
	  alert("Please select a file before clicking 'Load'");               
	}
	else {
	  var file = input.files[0];
	  var fr = new FileReader();
	  fr.onload = receivedText;
	  //fr.readAsText(file);
	  //fr.readAsBinaryString(file); //as bit work with base64 for example upload to server
	  fr.readAsDataURL(file);
	}
}      
