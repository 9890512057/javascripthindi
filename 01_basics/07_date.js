let mydate=new Date();
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(mydate.getTimezoneOffset());

let bdate=new Date('March 20,2001');
console.log(bdate.toString());
console.log(bdate.toDateString());

let my=Date.now();
console.log(bdate.getDate());
console.log(bdate.getDay());
console.log(bdate.getFullYear());
console.log(bdate.getHours);
console.log(bdate.getMilliseconds());
console.log(bdate.getMinutes);
console.log(bdate.getMonth());
console.log(bdate.getTime());

let ab=new Date();
let vv=ab.toLocaleString('default', { weekday: 'long'  });
let a = new Date();
let options = { weekday: 'long' }; // Specify the options for formatting the weekday
let weekday = a.toLocaleString('default',{ weekday: 'long' }); // Format the date to display the weekday
console.log(weekday); // Output: the current day of the week, e.g., "Monday"
console.log(vv);
