const firstName = "Gabriela";
const age = 22;
console.log(firstName);
console.log(age);
console.log(`Heja, nazywam się ${firstName} i mam ${age} lata`);

alert("Witam w moim pierwszym projekcie WTF");

const heading = document.querySelector('.main-heading--js');
console.log(heading);

const element = document.querySelector('.extra-element--js');
element.innerHTML =`Inna wartość`;
// console.log(element);

function calculate(myNumber){
    myNumber=myNumber*7;
    return myNumber;
    // console.log(`Dostałam ${myNumber}`);
    // return myNumber*7;
}
const myResult= calculate(age);
console.log(myResult);

function greet(age, firstName){
    console.log(`Heja, nazywam się ${firstName} i mam ${age} lata a to jest drugie powitanie z użyciem funkcji calculate`);
}
greet(22, 'Gabriela');

const start="Front-end";
const choice=2;
function paragraph(start,choice){
    console.log(`${start} był moim ${choice} wyborem po architekturze`)
}
paragraph("Front-end",2);

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML =  content;
}
createContent('.extra-element--js', 'Kolejny tekst z js')
// createContent('.extra-paragraph--js','Pragraf stworzony w js');

function extraParagraph(querySelectorParagraph, content){
    const element = document.querySelector(querySelectorParagraph);
    element.innerHTML =  content;
}
extraParagraph('.extra-paragraph--js','Pragraf stworzony w js');

const book = {
    name:'Heartland',
    pages: 132,
}
// console.log(book.name)
// console.log(book['name'])

const MyProperty='pages'
console.log('Przeczytałam',(book.name),',która zawiera', (book[MyProperty]), 'strony');

const humanOne={
    name:'Maciek',
    age:32,
    adress:{
        street:'Lipowa',
        city: 'Białystock',
    }
}
const humanTwo ={
    name:'Stefan',
    age: humanOne.age,
    adress: humanOne.adress.street,
} 

console.log(humanTwo);
 console.log(humanOne);

 humanOne.age = 35;
 console.log(humanTwo);
 console.log(humanOne);
// {
//     name:'Stefan',
//     age:32,
// }
// humanTwo.age=35;
// console.log(humanTwo);