// grab an HTML element
const output = document.getElementById("output");

// test data to use the first argument for the makeListFromArray() function
const notArray = 77;
const tooSmallArray = ["Jessica"];
const okayArray = ["Jessica", "Joel", "Bryan", "Oliver"];

// run the makeListFromArray() function from function.js
let function_results = "";



/* try invalid parameter data */
// not an array
output.innerHTML += "<h2>Providing invalid parameter (not an array)</h2>";
function_results = makeListFromArray(notArray);
output.innerHTML += function_results;

// too small array
output.innerHTML += "<h2>Providing invalid parameter (array is too small)</h2>";
function_results = makeListFromArray(tooSmallArray);
output.innerHTML += function_results;

// can only make ul or ol list
output.innerHTML += "<h2>Providing invalid parameter (can only make 'ul' or 'ol' list)</h2>";
function_results = makeListFromArray(okayArray, "cheeseburger");
output.innerHTML += function_results;



/* try valid parameter data */
// ul
output.innerHTML += "<h2>Providing valid parameter, using default second parameter for list type 'ul'</h2>";
function_results = makeListFromArray(okayArray);
output.innerHTML += function_results;

// ol
output.innerHTML += "<h2>Providing valid parameter array with second parameter of 'ol' instead of 'ul'</h2>";
function_results = makeListFromArray(okayArray, "ol");
output.innerHTML += function_results;



/* run the function, capture the return */
function makeListFromArray( firstParam, secondParam = "ul" ){
    // prepare a string we can build for return
    let function_output = "";

    /* To Do List
    - validate all incoming parameters
    - build an HTML list as a concatenated string for "function_output"
    */
    //invalid
    if ( firstParam != okayArray && firstParam != tooSmallArray ){
        return "<p>Error: This function requires an array</p>";
    }else if ( firstParam != okayArray && firstParam != notArray ){
        return "<p>Error: Array must contain at least two items or more</p>";
    }else if ( firstParam === okayArray && secondParam !== "ul" && secondParam !== "ol" ){
        return `<p>In HTML only UL or OL lists can be made. There is no '${secondParam}' HTML list </p>`;
    }

    // valid
    okayArray.sort();

    if ( firstParam === okayArray && secondParam === "ul" ){
        function_output += "<ul>";
        for ( i = 0; i < okayArray.length; i++){
            function_output += `<li>${okayArray [i]}</li>`;
        }
        function_output += "</ul>";
    }else if ( firstParam === okayArray && secondParam === "ol"){
        function_output += "<ol>";
        for ( i = 0; i < okayArray.length; i++){
            function_output += `<li>${okayArray [i]}</li>`;
        }
        function_output += "</ol>";
    }else {
        return `<p>Please write the correct parameters</p>`;
    }

    // return the string to the invoking instruction
    return function_output;
} 
