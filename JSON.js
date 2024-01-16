/**
 * stringify primitive values in JSON
 */
console.log( JSON.stringify(1) ) // 1
console.log( JSON.stringify('test') ) // "test"
console.log( JSON.stringify(true) ); // true
console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/**
 * Methods, symbolic keys and non-enumerable properties are skipped
 */
let user = {
  sayHi() { // ignored
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};
console.log( JSON.stringify(user) );

/**
 * Converting circular structure to JSON 
 */
let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};
meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup)); 
  

/**
 * Replacer array - To pickup only specific keys
 */
let room = {
    name:"Sweet room",
    number: 23
}
let meetUp = {
    title: "Conference",
    persons:[{
        name: 'kunal', 
        age:32,
        parent: {
            name: "M"
        }
    }, 
    {
        name: 'malviya', 
        age:23
    }],
    salaries:[200,300,350],
    room
}

// Replacer array
console.log(JSON.stringify(meetUp, ['title','persons','room', 'salaries', 'name']))

// Indentation of 2
console.log(JSON.stringify(meetUp, null, 2));


/**
 * JSON PARSING
 **/
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

/**
 * Normal parsing
 **/
let parsedJson = JSON.parse(str);
console.log(parsedJson);
// Here we get error because data is string not a Date object
// console.log(parsedJson.date.getDate());

/**
 * Parsing with reviewer
 **/
let parsedReviewJson = JSON.parse(str, function(key, value){
    if(key == 'date') {
        return new Date(value)
    } else {
        return value;   
    }
});
console.log(parsedReviewJson);
console.log(parsedReviewJson.date.getDate());