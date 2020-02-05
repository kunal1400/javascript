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

/**
*
* This is the modified version of the getParameterByName function and it is only taking key
*
**/
function getQueryParams( params ) {
    let href = window.location.href;
    let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
}
