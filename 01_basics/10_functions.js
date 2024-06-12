
function myname() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V");    
}
function asum(num1,num2){
    const sum=num1+num2
    console.log(sum);
    return sum;
}
console.log(asum());
console.log(asum(5,5));

function login(username) {
    return `${username} just logged in`
    
}
console.log(login('Abhinav'));