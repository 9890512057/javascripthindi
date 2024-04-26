let myar=new Array(1,2,3,4,5,6)
let b=["Abhinav","Yogesh","Prawin","Prasad"]
//console.log(typeof myar);
//console.log(typeof b);

//console.log(myar);
myar.pop();
//console.log(myar);
myar.push(7);
//console.log(myar);


myar.slice(0,3);

//console.log("B",myar);
//console.log(myar.splice(0,2));     //myoriginal array is changed in splice
//console.log("C",myar);
//console.log(myar.sort());
// let arr=(myar.join());
// console.log(typeof arr);
// let rev=myar.reverse();
// console.log(rev);
// console.log(myar.includes(1000));
// console.log(myar.indexOf(1));


const marvel=["ironman","hulk","captain","loki"]
const dc=["superman","deadpool","spiderman"]
///marvel.push(dc)   //sub array iscreated
console.log(marvel);
let heros=marvel.concat(dc);  //two array are added
console.log(heros); 
let con=([...marvel,...dc])
console.log("prop",con);

let num=[1,2,3,4,5,6,7,8,[11,12,13,14,15],16,17,18,[21,22,23,[31,32,33]]]   //sub arrays are converted into one single array
console.log(num.flat(Infinity));
const name="Abhinav"
const abh=Array.from(name)
console.log(abh);

const ak=Array.of(abh,"Kutwal")
console.log(ak);
