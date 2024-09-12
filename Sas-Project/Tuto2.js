const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

// Function to add and write data to a JSON file
const Add = (Name, Adresse, Capacite) => {
  const data = {
    Name: Name,
    Adresse: Adresse,
    Capacite: Capacite
  };
  
  // Convert data to JSON and write it to a file
  fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
};

// Function to delete data (for now just log)
const Delete = (id) => {
  console.log(`delete ${id}`);
};

// Function to read data from JSON file
const ReadFile = () => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Data read from file:", data);
  });
};

const startCalculator = async () => {
  let Name;
  let Adresse; 
  let Capacite;
  let id = 0;
  
  const letter = await askQuestion("Enter the letter (a, d, r): ");
  
  if (letter == "a") {
    Name = await askQuestion("Enter Your Name: ");
    Adresse = await askQuestion("Enter Your Adresse: ");
    Capacite = await askQuestion("Capacité : ");
    Add(Name, Adresse, Capacite);
  } else if (letter == "d") {
    id = await askQuestion("Enter the id: ");
    Delete(id);
  } else if (letter == "r") {
    ReadFile(); // Call read function to display JSON data
  }

  rl.close();
};

startCalculator();
