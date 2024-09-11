// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout, 
// });

// const askQuestion = (Question) => {
//     return new Promise((Answer) => rl.question(Question,Answer));
// }

// const Add = (FirstName,LastName) =>{
//     console.log(FirstName,LastName);
// }

// const Delete = (id) =>{
//     console.log(`Delete ${id}`);
// }
























// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// const askQuestion = (question) => {
//     return new Promise((resolve) => rl.question(question, resolve));
// }

// const Add = (FirstName, LastName) => {
//     console.log(`Added: ${FirstName} ${LastName}`);
// }

// const Delete = (ID) => {
//     console.log(`Deleted: ${ID}`);
// }

// const startCalculator = async () => {
//     let FirstName;
//     let LastName;
//     let ID;

//     let Q1 = await askQuestion('Choose a letter (a for add, d for delete): ');

//     if (Q1 === 'a') {
//         FirstName = await askQuestion("Enter your FirstName: ");
//         LastName = await askQuestion("Enter your LastName: ");
//         Add(FirstName, LastName);
//     } else if (Q1 === 'd') {
//         ID = await askQuestion("Enter your ID: ");
//         Delete(ID);
//     }

//     rl.close(); // Close readline interface correctly
// }

// startCalculator();



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const askQuestion = (Question)=>{
    return new Promise((answer)) => rl.question(Question,Answer);
    
}

const Add = (FirstName, LastName)=>{
    console.log(FirstName,LastName);
}

const Delete = (ID) =>{
    console.log(`Delete Id:${ID}`);
}

const startCalculator = async() =>{
    let FirstName;
    let LastName;
    let ID;

    let Q1 = await askQuestion('Choose letter : A or B');

    if(Q1 == 'A'){
        FirstName = await askQuestion('Entre your FirstName');
        LastName = await askQuestion('Entre your LastName');
        Add (FirstName,LastName);
    }else if(Q1 == 'B'){
        ID = await askQuestion('Entre Your ID');
        Delete (``)
    }
}