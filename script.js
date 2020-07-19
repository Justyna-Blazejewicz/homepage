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

title.innerHTML=`Cześć, nazywam się ${name} i mam ${age} lata.<br> Ze mną zaplanujesz swoje wesele od ${from} do ${to}!`
