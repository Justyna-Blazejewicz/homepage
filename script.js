const from='A';
const to='Z';
const name='Justyna'
const age = '24'

console.log(from);
console.log(to);
console.log(`Tu zaplanujesz swoje wesele od ${from} do ${to}!`);
console.log(name);
console.log(age);
console.log(`Cześć, nazywam się ${name} i mam ${age} lata.`)

const title = document.querySelector('.title');

console.log (title);

title.innerHTML= `Tu zaplanujesz swoje wesele od ${from} do ${to}!`

function calculate(myNumber){
    return myNumber*7;
}
const myResult=calculate(3)
console.log(myResult)

function greet(age, firstName){
    console.log(
        `Cześć! Mam na imię ${firstName} i mam ${age} lata`
    )
}
greet(24, 'Justyna')

const greet2 = (age2, firstName2) => {
    console.log(
        `Cześć! Mam na imię ${firstName2} i mam ${age2} lata`
    )
}
greet2(24, 'Justyna')

const calculate2 = (myNumber2) => (myNumber2+3)*7

const myResult2=calculate2(2)
console.log(myResult2)