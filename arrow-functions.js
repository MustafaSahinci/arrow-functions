/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumber(a, b) {
    return a + b
}

let sum = addTwoNumber(4, 4)
console.log(sum)
// Arrow Function With Parameters
const adddTwoNumber = (a, b) => {
    return a + b
}

let summ = addTwoNumber(4, 4)
console.log(summ)
// Single Line Arrow Function With Parameters
const adddTwoNumber2 = (a, b) => a+b

let sum2 = adddTwoNumber2(3,3)
console.log(sum2)
// Implicit Returns
const saySomething = message => console.log(message)

saySomething("hello je moeder")

const hello = () => console.log("hello")
hello()
// Returning Multiple Lines
const moreLines = () => (
    `<p>
        this is a multiline string1
    </p>`
)
console.log(moreLines())