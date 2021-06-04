/**
* Apply comma after 3 digits -ex- 100,000
**/
function commafy( num ) {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}

/**
* Replace all occurence of string by another variable in paragraph
**/
htmldata.replace(/{link}/g, 'http://spacelet.com');

/**
* remove all non numeric values (excluding a . and -)):
*
* https://stackoverflow.com/questions/6223235/javascript-converting-and-exploding-string-to-number
*
**/
parseFloat('$148,326.00'.replace(/[^0-9.-]+/g, ''))

/**
* Removing the Spaces from String
**/
function removeSpace(txt) {
  return String(`${txt}`.replace(/\s/g, ''))
}
