const promiseOne = new Promise(function (resolve, reject) {
    //Dp an sync task
    //DB calls, cryptography, network call

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function() {
    console.log("promise consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
     resolve({username: "chai", email: "chai@gmail.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "SAhil", password: "123"})
        } else {
            reject('Error: Something went wrong')
        }
    },1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error) {
    console.log(error);
}).finally(() => console.log("THe promise is either resolved or rejetcted"))


// now promise by sync await


const promiseFive = new Promise(function(resolve, reject) {

     setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: js went wrong')
        }
    },1000)
   
})

async function consumePromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);

    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


//**********************************************8 */
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

