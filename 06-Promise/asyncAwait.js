/**
 * Async/await
 **/
async function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("iliakan"), 2000))
}
 
{
    let data;
    (async function(){
        data = await fetchData();
    })();
    if(data) {
        return data;
    }    
}
 
/**
* Call async function without making it async
**/
function f() {
  fetchData().then(e => console.log(e))
}

console.log(f())
 
 
