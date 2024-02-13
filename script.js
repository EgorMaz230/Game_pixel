/* 
/* let myButton = document.querySelector('.button')
myButton.addEventListener('click', function () {
    let inputText = parseInt(document.querySelector('.inputText')).value;
    alert('Число це' + inputText)
    if (inputText > 10 && inputText <20) {
        alert('Число входить в діапазон від 10 до 20');
    }
    else {
        alert ('Число не входить в діапазон від 10 до 20');
    }
}) */

/*  let name 
let email 
let password 
 */

/* let month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));
if (month >= 1 && month <= 12) {
  if (month >= 3 && month <= 5) {
    alert("Весна");
  } else if (month >= 6 && month <= 8) {
    alert("Літо");
  } else if (month >= 9 && month <= 11) {
    alert("Осінь");
  } else {
    alert("Зима");
  }
} else {
  alert("Невірний номер місяця. Введіть число від 1 до 12.");
} */

/* function calculator(num1, num2, operator) {
let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      alert('Невірна операція');
      return;
  }

    alert('Результат: ' + result);
} */
/* alert("Підвердіть що ви тато");
let result = confirm("Ви тато?");

if (result == true) {
  alert("Дякую за підтвердження! Ласкаво просимо на сайт.");
} else {
  alert("Вам не дозволено вхід. Спробуйте перезавантажити сайт.");
} */
/* let myButton = document.querySelector('.button')
myButton.addEventListener('click' , function()  {

    let balance= parseInt(document.querySelector('.balance').value);
    let payment= parseInt(document.querySelector('.payment').value);
    alert('Вартість замовлення ' + payment + 'Перевіряємо кількість грошей на рахунку' )
    if (payment <= balance) {
        balance -= payment;
        alert('На вашому рахунку' + balance + 'коштів');
    }
    else {
        alert('Поповніть рахунок');
    }
})  
 */

/* let myButton = document.querySelector('.myButton');
let imageS1 = document.querySelector('.img-s1');
let imageS2 = document.querySelector('.img-s2')
myButton.addEventListener('click' , () => {
    if(imageS1.className === 'img-s1') {
      imageS1.classList.add('active');
    } else {
      imageS1.classList.remove('active');
    };
});
myButton.addEventListener('click' , () => {
  if(imageS2.className === 'img-s2') {
    imageS2.classList.add('active');
  } else {
    imageS2.classList.remove('active');
  };
});

let myBtn = document.querySelector('.myBtn');
let blocks = document.querySelectorAll('.block');

myBtn.addEventListener('click', () => {
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    let text = block.querySelector('p');
    let img = block.querySelector('.img');

    if (text.style.display === 'none') {
      text.style.display = 'block';
      img.style.display = 'none';
    } else {
      text.style.display = 'none';
      img.style.display = 'block';
    }
  }
}); */

/* let a = 0;
while (a < 10) {
    console.log(a);
    a+=1;
} */

/* let client = 34;
const maxClient = 57;

while(client < maxClient) {
    console.log(client)
    client+=1 ;
} */

/* let birth = 0;
let adult = 18;

while(birth<adult) {
  console.log(birth)
  birth+=1;
} */
/* const max = 10;

for (let i = 0; i<max;i += 1) {
  console.log(i);
} */

/* const numb = 3;
let sum = 0;

for (let i = 0; i <= numb; i+=1){
  sum+= i;
}
console.log(sum); */
/* let number = 10;

for (let i = 0; i < number; i += 1) {
  if (i === 5) {
      break;
  }
} */
/* for (let i=1; i<=50;i+=1 ){
  if (i % 2 !== 1) {
    console.log(i);
  }
}
for (let i = 1; i <= 50; i+= 2) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
 */

/* const number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(number*i);
} */

/* let number ;
do {
  number = parseInt(prompt('Введіть число більше 100 або натисніть відміна'));
}
while (isNaN(number) || number<= 100) {
  console.log(number)
} */

