const fs = require("fs");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (Query) => {
    return new Promise((resolve) => rl.question(Query, resolve));
};

const Add = (Name, Adresse, Capacité) => {
    fs.readFile('Data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // Check if file is empty or invalid
            let readData = [];
            try {
                readData = JSON.parse(data);
            } catch (err) {
                console.log("File is empty or contains invalid JSON. Initializing empty data.");
            }

            let ObjectData = {
                id: readData.length,
                Name: Name,
                Adresse: Adresse,
                Capacité: Capacité
            };
            readData.push(ObjectData);

            let jsonData = JSON.stringify(readData, null, 2);

            fs.writeFile('Data.json', jsonData, 'utf8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Data added successfully');
                }
            });
        }
    });
};

const remove = (id) => {
    fs.readFile('Data.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let readData = [];
            try {
                readData = JSON.parse(data);
            } catch (err) {
                console.log("File is empty or contains invalid JSON.");
                return;
            }

            let UpdateData = readData.filter((item) => item.id !== parseInt(id));

            let jsonData = JSON.stringify(UpdateData, null, 2);
            fs.writeFile('Data.json', jsonData, 'utf8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Record deleted successfully");
                }
            });
        }
    });
};

const startCalculator = async () => {
    let action = await askQuestion("Choose Add or delete: ");

    if (action.toLowerCase() === "add") {
        let Name = await askQuestion("Enter your name: ");
        let Adresse = await askQuestion("Enter your address: ");
        let Capacité = await askQuestion("Enter capacity: ");
        Add(Name, Adresse, Capacité);
    } else if (action.toLowerCase() === "delete") {
        let id = await askQuestion("Enter the ID to delete: ");
        let confirmation = await askQuestion("ARE YOU SURE? (yes/no): ");
        if (confirmation.toLowerCase() === "yes") {
            remove(id);
        } else {
            console.log("Deletion canceled.");
        }
    } else {
        console.log("Invalid action. Please enter 'add' or 'delete'.");
    }

    rl.close();
};

startCalculator();
