import './style.css'

const numberOfCupsOfCoffee = 1
const fullName = 'Nam Pham'

console.log(
  `I, ${fullName}, drink ${numberOfCupsOfCoffee} cup of coffee a day.`
)

const aboutMe = {
  fullName: 'Nam Pham',
  luckyNumber: 7,
  favoriteMovies: [
    'The Dark Knight',
    'The Shawshank Redemption',
    'The Grand Budapest Hotel',
  ],
}

console.log(`My favorite movies are ${aboutMe.favoriteMovies}`)

const userName = window.prompt('Enter your name')
console.log(`Hello ${userName}! Welcome to the program!`)

const firstOperand = parseFloat('' + window.prompt('Enter the first operand'))
const secondOperand = parseFloat('' + window.prompt('Enter the second operand'))

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}`)
console.log(
  `The difference of ${firstOperand} and ${secondOperand} is ${difference}`
)
console.log(`The product of ${firstOperand} and ${secondOperand} is ${product}`)
console.log(
  `The quotient of ${firstOperand} and ${secondOperand} is ${quotient}`
)
console.log(
  `The remainder of ${firstOperand} divided by ${secondOperand} is ${remainder}`
)