/* const triggerButton = document.querySelector('.triggerButton');
triggerButton.addEventListener('click' , () => {
  const employees = 10;
  let totalSalary = 0;
  for (let i = 0; i <= employees; i++)  {
    let salary = Math.floor(Math.random() * (5000 - 500 + 1) )+ 500;
    
    totalSalary+= salary
  }
  console.log(totalSalary)
}) */
/* 

const employees = 10;
let totalSalary = 0; 

for (let i = 0; i < employees; i++) {
   salary = Math.floor(Math.random() * (5000 - 500 + 1) + 500); 
  totalSalary += salary; 
}
console.log(totalSalary);
 */

/*  let amount = parseFloat(document.getElementById('amount').value);
  let months = parseInt(document.getElementById('months').value);
  let result = (document.getElementById('result').value);
  let button = (document.getElementById('button'));
if(months=>3 && months<=24) {
  button.addEventListener ('click', function calculateInstallment() {
  let interestRate = 2.99;
  
  let monthlyPayment = (amount / months) * (1 + interestRate / 100);
  
  document.getElementById("result").value = monthlyPayment.toFixed(2);
  })
}  */

/*  function calculateInstallment() {
  let amount1 = parseFloat(document.getElementById('amount').value);
  let months = parseInt(document.getElementById('months').value);
  let displayNumber3 = (document.getElementById('displayNumber3').value);
  let button = (document.getElementById('button'));

  let interestRate = 2.99;
  
  let monthlyPayment = (amount1 / months) * (1 + interestRate / 100);
  
  document.getElementById("displayNumber3").value = monthlyPayment.toFixed(2);
}

let sum = (document.querySelector('.sum'))
let myAmount = (document.querySelector('.amount'))
myAmount.addEventListener('click', () => {
  if (myAmount.className === 'amount' && sum.className === 'sum') {
    myAmount.classList.add('active');
    sum.classList.add('active');
}
else {
  myAmount.classList.remove('active');
  sum.classList.remove('active');
};
})

let month = (document.querySelector('.G_month'))
let amount2 = (document.querySelector('.G_month2'))
amount2.addEventListener('click', () => {
  if (amount2.className === 'G_month2' && month.className === 'G_month') {
    amount2.classList.add('active');
    month.classList.add('active');
}
else {
  amount2.classList.remove('active');
  month.classList.remove('active');
};
})
 */

/* let date = (document.querySelector('.G_date'))
let date2 = (document.querySelector('.G_date2'))
date2.addEventListener('click', () => {
  if (date.className === 'G_date' && date2.className === 'G_date2') {
    date.classList.add('active');
    date2.classList.add('active');
}
else {
  date.classList.remove('active');
  date2.classList.remove('active');
};
}) */
/* let myButton = document.querySelector('.myButton');
myButton.addEventListener('click', function (){
    let myName = document.querySelector('.name').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector ('.email').value;

if (
    myName.length < 3 || email.includes('@') || password.length < 8) {
    window.location.href = 'https://meet.google.com/hjn-beaa-oai';
}
else{
    alert('Помилка: Неправильно заповнені дані!');
}
}) */

/* let mass = [3, 7, 92];
mass[1] = 10;
console.log(mass);

let mass2 = ['first', 'second', 'three'];
mass2[3] = 'fourth';
console.log(mass2);

let mass3 = [33, 72, 97];
mass3[3] = mass3[0] + mass3[1] + mass3[2];
console.log(mass3);

let mass4 = [33, 72, 97, 56, 83];
for (var i = 0; i < mass4.length; i++) {
  console.log(mass4[i]); 
} */
/* let mass5 = ['first', 'second', 'threer','first', 'second'];
if(mass5[0].length > 5) {
    console.log(mass5[0]);
}
else {
  
}
if(mass5[1].length > 5) {
  console.log(mass5[1]);
}
else {

}
if(mass5[2].length > 5) {
  console.log(mass5[2]);
}
else {

}
if(mass5[3].length > 5) {
  console.log(mass5[3]);
}
else {

}
if(mass5[4].length > 5) {
  console.log(mass5[4]);
}
else {

} */

/* let mass6 = [3, 63, 91, 31, 7200, 24, 10, 55, 67, 124]
let maxNumber = Math.max.apply(null, mass6);
console.log(maxNumber) */

/* const numbers = [2, 5, 8, 10, 15, 6, 4, 9, 12, 3];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
 */

/* const variable = ['Ronaldo', 'Messi', 'Artem'];

console.log(variable.join(' ')) */

