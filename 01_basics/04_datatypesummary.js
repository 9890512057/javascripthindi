//# primitive

// 1.String 2.Number 3.Boolean 4.Null 5.Undefined 6.symbol 7.Bigint 

//symbol it is use to declare an unique values 
let a=Symbol("12345");
let b=Symbol("12345");
console.log(a===b);
const z=1n;  // this is bigint
console.log(typeof(z));

//reference type 
//1.array 2.Object  3.Function

const hero=["Abhinav","Prasad","Prawin","Aniket"];    //array
console.log(hero);
const objj={ //object
    myname:"Abhinav",
    age:22,
    address:"Supe",
    degree:"mca"
}
console.log(objj);
console.log(typeof(objj));

function myfun(m) {
    console.log(m+"function values");
}
let v=(myfun(55));
console.log(typeof(myfun));