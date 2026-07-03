// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item;
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNUms = myNums.filter( (num)=> {
//     return num >4 
// })

//yaha thoda logics lagana pada 

const newNUms = []

myNums.forEach ( (num) => {
    if (num > 4) {
        if (num >4 ) {
            newNUms.push(num)
        }
    }
})

console.log(newNUms);