/* const manCity = ['Holland', 'De Bruyne', 'Ederson'];

const norway = 'Holland';
if(manCity.includes(norway)) {
  console.log('Він гравець цього клубу')
}
else {
  console.log('Він не гравець')
} */
/* 
const zero = [];
zero.push(1);
console.log(zero) */

/* const languages = ['C', 'C++', 'Python', 'JS', 'Scratch']
languages.splice(3, 0, 'Pascal')
console.log(languages) */

/* const mass = ['String 1',
 'String 2',
  'String 3'];
mass.pop()
console.log(mass)

const mass2 = [6, 3, 8, 73, 750];
mass2.indexOf(3)
console.log(mass2) */

/* Task 1 */
/* let mass = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe', 'Mudryk'];
console.log(mass.join(' ')) */

/* Task 1.2 */
/*  let mass2 = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe', 'Mudryk'];
let result = '';
for(let i = 0; i < mass2.length; i++) {
  result += mass2[i];
if (i !== mass2.length - 1) {
  result += ',';
}
} 
console.log(result); */

/* Task 2 */
/* 
const cards = [
  'Card-1',
  'Card-2',
  'Card-3',
  'Card-4',
  'Card-5',
]
cards.splice(0, 1);
console.log(cards); */

/* Task 3 */
/* const colors = [
  'yellow',
  'purple',
  'blue',
  'red',
  'black',
]
colors.splice(3, 0, 'white')
console.log(colors); */

/* Task 4 */
/* const array = ['C', 'C++', 'Java', 'Java Script'];
array.splice(1, 1, 'Python');
console.log(array) 

let numbers = [ 12, 42, 59, 123, 77, 12, 999, 999, 42, 70, 111, 2043054, 7, 77, 203, 66, 253, 42];
let newNumbers = [];
for(let i = 0; i < numbers.length; i++ ) {
  if(newNumbers.indexOf(numbers[i] === -1)) {
    newNumbers.push(numbers[i]);
    
  }
}
console.log(newNumbers);  */

/* const add = function(, b, c) {
  return a + b + c;
}

/* let changeCase = function() */

/* let ourArray = ['Daniil Kremenskyi', 'Dasha Rudenko', 'Artem Gladchuk', 'Kostya Barinets\'']

const convertArrayToNewlinedString = (array) => {
  return {ourArray};
}
console.log(convertArrayToNewlinedString(ourArray))

let mass = [rfff, rfrfr, frgthyh, rfrtg, gggtggtg, rgtggtg]
let addSymbol = function(mass) {
  return(mass)
}
console.log(mass(addSymbol))

let numbers2 = [ 12, 42, 59, 123, 77, 12, 999, 999, 42, 70, 111, 2043054, 7, 77, 203, 66, 253, 42];
function  

const antiCase = (yFDHdndu) => {
  return(String)
 */

/* 
const changeCase = function(one) {
  let textName = '';
  for(let i = 0; i < one.length; i++ ) {
    if(i % 2  === 0) {
      textName += one[i].toUpperCase()
    }
    else {
      textName += one[i].toLowerCase()
    }
  }
  return(textName)
}
console.log(changeCase('MaHmUYbH')) */

/* let checkNumber = function(scores) {
  let sum = 0;
  for(let i = 0; i < scores.lenght; i++) {
    sum += scores[i]
  }
  let average = sum / scores.lenght;
  if(average >= 91 && average <= 100) {
    return 'Моя оцінка А';
  }
  if(average >= 81 && average <= 90) {
    return 'Моя оцінка В';
  }
  if(average >= 71 && average <= 80) {
    return 'Моя оцінка C';
  }
  if(average <= 70) {
    return 'Моя оцінка D';
  }
}
console.log(checkNumber([34, 6, 94, 75, 67, 97, 98])) */

