for (let i=1; i<=5; i++){
    console.log(`There are ${i} apples now`)
    
    
}

let stdname = "Eunjae"
// console.log("My student name is " + stdname)
console.log(`My student ${stdname} is from thailand`)


// switch case

// create a variable called num button
let numBtn = 1

switch(numBtn){
    case 1:
        console.log("robot is sent back in time to eliminate John Connor")
        break;
    case 2:
        console.log("robot transform into a car")
        break;
    case 3:
        console.log("robot is ironman(dr doom)")
        break;
    default:
        console.log("Robot is chillin")
}


//string methods


let courseName = "webDev"
console.log(`using .toUppercase method ${courseName.toUpperCase()}`)
console.log(`using .toLowercase method ${courseName.toLowerCase()}`)
console.log(`using .starstWith method ${courseName.startsWith("EEE")}`)
console.log(`using .starstWith method ${courseName.startsWith("w")}`)