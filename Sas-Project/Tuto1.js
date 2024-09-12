const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const Add = (Name, Adresse, Capacite) => {
   console.log(Name, Adresse, Capacite);
 };


const Delete = (id) => {
  console.log(`delete ${id}`);
};

const startCalculator = async () => {
  let Name;
  let Adresse; 
  let Capacite;
  let id = 0;
  const letter = await askQuestion("Enter the letter (a, d): ");
  if (letter == "a") {
    Name = await askQuestion("Enter Your Name: ");
    Adresse = await askQuestion("Enter Your adresse: ");
    Capacite = await askQuestion("Capacité : ");
    Add(Name, Adresse, Capacite);
  } else if (letter == "d") {
    id = await askQuestion("Enter the id: ");
    Delete(id);
  }

  rl.close();
};

startCalculator();