/* let myAverageScore = function(scores) {  
  // Обчислюємо суму всіх оцінок  
  let sum = 0;  
  for (let i = 0; i < scores.length; i++) {  
      sum += scores[i];  
  }  

  // Обчислюємо середнє арифметичне  
  let average = sum / scores.length;  

  // Визначаємо категорію залежно від середньої оцінки  
  
  if (average >= 91 && average <= 100) {  
      return "My average score: A";  
    }   
    if (average >= 81 && average <= 90) {  
      return "My average score: B";  
    }   
    if (average >= 71 && average <= 80) {  
      return "My average score: C";  
    }   
    if (average <= 70) {  
      return "My average score: D";  
    }  
  }  
    
  console.log(myAverageScore([100, 75, 81, 96]));  
  console.log(myAverageScore([45, 63, 85, 70]));  
  console.log(myAverageScore([77, 82, 60, 58]));  
  console.log(myAverageScore([93, 99, 93, 96]));

  let checkNumber = function(number) {
    let check = 0;
    for (let i = 0; i < number.length; i++) {
      
    }
  } */
/* 1) Напишіть функцію яка зробить зміну в регістрі, саме таким чином:

console.log(changeCase('qweRTY')); // QWErty(це результат у консолі)

console.log(changeCase('mAnGo')); // MaNgO

console.log(changeCase('AjAx')); // aJaX

 

 

2)    Напиши функцію яка повертає буль як результат перевірки числа на парність:

 

console.log(isEven(4)); // true

 

console.log(isEven(3)); // false

 

У цій функції ми перевіряємо, чи є передане число парним, повертаючи true якщо так, та false у протилежному випадку.

 

 

3) Напиши функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:

 

Myaveragescore: A (якщо середня оцінка від 91 до 100)

 

My average score: B (якщо середня оцінка від 81 до 90)

 

My average score: C (якщо середня оцінка від 71 до 80)

 

My average score: D (якщо середня оцінка від 70 і менше)

 

Для перевірки:

 

console.log(myAverageScore([100, 75, 81, 96]));

 

console.log(myAverageScore([45, 63, 85, 70]));

 

console.log(myAverageScore([77, 82, 60, 58]));

 

console.log(myAverageScore([93, 99, 93, 96])); */

/* const balanceDisplay = document.getElementById('balance-text');
const depositButton = document.getElementById('deposit-button');
const withdrawlButton = document.getElementById('withdrawl-button');
const depositInput = document.getElementById('deposit-input');
const withdrawlInput = document.getElementById('withdrawl-input');

const bankAccount = {
    ownerName: '',
    accountNumber: '',
    balance: 0,

    deposit: function(priceToAdd) {
        if (priceToAdd > 0) {
            this.balance += priceToAdd;
        } else {
            console.log('error');
        }
    },

    withdrawl: function(priceToRemove) {
        if (priceToRemove > 0 && priceToRemove <= this.balance) {
            this.balance -= priceToRemove;
        } else {
            console.log('error');
        }
    }
};

balanceDisplay.innerHTML = bankAccount.balance;

depositButton.addEventListener('click', () => {
    const depositAmount = parseInt(depositInput.value);
    bankAccount.deposit(depositAmount);
    balanceDisplay.innerHTML = bankAccount.balance;
});

withdrawlButton.addEventListener('click', () => {
    const withdrawlAmount = parseInt(withdrawlInput.value);
    bankAccount.withdrawl(withdrawlAmount);
    balanceDisplay.innerHTML = bankAccount.balance;
});

let movieTitle = document.querySelector('.movie__title')
let movieDerector = document.querySelector('.movie__derector')
let movieYear = document.querySelector('.movie__year')
let movieRating = document.querySelector('.movie__rating')
let movie = {
    title: 'Suicid scwar',
    director: 'Devid Lir',
    year: 2016,
    rating: 1,
    checkRating : function(){
        return this.rating > 8;
    }
}
movieTitle.textContent = movie.title;
movieTitle.textContent = movieDerector;
movieTitle.textContent = movieYear;
movieTitle.textContent = movieRating;
if(movie.checkRating()){
    movieTitle.style.color = 'green';
} else{
    movieTitle.style.color = 'red';
}

 */

/* user.name = prompt("введіть ім'я");
let enterEmail = prompt('введіть email');
let enterPassword = prompt('введіть пароль');
user.login(enterEmail, enterPassword)

 */ 

/* let number1 = [5, 98, 34, 94, 87];
let number2 = [6, 47, 25, 74, 33];
let copy = [...number1, ...number2, 56, 57];
console.log(copy) */

/* function countProps(obj) {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Input must be an object');
  }

  return Object.keys(obj).length;
} */

