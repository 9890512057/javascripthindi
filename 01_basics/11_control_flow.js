// let userInput = prompt("Please enter your name:");
const month=5;
console.log(month);
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        break;
}


console.log( 10  ?? 20 ?? null );
const a=690;
const price=a<=60 ? console.log("less than 60") : console.log("greater or equal than 60");