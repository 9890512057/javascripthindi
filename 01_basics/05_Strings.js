const user=new String('Abhinav');
console.log(user);


let email='  Abhinav@9696';
let name="Abhinav Kutwal";
console.log(email.anchor(email));    //    use to put values in anchod tah of html

console.log(email.at(0)); //    at()  to print the value at index 0


console.log(email.big());
console.log(email.bold(email));
console.log(email.blink(3));
console.log(email.charAt(4));  // gives data present at following index
console.log(email.charCodeAt(2));  //gives char code for the char
console.log(email.concat(name));


//String construectos
/*const a=new String("creta");
const b=String('creta');
console.log(typeof(a));
console.log(typeof(b));
console.log( a instanceof String );
console.log(b instanceof String);  */

console.log(email.endsWith(9696));
console.log(email.fixed('abhinav'))
console.log(email.trim());
console.log(email.split('@'));
console.log(name.replace(" ","Suresh"));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
