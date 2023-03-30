// function ClasificarVolumen(valor) {
//   let volumen;
//   switch (valor) {
//     case 1:
//       volumen = "El volumen esta bajo";
//       break;
//     case 2:
//     case 3:
//       volumen = "El volumen es intermedio";
//       break;
//     case 4:
//     case 5:
//       volumen = "El volumen es alto";
//       break;
//   }
//   return volumen;
// }
// console.log(ClasificarVolumen(1));
// function seleccionarIdioma(valor) {
//   var idioma;
//   switch (valor) {
//     case 1:
//       idioma = "Espanol";
//       break;
//     case 2:
//       idioma = "Aleman";
//       break;
//     case 3:
//       idioma = "Italiano";
//       break;
//     default:
//       idioma = "Ingles";
//       break;
//   }
//   return idioma;
// }
// console.log(seleccionarIdioma());

// Retornar Booleanos
// function esMenorQue(a, b) {
//   // if(a < b){
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return a < b;
// }
// console.log(esMenorQue(5, 6))
// Patron de retorno anticipado
// despues de un return no se ejecuta nada mas despues de este
// function calcularRaizCuadrada(num) {
//   if (num < 0) {
//     return undefined; //se evalua aca para que corte si es un numero negativo
//   } else {
//     return Math.sqrt(num);
//   }
// }
// console.log(calcularRaizCuadrada(9));

// OBJETOS

// Conteo Cartas BlackJack

let count = 0

function countCard (button) {
  const value = button.innerText
  switch (parseInt(value)) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++
      break
    case 10:
      count--
      break
    default:
      if (value === 'Q' || value === 'A' || value === 'K' || value === 'J') {
        count--
      }
      break
  }
  const response = document.getElementById('respuesta')
  if (count <= 0) {
    response.innerText = count + ' Hold'
  } else {
    response.innerText = count + ' Bet'
  }
}
// var counter = document.getElementById("counter");
// counter.innerText = "Counter " + count;
// console.log(countCard(7));
// console.log(countCard(2));
// console.log(countCard("Q"));
// console.log(countCard(4));
// console.log(count);

// let num2 = 0;
// num2 = parseInt(document.getElementById("second-number", value));

function simpleCalculator () {
  const num1 = parseInt(document.getElementById('first-input').value)
  const num2 = parseInt(document.getElementById('second-input').value)
  const operator = document.getElementById('operator').value
  // return console.log(operator);
  let result = 0
  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '/':
      result = num1 / num2
      break
    case '*':
      result = num1 * num2
      break
  }

  const response = document.getElementById('results')
  response.innerHTML = 'The result is: ' + result
}

// Fizz-Buzz Exercise
function printFizzBuzz () {
  let answer = ''

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      answer = answer + 'FizzBuzz, '
    } else if (i % 3 == 0) {
      answer = answer + 'Fizz, '
    } else if (i % 5 == 0) {
      answer = answer + 'Buzz, '
    } else {
      answer = answer + i + ', '
    }
  }
  respuesta = document.getElementById('print-space')
  return (respuesta.innerHTML = answer)
}
// console.log(printFizzBuzz(1));

// Factorial of a number

function factorialOfNumber () {
  let answer = 1
  const num = document.getElementById('factorial-number').value
  for (let n = num; n > 0; n--) {
    answer = answer * n
  }
  respuesta = document.getElementById('factorial-answer')
  return (respuesta.innerHTML = 'The factorial of ' + num + ' is: ' + answer)
}
// console.log(factorialOfNumber(6));

// Filter an array of objects
const data = [
  {
    name: 'Ramiro',
    Age: 30,
    Profession: 'CTO',
    Pet: 'cat'
  },
  {
    name: 'Esteban',
    Age: 29,
    Profession: 'Driver',
    Pet: 'Dog'
  },
  {
    name: 'Sergei',
    Age: 34,
    Profession: 'Student',
    Pet: 'Otter'
  },
  {
    name: 'Alexa',
    Age: 24,
    Profession: 'Journalist',
    Pet: 'cat'
  },
  {
    name: 'Stella',
    Age: 31,
    Profession: 'Journalist',
    Pet: 'Dog'
  },
  {
    name: 'Arthur',
    Age: 18,
    Profession: 'Student',
    Pet: 'Otter'
  },
  {
    name: 'Andrew',
    Age: 45,
    Profession: 'Mechanic',
    Pet: 'Jaguar'
  }
]

function filterArray () {
  const range = document.getElementById('select-filter').value
  let answer
  switch (range) {
    case '18to20':
      answer = data.filter(function (person) {
        return person.Age >= 18 && person.Age <= 20
      })
      break
    case '21to30':
      answer = data.filter(function (person) {
        return person.Age >= 21 && person.Age <= 30
      })
      break
    case '31to40':
      answer = data.filter(function (person) {
        return person.Age >= 31 && person.Age <= 40
      })
      break
    case '41+':
      answer = data.filter(function (person) {
        return person.Age > 40
      })
      break
  }
  // return console.log(JSON.stringify(answer)); //The JSON.stringify(object) transforms the array to JSON plain text, this is how we receive the info from some API's
  const respuesta = document.getElementById('filter-array-answer')
  return (respuesta.textContent =
    'This are the people that meet the requirements: ' +
    JSON.stringify(answer, null, 2))
}

// change color of a text
const colors = ['red', 'blue', 'orange', 'yellow', 'green', 'magenta', 'cyan']

function changeTextColor () {
  const text = document.getElementById('text-to-change')
  return (text.style.color = colors[Math.floor(Math.random() * colors.length)])
}

// Fetch the Chuck norris facts API from rapidAPI web
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': 'ddbdd8b73bmsh8693dc1e4df9e72p1265a1jsn1fe5d932ac06',
    'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
  }
}
function fetchApi () {
  fetch(
    'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    options
  )
    .then((response) => response.json())
    // .then((response) => JSON.stringify(response, null, 2))
    .then(
      (response) =>
        (document.getElementById('api-response').textContent = response.value)
    )
    .catch((err) => console.error(err))
}
// import { add, subtract } from "./math.js";  //The way to import functions from a module in js

// console.log(add(2, 3)); // Output: 5
// console.log(subtract(5, 3)); // Output: 2

// destructuring
const books = [
  {
    title: 1984,
    author: 'George Orwell',
    year: 1949,
    genre: 'science fiction'
  },
  {
    title: 'Asi es la puta vida',
    author: 'Jordi Wild',
    year: '2022',
    genre: 'anti self-help'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure'
  }
]
// var [book1, book2, book3] = books;
let bookList = ''
function getBookInfo ({ title, author }) {
  const answer = `${title} write by ${author}`
  bookList += answer + '<br>'
}

function getBooksList () {
  books.forEach(getBookInfo)
  // return console.log(bookList);
  const respuesta = document.getElementById('info-books-answer')
  return (respuesta.innerHTML = bookList)
}
