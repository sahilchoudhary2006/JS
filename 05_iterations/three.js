// // for of loop

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [1,2,3,4,5,6,7,8,9]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "hello world!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


// // Maps 

// // const map = new Map()
// // map.set('IN , India')
// // map.set('USA, undited states of america')

// // // console.log(map);

// // for (const [key, value] of map) {
// //     console.log(key);
// // }

// // const myObject = {
// //     'game1': 'NFS',
// //     'game2': 'spiderman'
// // }

// const myObject = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "rubyy",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
    
// }


//For Each loop 

const coding = ["js","ruby", "java", "puthon", "cpp"]

// coding.forEach(function (item) {
//     console.log(item)
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item), indexedDB, arr => {
//     ciosnole.log(item, index, arr)
// })  

const myCoding = [
    {
        languageNAme: "javscirpt",
        languageFileNAme: "js"
    },
    {
        languageNAme: "javscirpt",
        languageFileNAme: "js"
    },
    {
        languageNAme: "javscirpt",
        languageFileNAme: "js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageNAme)
})