const user = {
    userName: "Sahil",
    price : 199,

    welcomeMessge: function () {
        console.log(`${this.userName}, welcome to the website `);
        // console.log(this);
    }
}

user.welcomeMessge()
user.userName = "Sam"
user.welcomeMessge()

console.log(this);   // this will give empty object

// function chai () {
    // console.log(this);
// }

// chai();


// const chai = function () {
    //     let username = "sahil"
    //     console.log(this.username)
    // }
    // chai();
    
    // Through arrow function 
    
const chai =  () => {      // simple a jese ham normal fucntion banate h vese hi h sabkuch
    let username = "sahil" //bass dekho function ko hataya aur () iske aage ek arrow => bana diya simple 
    console.log(this)
}

// chai();


// now arrow fucntion 

() => {}   //arrow fucntion 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4))


// second way implict retun jisme currly bracket hata dete h 

const addTwo = (num1, num2) => (num1 + num2) ;  // ye bhi hai kyuki ek hi line ka code h 

//agar currlyy bracket use karte hai toh retun use karna padega 
//otherwise agar simple bracket me likhte h yaani prenathsesi toh usme return nahi likhna 

console.log(addTwo(3,4))

