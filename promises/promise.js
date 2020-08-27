<<<<<<< HEAD
// this function returns a promise
// it checks to see if a number is even
// if it is even the promise resolves.
// if it is odd the promise rejects.
function isEven(number) {
   
    // create a promise
    let prom = new Promise((resolve, reject) => {

        // number is in scope even though we are in a 
        // different function

        // check is number is even by using modulas operator
        if (number % 2 === 0) {
            resolve(`The number ${number} is even.`)
        } else {
            reject(`The number ${number} is odd.`)
        }
    })

    return prom
}

=======
// this function returns a promise
// it checks to see if a number is even
// if it is even the promise resolves.
// if it is odd the promise rejects.
function isEven(number) {
   
    // create a promise
    let prom = new Promise((resolve, reject) => {

        // number is in scope even though we are in a 
        // different function

        // check is number is even by using modulas operator
        if (number % 2 === 0) {
            resolve(`The number ${number} is even.`)
        } else {
            reject(`The number ${number} is odd.`)
        }
    })

    return prom
}

>>>>>>> 64c7c72f04403c1740e3e1858a9f65b8f96a0d95
module.exports.isEven = isEven