/**
 * Destructure array
 **/
{
    let user = {}
    let arr = ["John", "Smith"];
    let [firstName, surName] = arr;
    [user.firstName, user.surName] = arr;
    console.log(firstName, surName, user);
}
{
    let [firstName, surName] = "John Smith".split(' ');
    console.log(firstName, surName);
}
{
    let [firstName, ,title, ...peoples] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    console.log(firstName, title, peoples);
}
{
    let [a,b,c] = "abcdefgh";
    console.log(a,b,c);
}
{
    let [a,b,c] = new Set([1,2,3,4,5,6]);
    console.log(a,b,c)
}

/**
 * Destructure object
 **/
let options = {
    title: "Menu",
    width: 100,
    height: 200,
    items: ["Cake", "Donut"],
  };
  
  let {title, width, items:[cake, donut]} = options;
  console.log(title, width, cake, donut);
  
  let {title: Title, ...otherObj} = options;
  console.log(Title, otherObj);