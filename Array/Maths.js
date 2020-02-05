/**
* Find maximum value from array
*
* -ex-
*
* var allPrice = [1,2,3,4,5,5,6,6,6,7,7]
* var minPrice = Math.max.apply(null, allPrice) // 7
*
**/
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

/**
* Find minimum value from array
*
* -ex-
*
* var allPrice = [1,2,3,4,5,5,6,6,6,7,7]
* var minPrice = Math.min.apply(null, allPrice) // 1
*
**/
Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