/*  function findBestEmployee(employees) {
  let bestEmployee = '';
  let maxTasks = 0;
  
    for (const employee in employees) {
    if (employees.hasOwnProperty(employee)) {
      const tasksCompleted = employees[employee];
      if (tasksCompleted > maxTasks) {
        maxTasks = tasksCompleted;
        bestEmployee = employee;
      }
    }
  }

  return bestEmployee;
}
} */

/* function countTotalSalary(employees) {
  let totalSalary = 0;

  for(const employee in employees) {
    if(employees.hasOwnProperty(employee)) {
      totalSalary += employees[employee];
    }
  }
  return totalSalary;
} */

/* function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }

  return values;
} */

/* let user = {
  mood: '',
  hobby: '' ,
  premium:'' ,
}
const{mood, hobby, premium} = user;
console.log(user)  */
/* user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';

let letters = Object.keys(user);
for(const abc of letters) {
  console.log(abc)
}  */

/*  let weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0, */
  /* levelTemp: function() {
    if(this.temperature > 0) {
      console.log('higher')
    }
    else {
      console.log('lower')
    }
  } */
/* const {temperature, humidity, windSpeed: {Speed, Direction}} = weather;
console.log(weather) */

/* let user = {
  name: 'Artem',
  email: 'gl@com',
  password:'2200000',

};
const{ name, email, password} = user;
console.log(user) */

/* let user = {
  name: 'John',
  surname: 'Smith',
  job: 'cook',
  hobbies: [
    'Gaming', 'Books', 'cooking'
  ],

}
const{ name, surname, job, films = 'spider-man'} = user;

console.log(name, surname, job, films); */

/* let user = {
  name: 'John',
  surname: 'Smith',
  job: 'cook',
  hobbies: [
    'Gaming', 'Books', 'cooking'
  ],

}
const {surname, hobbies, ...rest} = user;
console.log(rest)
 */

/* 
У вас є масив обʼєктів user, і у кожного з обʼєктів
 є name, surname та id.
Напишіть код, який створить ще один масив обʼєктів
 з параметрами id й fullName, де fullName –
  складається з name та surname.
const people = [
  { name: 'John',  surname: ‘Doe’,  age: 32, occupation: 'programmer' },
  { name: 'Jane', surname: ‘Lee’,  age: 26, occupation: 'teacher' },
  { name: 'Mike', surname: ‘Watson’, age: 42, occupation: 'engineer' },
  { name: 'Emily', surname: ‘Brad’, age: 29, occupation: 'designer' }
]; */

/* const array = [
 { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
{ name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
 { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
 { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
]
const newArray = array.map( (person, index)=> ({
 id: index + 1,
 fullName: `${person.name} ${person.surname}`,
}))
console.log(newArray)
 */
/* const arr = [1, 27, 3, 44, 4, 5, 16, 6, 7];
let filterRange = (arr, a, b) => arr.filter(mass => (mass >= a && mass <= b ));
console.log(filterRange(arr))
 */


/* const players = [
    {
        id: 'player-1'
        name: 'Artem',
        catka: 370,
        headShot: 570,
        online: true,
        game: FIFA,
    }
]
const players = [
    {
        id: 'player-1'
        name: 'Sasha',
        catka: 370,
        headShot: 570,
        online: false,
        game: Sekiro,
    }
]
const players = [
    {
        id: 'player-1'
        name: 'Egor',
        catka: 370,
        headShot: 570,
        online: true,
        game: CSGO,
    }
] */



/* let sun = document.querySelector('.sun');

window.addEventListener('load', () => {
  sun.classList.add('hide');
  setTimeout(() => {
    sun.remove();
  }, 600);
}) */
//Scroll animation 

/* window.addEventListener('load', function () {
    // Завантаження завершено, приховуємо анімацію завантаження
    let sun = document.querySelector('.sun');
    sun.style.display = 'none';
    
    // Відображаємо вміст сайту
    let content = document.querySelector('body');
    content.style.display = 'block';
}); */
/* 
const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');



let currentIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`
}
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex)
    activeDots()
}
function goToNextSlide() {
    currentIndex = (currentIndex +1) % slides.length;
    showSlide(currentIndex)
    activeDots()
}
function goToPrevSlide() {
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex)
    activeDots()
}
function activeDots() {
    dots.forEach((dot, index) => {
     if(index === currentIndex) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    } )
}
prevButton.addEventListener('click', goToPrevSlide)
nextButton.addEventListener('click', goToNextSlide)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index)
    })
})
showSlide(currentIndex);
activeDots() */

