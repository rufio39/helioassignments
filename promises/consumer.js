<<<<<<< HEAD
// this consumes a promise
let { isEven } = require('./promise')

let prom1 = isEven(8)

// if the promise resolves then use the "then" function
// of the promise to get the value
// then calls a function, that you define, that accepts
// a single parameter. the value of the promise is
// passed into that parameter
prom1
    .then((value) => {
        console.log(value)
    })

let prom2 = isEven(45)

prom2
    .then((value) => {
        // then gets the value from the resolve function call
        console.log(value)
    })
    .catch((err) => {
        // catch gets the value from the reject function call
        console.log(err)
    })

// async and await
// await keyword must be used in a async function   
async function wait() {

    let answer = await isEven(42)

    console.log(answer)
}

async function waitError() {

    try {
        let answer = await isEven(47)
        console.log(answer)
    }
    catch (error) {
        console.log(error)
    }
}

// calling the async function
wait()
waitError()

// third built in function.
// .finally() 
isEven(16)
.then(resValue => {
    console.log(resValue)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    // this function is called if the promise is resolved or rejected
    // is is called last.
    console.log("cleanup")
=======
// this consumes a promise
let { isEven } = require('./promise')

let prom1 = isEven(8)

// if the promise resolves then use the "then" function
// of the promise to get the value
// then calls a function, that you define, that accepts
// a single parameter. the value of the promise is
// passed into that parameter
prom1
    .then((value) => {
        console.log(value)
    })

let prom2 = isEven(45)

prom2
    .then((value) => {
        // then gets the value from the resolve function call
        console.log(value)
    })
    .catch((err) => {
        // catch gets the value from the reject function call
        console.log(err)
    })

// async and await
// await keyword must be used in a async function   
async function wait() {

    let answer = await isEven(42)

    console.log(answer)
}

async function waitError() {

    try {
        let answer = await isEven(47)
        console.log(answer)
    }
    catch (error) {
        console.log(error)
    }
}

// calling the async function
wait()
waitError()

// third built in function.
// .finally() 
isEven(16)
.then(resValue => {
    console.log(resValue)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    // this function is called if the promise is resolved or rejected
    // is is called last.
    console.log("cleanup")
>>>>>>> 64c7c72f04403c1740e3e1858a9f65b8f96a0d95
})