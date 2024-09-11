const fs = require('fs');
const monTableau = [
    "Dina",
    "Dehbi",
    "19"
];

const data = JSON.stringify(monTableau);

fs.writeFile('Data.json', data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Le tableau a été enregistré dans Data.json');
    }
});