/* 


function switchLights() {
    let lights = document.querySelectorAll(".light");
    let car = document.querySelector('.car');
    // Вимикаємо всі світлофори
    for (let i = 0; i < lights.length; i++) {
      lights[i].classList.remove("active");
    }
    // Вмикаємо червоний світлофор
    lights[0].classList.add("active");
    
    setTimeout(function () {
      // Вимикаємо червоний світлофор
      lights[0].classList.remove("active");
      
      // Вмикаємо жовтий світлофор
      lights[1].classList.add("active");
      
      setTimeout(function () {
        // Вимикаємо жовтий світлофор
        lights[1].classList.remove("active");
        
        // Вмикаємо зелений світлофор
        lights[2].classList.add("active");
        car.classList.remove("rotated")
        car.classList.add("moved");
        setTimeout(function () {
          // Вимикаємо зелений світлофор
          lights[2].classList.remove("active");
          car.classList.remove("moved");
          car.classList.add("rotated");
          // Починаємо новий цикл
          switchLights();
        }, 2000); // Затримка перед перемиканням на червоний - 2 секунди
      }, 1000); // Затримка перед перемиканням на зелений - 1 секунда
    }, 2000); // Затримка перед перемиканням на жовтий - 2 секунди
  }

  // Починаємо цикл для світлофора
  switchLights();

 */

/* 
  const randInt = (min, max) => (Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min));
  function validateNumber() {
    let inputElement = document.getElementById("amount");
    let errorMessageElement = document.getElementById("errorMessage1");
    let bigLabel = document.querySelector('.G_big-label');
    // Отримуємо введене число
    let number = parseInt(inputElement.value);
  
    if (number < 1000 || number > 100000) {
      // Встановлюємо червону рамку для інпуту
      bigLabel.style.border = "1px solid red";
  
      // Відображаємо повідомлення про помилку
      errorMessageElement.textContent = "Введіть правильне число";
    } else {
      // Відновлюємо стандартні стилі
      bigLabel.style.border = "1px solid #cecece";
  
      // Очищуємо повідомлення про помилку
      errorMessageElement.textContent = "";
    }
  }
  
   function updateNumber() {
  let amount = (document.getElementById("amount"));
  let displayElement = (document.getElementById("displayNumber"));
  let number = amount.value;
  displayElement.textContent = number;
}

function updateNumber2() {
  let months = (document.getElementById("months"));
  let displayElement2 = (document.getElementById("displayNumber2"));
  let number2 = months.value;
  displayElement2.textContent = number2;
}
function handleInput() {
  updateNumber();
}
let sum = (document.querySelector('.sum'))
let myAmount = (document.querySelector('.amount'))
myAmount.addEventListener('click', () => {
  if (myAmount.className === 'amount' && sum.className === 'sum') {
    myAmount.classList.add('active');
    sum.classList.add('active');
}
else {
  myAmount.classList.remove('active');
  sum.classList.remove('active');
};
})
 */
/*  let month = (document.querySelector('.G_month'))
let amount2 = (document.querySelector('.G_month2'))
amount2.addEventListener('click', () => {
  if (amount2.className === 'G_month2' && month.className === 'G_month') {
    amount2.classList.add('active');
    month.classList.add('active');
}
else {
  amount2.classList.remove('active');
  month.classList.remove('active');
};
}) */

