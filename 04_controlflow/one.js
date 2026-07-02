// if 
// const ifUserLoggedIn = true 
// const temperature = 41
// if (temperature == 50 ) {
//      console.log("less than 50")
// } else {
//     console.log("temperature is greter than 50")
// }

// const balance = 1000

// // if (balance> 500 ) {
// //     console.log("test")
// // }

// if (balance<500) {

//     console.log("less than");

// } else if(balance<750) {

//     console.log("less than 750");

// } else {

//     console.log("less than 1200");

// }


const userLoggedIn = true 
const debitcard = true
const loggedInFromGoggle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && (loggedInFromEmail || loggedInFromGoggle) ) {

    console.log("Allow to buy course")
    
}