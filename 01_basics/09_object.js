const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
const  obj3=Object.assign(obj1,obj2)
const obj4={...obj1,...obj2,...obj3}
console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
//console.log(Objects);
const {1:one}=obj1
console.log(one);
console.log(obj3===obj1)