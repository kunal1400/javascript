/**
* Replace all illegal character and spaces from file name except .
* https://stackoverflow.com/questions/13020246/remove-special-symbols-and-extra-spaces-and-replace-with-underscore-using-the-re
**/
const fixFileName = ( str ) => {
	return str.replace(/[^A-Z0-9.]+/ig, "_");
}

/**
* Get base64 mimetype
**/
const base64MimeType = (encoded) => {
  var result = null;

  if (typeof encoded !== 'string') {
    return result;
  }

  var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

  if (mime && mime.length) {
    result = mime[1];
  }

  return result;
}

/**
 * 
 * @param {*} file - File object
 * @param {*} returnType - base64, arrayBuffer, BinaryString, text
 * @param {*} cb - cb function with return type and data
 */
function PreviewFile( file, cb, returnType='base64' ) {
    let preview = null    
    const reader = new FileReader();

    reader.addEventListener("load", () => {        
        cb({ [returnType]: reader.result})
    }, false);  

    switch ( returnType ) {
        case 'base64':
            reader.readAsDataURL(file);
        break;

        case 'arrayBuffer':
            reader.readAsArrayBuffer(file);
        break;

        case 'binaryString':
            reader.readAsBinaryString(file);
        break;

        case 'text':
            reader.readAsText(file);
        break;

        default:
            reader.readAsDataURL(file);
        break;
    }
}
