function sayMyName () {
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName();

// function addTwoNums(number1, number2) {  // yaha jo bhi () ke andar h toh inko paramters bolte h 
//     console.log(number1 + number2);
    
// }

function addTwoNums(number1, number2) {  // yaha jo bhi () ke andar h toh inko paramters bolte h 
    
    // let answer = number1+number2;
    // console.log(answer)
    return number1 + number2;

    
}

const result =  addTwoNums(3,4);// // aur jo yaha () ke andar h unko argumnet bolte hai 

// console.log("result: ",result);


function loginUser (username="sam") {

    if(username === undefined) {
        console.log("please enetr a username")
        return;
    }
     return `${username} just logged in !`
}

// console.log(loginUser("Sahil"));

// console.log(loginUser("sahil"));


function calculateCartPrice(...num1) {
    return num1;

}

console.log(calculateCartPrice(200,400,500));  //jab bahut saari values aaye tab we use rest operator 

const user = {
    usrname : "sahil",
    price: 199
}

function handleObject (anyobject) {
    console.log(`username is ${anyobject.usrname} and price is ${anyobject.price}`)
}

handleObject(user);