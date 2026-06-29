const accountId = 144332
let accountEmail = "sahil@gmail.com"
var accountPassword = "123456"  //ye use nahi karna 
accountCity = "Jaipur" // we can aslo decalre like this way but this is not good practice 
let accountState;   //It will return undefined 

//  accountId = 12345   this is not allowed beacuse accountId is a const

accountEmail = "SC"
accountPassword = "121212"
accountCity = "bengluru"

console.log(accountId)

/*
prefer not to use var 
Beacuse of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])