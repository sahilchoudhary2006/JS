//  for loop

// for (let i = 0; i <= 10 ; i++) {
//     const element = i ;

//     if (element == 5) {
//         console.log("5 is best number")
//     }
//      console.log(element); 
     
     
// }

// console.log(element) abb yaha valid nahi h ye kyuki upar for loop ke andar hi h valid 


// for (let i = 0; i <= 10 ; i++) {

//     console.log(`outer loop value : ${i}`)
//     for (let j = 0; j <=5 ; j++) {
//         // console.log(`inner loop value ${j} and inner loop ${i}`)
//            console.log(i + '*' + j + '=' + i * j)
//     }
    
// }


// let myArray = ["flash", "batman", "superman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
    
// }

//  break and continue keyword 

for (let index = 0; index <= 20; index++) {

    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of index is ${index}`);
    
}