/* let cvv = document.querySelector('.card_cvv');
let button = document.querySelector('.button');
button.addEventListener('click', () => {
    let randomCvv = Math.floor(Math.random() * 900) + 100;
    cvv.textContent = randomCvv
})
let button2 = document.querySelector('.button2');
let cardNumber = document.querySelector('.card_number');
button2.addEventListener('click', () => {
    let space = "";
    for (let i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        space += randomNumber;
        if (i % 4 === 3 && i !== 15) {
            space += " ";
        }
    }
    cardNumber.textContent = space
}); */
 /* alert('Йой, зачекайте. Перед тим як пройти на сайт ви маєте відповісти на питання!');
let userAnswer = prompt('На який матч ми їздили у Київ і з яким рахунком він закінчився. (Відповіді прописувати з великої літери та через кому)');

if (userAnswer === 'Динамо-Челсі, 0-5') {
    alert('О! Впізнаю іменинника, а тепер хутко дивитися сайт');
} else {
    alert('Ти хто розбійник🤨🤨🤨? ВИМІТАЙСЯ ЗВІДСИ ШВИДКО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
} 
document.addEventListener('DOMContentLoaded', function () {
  function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      section.classList.remove('active-section');
    });

    let activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active-section');
  }
  document.getElementById('btn1').addEventListener('click', function () {
    showSection('section1');
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
  });

  document.getElementById('btn2').addEventListener('click', function () {
    showSection('section2');
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
  });

  document.getElementById('btn3').addEventListener('click', function () {
    showSection('section3');
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
  });
}); */

/* class Book {
  constructor(pages, title) {
    this.pages = pages;
    this.title = title;

  }

} */
/* const someBook = new Book(222, 'Book');
console.log(someBook);

class Calculator {
  add(a,b) {
    return a + b;
  }
  substract(a,b) {
    return a - b;
  }
  multiply(a,b) {
    return a * b;
  }
  divide(a,b) {
    if(b === 0) {
      return;
      alert('на нуль не можна')
    }
    return a / b;
  }
  
}
const calculator = new Calculator();
console.log(calculator.divide(6, 4)) */

/* class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name) {
    this.breed = breed;
    super(name);
  }
}
const myDog = new Dog(Buddy, Labrador);
console.log(myDog.Dog()) */


/* class Animal {
  makeSound() {
   return "animalSound";
  }
}
class Cat extends Animal {
  makeSound() {
    return 'meow';
  }
}
const animal = new Animal;
console.log(animal.makeSound());
const cat = new Cat;
console.log(cat.makeSound());
 */

/* class Animal {
  constructor(name) {
      this.name = name;
  };

  speak() {
      return 'Hello, world!';
  };
};
class Dog extends Animal {

  constructor(name) {
      super(name);
  };

  speak() {
      return console.log( (this.name): Gaf);
  };
};

const newDog = new Dog('Ivan');

newDog.speak();
 */




/* function Account({login, email}) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function() {
  console.log(`login: ${this.login} email: ${this.email}`)
} 
console.log(Account.prototype.getInfo);

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
 });
poly.getInfo();


const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
 });
 mango.getInfo();

 */



/*  class User {
  constructor({name, age, followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
 });
mango.getInfo();

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
 });
 poly.getInfo();

 */
/* 


 class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

// Приклад використання класу
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); 

storage.removeItem('Пролонгер');
console.table(storage.items);  */



/* let element = document.getElementById('e');
let isClicked = false;

element.addEventListener('mousemove', e => {
    if (isClicked) {
        let x = e.clientX - 125; 
        let y = e.clientY - 125;

        element.style.transform = `translate(${x}px, ${y}px)`;
    }
});

element.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true;
    } else {
        isClicked = false;
    };
});
 */

/* const cube = document.getElementById('e')
document.body.addEventListener('keydown', e => {
  if (e.key === 'a') {
    cube.style.transform = 'scale(0.5)'
  } else {
    cube.style.transform = 'scale(1)'
  }

}) */

/* let hoverBlock = document.querySelector('.hover_me')
let body = document.body;
hoverBlock.addEventListener('mouseover', () => {
    let randomColor = getRandomColor()
    body.style.backgroundColor = randomColor
});
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let colors = '#';
    for (let index = 0; index < 6; index++) {
      colors += letters[Math.floor(Math.random() * 16)];
}
return colors
}
*/


let loading = document.querySelector(".A_loading");
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    loading.classList.add('fade-out');
    setTimeout(function () {
        loading.classList.remove('fade-out');
        window.location.href = './controls.html';
    }, 1000);
  }
});



/* function redirectToNextPage() {
  document.classList.add('fade-out');
  setTimeout(function () {
      document.classList.remove('fade-out');
      window.location.href = 'test.html';
  }, 1000); // Час анімації в мілісекундах, відповідає часу transition в CSS
}
 */
