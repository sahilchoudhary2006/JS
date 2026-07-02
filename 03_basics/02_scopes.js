let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30 
    console.log("Inner block me a : ", a) //
}

console.log(a);//
// console.log(b);
// console.log(c);  //Yahan c ko if block ke andar declare kiya, phir bhi bahar access kar pa rahe hain. Kyunki var block scope follow nahi karta.

function one () {
    const username = "sahil"

    function two () {
        const website = "youtube"
        console.log(username);
      console.log(website);
    }

   

    two();
}

// one();

if (true) {
    const username = "sahil"
    if (username === "sahil") {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)


// ************ INTRESTING ************** //

function  addone(num) {
    return num + 1;
    
}

console.log(addone(5));


const addTwo = function(num) {
    return num + 2;
}

addTwo(5);