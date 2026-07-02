// Immediatly Invoked Function Expression (IIFE)

(function chai () {
    //named iffe
    console.log(`DB CONNECTED`);
})();  // yaha last me semicolon lagan chahiye 

// (first parenthesis me function ki definition)(execution call ke liye h ye )

// ()()

// by using arrow function 

( (name) => {

    // ye unnamed iffe hai 
    console.log(`DB CONNECTED TWO ${name}`);
}) ('sahil')

