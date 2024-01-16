//  finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const findLongestWord =(str) => {
    let longestLength=0, longestWord="";
    str.split(" ").forEach(item => {
        if(item.length > longestLength) {
            longestLength = item.length;
            longestWord = item
        }
    })
    return longestWord;
}

let op = findLongestWord('Web Development Tutorial');
console.log(op);