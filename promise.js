/* 
    Promises are special js objects. 
    proper communication b/n producer and consumer  is called promise.
    producer will generate the promise. consumer will consume the promise.
    producer will create promises by using "promise" call.

    consumer consume the promises two ways :

        1. then();
        2. async & await;

        syntaax ;- 

        let promise1 = new promise((resolve,reject) =>{
            resolve("i will give you 500")
        })

        // if promise fullfill it will return resolve.
        // if promise not fullfill it will return reject.
*/

let askMoney = new Promise((resolve, reject) => {
    resolve("I will give you 500/-")
})

askMoney.then(
    (sucess) => {
        console.log(sucess)
    },
    (error) => {
        console.log("i dont have money")
    }
)
//I will give you 500/-


let returAmount = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("i will return in 1 month")
    }, 5000)
})

returAmount.then((suceessMsg) => {
    console.log(suceessMsg)
},
    (errorMsg) => {
        console.log(errorMsg)
    }
) ///---> i will return in 1 month




// expamle 3 calling multiple promises at one time
let promise1 = new Promise((resolve, reject) => {
    resolve("Hello srinivas")
})

let promise2 = new Promise((resolve, reject) => {
    resolve("Good Morning")
})

let promise3 = new Promise((resolve, reject) => {
    resolve("How are you")
})

Promise.all([promise1, promise2, promise3]).then((sucMsg) => {
    console.log(sucMsg)
}, (errors) => {
    console.log(errors)
})


// all settteld to call the promise one by one

Promise.allSettled([promise1, promise2, promise3]).then((sucMsg) => {
    console.log(sucMsg)
}, (errors) => {
    console.log(errors)
})
