/**
* Takes an array and return unique values
*
* -ex -
* var allPrice = [1,2,3,4,5,5,6,6,6,7,7,]
* var newPrice = allPrice.filter( onlyUnique ); // [1,2,3,4,5,6,7]
**/
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
