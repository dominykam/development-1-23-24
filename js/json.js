console.log("%cJS - JSON", "font-size: 24px; font-weight: bold");

// JSON
/* 
    stands for JavaScript Object notation and is a way for applications/programming languages to
    communicate with eachother.
    Because every language has their own syntax it is not possible to communicate with another
    programmig language, unless it that programming language has a conversion built in that
    converts it's syntax to another. This is not really handy, because it means that every
    programming language need to have knowledge of all other programming languages in order
    to communicate.
    That's why there is the need for a common language, something that all languages can interpret
    and that preferable isn't prone to too many changes. JSON has become the most commonly used
    format on the web to do that
    There are other formats like XML (sibling of HTML), which are used frequently too, although
    on the web we use JSON
*/

// JSON has a limited amount of value types:
/*
    Number
    String
    Boolean
    Array
    Object
    null 
*/

/* JSON is a bit less forgiving that JavaScript object notation, but it's still very
    similar
    Some key principles:
        - In the JSON data format, the keys must be enclosed in double quotes.
        - The key and value must be separated by a colon (:) symbol.
        - There can be multiple key-value pairs. Two key-value pairs must be separated 
            by a comma (,) symbol.
        - No comments (\/\/ or /* *\/) are allowed in JSON data. (But you can get 
            around that, if you're curious.)
*/


// JSON is always a string, meaning that it needs to be interpreted/parsed by JS first:

let peopleFromAPIJsonString = '[{"name": "Alex C","age": 2,"city": "Houston"},{"name": "John G","age": 40,"city": "Washington"},{"name": "Bala T","age": 22,"city": "Bangalore"}]';

let peopleFromAPI = JSON.parse(peopleFromAPIJsonString);

console.log(peopleFromAPI);

// You can validate your JSON by using the JSON linter: https://jsonlint.com/

// Sometimes your JavaScript will receive JSON strings which it then needs to interpret
// But the other way around can also happen: you need to send JSON to an application
// In that case, you will need to convert a JS object to a JSON string

// Luckily there's also a function for that:

let peopleFromJsObject = [
        {
            "name": "Alex C",
            "age": 2,
            "city": "Houston"
        },
        {
            "name": "John G",
            "age": 40,
            "city": "Washington"
        },
        {
            "name": "Bala T",
            "age": 22,
            "city": "Bangalore"
        }
    ];

let peopleFromJsObjectStringified = JSON.stringify(peopleFromJsObject);

console.log(peopleFromJsObjectStringified);

// Exercise
// Merging JSON (ie. local config + config from DB)
// Create an array that contains objects with the following properties: name, email
// Create JSON string that has the same structure as the array. This means that it 
// contains objects with the same properties: name, email
// Each array (JS array and the JSON string) need to contain some example data.
// The goal is to merge these two together.

let  localConfig = [
    {
        name: "Pascal",
        email: "pascal@thomasmore.be"
    },
    {
        name: "Jha",
        email: "jha@thomasmore.be"
    }
];

let configFromDbJsonString = '[{"name":"Andrea","email": "andrea@thomasmore.be"},{"name": "Filip","email": "filip@thomasmore.be"}]';

let configFromDb = JSON.parse(configFromDbJsonString);

let mergedConfigs = localConfig.concat(configFromDb);

console.log(mergedConfigs);

// Additional exercise
// Create a JSON string that is an array, which has the same kind of objects 
// as above, the only difference is that the 'name' property is now called surname
// Try to find a way to merge both the JS and JSON array.
let  localConfigEx2 = [
    {
        name: "Pascal",
        email: "pascal@thomasmore.be"
    },
    {
        name: "Jha",
        email: "jha@thomasmore.be"
    }
];

let configFromDbJsonStringEx2 = '[{"surname":"Andrea","email": "andrea@thomasmore.be"},{"surname": "Filip","email": "filip@thomasmore.be"}]';

let configFromDbEx2 = JSON.parse(configFromDbJsonStringEx2);

let configFromDbEx2Converted = convertUserObject(configFromDbEx2);

// Converts objects containing 'surname' key to 'name' key.
function convertUserObject(userObject)
{
    let containerArray = [];

    for (let user of userObject)
    {
        containerArray.push(
            {
                name: user.surname,
                email: user.email
            }
        )
    }

    return containerArray;
}

let mergedConfigsEx2 = localConfig.concat(configFromDb);

console.log(mergedConfigsEx2);