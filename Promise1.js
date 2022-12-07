// Async Await

let add =(number)=>{
    return new Promise((res, rej)=>{
        res(number +5)
    })
}

let sub = (number) =>{
    return new Promise((res, rej) => {
        res (number - 2)
    })
}

let mul = (number) =>{
    return new Promise((res, rej) => {
        res(number*5)
    })
}

let div = ( number)=>{
    return new Promise((res, rej) =>{
        res(number/2)
    })
}

async function calc() {
    let addResponse = await add(10);
    let subResponse = await sub(addResponse);
    let mulResponse = await mul(subResponse);
    let divResponse = await div(mulResponse);
    console.log(addResponse, subResponse, mulResponse, divResponse)
}
//calc() --->   15 13 65 32.5


// if i used IIFE function

(async ()=>{
    let addResult = await add(10);
    let subResult = await sub(addResult);
    let mulResult = await mul(subResult);
    let divResult = await div(mulResult);
    console.log(addResult, subResult, mulResult, divResult)
})()

//15 13 65 32.5


