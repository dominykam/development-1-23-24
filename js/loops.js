console.log("%cJS - LOOPS", "font-size: 24px; font-weight: bold");

// For loop
for( let number = 0; number < 10; ++number )
{
    console.log(number);
}


// Exercise
// Goal: print the tables of multiplications from 1 tot 9 to the console in the following format:
// the table of 1: 1 - 2 - 3 - 4 - ... - 9
// the table of 2: 1 - 4 - 6 - 8 - ... - 18
// ...
// the table of 9: 9 - 27 - 36 - 45 - ... - 81
// FORMAT: the table of (table): (multiplication) - (multiplication)

// You have to use nested for loops to do this
// Create an array that will contain the multiplications of a specific table
// Then you print the result for every table and it is formated like this: the table of 2: 1 - 4 - 6 - 8

// Tip: start with the outer for loop. Try to print out the following:
// the table of 1:
// the table of 2:
// ...
// the table of 9:
// If that works, you can add the nested for-loop

// Outer loop iterates through tables from 1 to 9
for (let table = 1; table <= 9; ++table) {

    let newLine = [];

    // Inner loop iterates through multiplications from 1 to 9
    for (let multiplier = 1; multiplier <= 9; multiplier++) {
        const product = table * multiplier;
        newLine.push(product);
    }

    console.log(`the table of ${table}: ${newLine.join(' - ')}` ); // Print table header
}

// For loop to loop over arrays (not recommended, but possible)
let classNames = ["Andrea", "Laura", "Petra", "Martin"];

for ( let classNameKey = 0; classNameKey < classNames.length; ++classNameKey )
{
    console.log(`Key: ${classNameKey}, value: ${classNames[ classNameKey ]}`);
}

// foreach
// The first parameter passed in the parameter list is ALWAYS the value of the array/object
// the second parameter passed in the parameter list is ALWAYS the key of the array/object AND 
classNames.forEach( (value, key) => {
    console.log(`key: ${key}, value: ${value}`);
})

console.log("shorthand for notation to loop over arrays and objects");
console.log("array");

// Shorthand for notation
// Recommended for both arrays and objects
for (var key in classNames)
{
    console.log(`key: ${key}, value: ${classNames[key]}`);
}

console.log("object");
// Use shorthand for to loop over objects
var classObject = {
    teacher: "Pascal",
    students: ["Andrea", "Laura", "Petra", "Martin"],
    beamer: true
}

for (var key in classObject)
{
    console.log(`key: ${key}, value: ${classObject[key]}`);
}

// Exercise
// Create an object called classObject
// Add the following properties: teacher (string), students (array with strings), beamer (boolean). You can add more if you feel like it
// Print out the object in the console in the following format:
// key: (object key), value: (object value)

// Loop over the students array inside of the classObject and print out every one's name in the console



// while

// do while