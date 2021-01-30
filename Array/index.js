/**
* Return new copy of array
**/
function copyOfArray( arr1 ) {
	return arr1.map(x => Object.assign({}, x));
}
