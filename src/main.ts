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

function _map<TSource, TResult>(
  sourceArray: Array<TSource>,
  func: (element: TSource) => TResult
): Array<TResult> {
  const answer: Array<TResult> = []
  sourceArray.forEach((element) => answer.push(func(element)))
  return answer
}

const numbers = [1, 2, 3, 4, 5]
const strings = ['one', 'two', 'three', 'four', 'five']

const doubled = _map(numbers, function (number) {
  return number * 2
})

const increased = _map(numbers, function (number) {
  return number + 2
})

console.log('Using map to double: ' + doubled)
console.log('Using map to increase: ' + increased)

const uppered = _map(strings, function (string) {
  return string.toUpperCase()
})

console.log('Using map to make strings uppercase: ' + uppered)

// function _filter(
//   numbers: number[],
//   func: (number: number) => boolean
// ): number[] {
//   const answer = [0]
//   numbers.forEach((number) => {
//     if (func(number)) {
//       answer.push(number)
//     }
//   })
//   answer.splice(0, 1)
//   return answer
// }

function _filter<TSource>(
  sourceArray: TSource[],
  func: (element: TSource) => boolean
): TSource[] {
  const answer: TSource[] = []
  sourceArray.forEach((number) => {
    if (func(number)) {
      answer.push(number)
    }
  })
  return answer
}

const numbersFiltered = _filter(numbers, function (number) {
  return number > 3
})

const stringsFiltered = _filter(strings, function (string) {
  return string === 'three'
})

console.log('Using filter to get numbers > 3: ' + numbersFiltered)
console.log('Using filter to three: ' + stringsFiltered)

// function _reduce(
//   numbers: number[],
//   func: (total: number, number: number) => number,
//   initialValue: number
// ): number {
//   let answer = initialValue
//   numbers.forEach((number) => (answer = func(answer, number)))
//   return answer
// }

function _reduce<TSource, TReduced>(
  numbers: TSource[],
  func: (total: TReduced, number: TSource) => TReduced,
  initialValue: TReduced
): TReduced {
  let answer = initialValue
  numbers.forEach((number) => (answer = func(answer, number)))
  return answer
}

const numbersReduced = _reduce(
  numbers,
  function (total, number) {
    return total + number
  },
  0
)

const stringsTotalLetters = _reduce(
  strings,
  function (numberOfLetters, string) {
    return numberOfLetters + string.length
  },
  0
)

console.log('Using reduce to get the sum of an array: ' + numbersReduced)
console.log(
  'Using reduce to get the the total number of letters in an array: ' +
    stringsTotalLetters
)

// function _every(numbers: number[], func: (number: number) => boolean): boolean {
//   let flag = true
//   numbers.forEach((number) => {
//     if (func(number) === false) {
//       flag = false
//     }
//   })
//   return flag
// }

function _every<TSource>(
  numbers: TSource[],
  func: (number: TSource) => boolean
): boolean {
  let flag = true
  numbers.forEach((number) => {
    if (func(number) === false) {
      flag = false
    }
  })
  return flag
}

const numbersEvery = _every(numbers, function (number) {
  return number < 2
})

const stringsEvery = _every(strings, function (string) {
  return string === 'three'
})

console.log('Using every to check if all numbers are < 2: ' + numbersEvery)
console.log('Using every to check if all strings are three: ' + stringsEvery)

// function _some(numbers: number[], func: (number: number) => boolean): boolean {
//   let flag = false
//   numbers.forEach((number) => {
//     if (func(number)) flag = true
//   })
//   return flag
// }

function _some<TSource>(
  numbers: TSource[],
  func: (number: TSource) => boolean
): boolean {
  let flag = false
  numbers.forEach((number) => {
    if (func(number)) flag = true
  })
  return flag
}

const numbersSome = _some(numbers, function (number) {
  return number < 2
})

const stringsSome = _some(strings, function (string) {
  return string === 'three'
})

console.log('Using some to check if there is a number < 2: ' + numbersSome)
console.log('Using some to check if there is a string three: ' + stringsSome)
