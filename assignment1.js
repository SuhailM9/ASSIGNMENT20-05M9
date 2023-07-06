var readlineSync = require("readline-sync");
let marks = [];
for (let i = 1; i <= 5; i++) {
    const mark = parseInt(readlineSync.question(`Enter marks for subject ${i}:`));
    switch (mark) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thersday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Entry!!!");
            break;
    }
}