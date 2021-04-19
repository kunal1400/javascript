/**
* Takes two arguments first is key and another is url
*
* -ex -
* var url = https://rc-staging1.myshopify.com?variant=32060535275659&diamondType=European&metal=RoseGold
* var type = getParameterByName( "diamondType", url);
*
* -o/p- European
*
**/
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// /**
// *
// * This is the modified version of the getParameterByName function and it is only taking key
// *
// **/
// function getQueryParams( params ) {
//     let href = window.location.href;
//     let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
//     let queryString = reg.exec(href);
//     return queryString ? queryString[1] : null;
// }


/**
* This function will convert form data into query string
*
* -ex -
* jQuery("#product_form_4471733584011").serializeControls();
*
**/
jQuery.fn.serializeControls = function() {
  var data = {};
  function buildInputObject(arr, val) {
    if (arr.length < 1)
      return val;
    var objkey = arr[0];
    if (objkey.slice(-1) == "]") {
      objkey = objkey.slice(0,-1);
    }
    var result = {};
    if (arr.length == 1){
      result[objkey] = val;
    } else {
      arr.shift();
      var nestedVal = buildInputObject(arr,val);
      result[objkey] = nestedVal;
    }
    return result;
  }

  jQuery.each(this.serializeArray(), function() {
    var val = this.value;
    var c = this.name.split("[");
    var a = buildInputObject(c, val);
    jQuery.extend(true, data, a);
  });

  return data;
}

/**
* This function will update key in query string
*
* -ex -
* let url1 = updateQueryStringParameter(product_url, 'variant', variantId)
* let url2 = updateQueryStringParameter(url1, 'diamondType', variant.option1)
* let url3 = updateQueryStringParameter(window.location.href, 'metal', variant.option2)
*
* Adding ID in URL: updateQueryStringParameter(newUrl, 'af', "#AppointmentFormWrapper")
*
**/
function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}

/**
* This function will replace number between _ and . and it will be helpful for getting frames
*
* -ex -
* let b = "https://rdidiamonds.com/img/content/P191646_Shake/OgiMedium_050.jpg"
* b.replace(/_.[0-9]./, `_001`)
* b.replace(/_.[0-9]./, `_002`)
* b.replace(/_.[0-9]./, `_003`)
*
**/
let b = "https://rdidiamonds.com/img/content/P191646_Shake/OgiMedium_050.jpg"
let frames = []
for (var i = 0; i < 50; i++) {
  let frameNumber = 000+i;
  let image = b.replace(/_.[0-9]./, `_${frameNumber}`)
  frames.push(image)
}
console.log(frames)

/**
* Replace all illegal character and spaces from file name except dot
**/
const fixFileName = ( str ) => {
	return str.replace(/[^A-Z0-9.]+/ig, "_");
}

/**
* Replace all illegal character and spaces from file name except dot
**/
const getExtension = ( str ) => {
	return str.split('.').pop();
}

