// Asynchronous
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log("Gagal mendapatkan berkas");
        return;
    }
    console.log(data);
}
fs.readFile('component/text.txt', 'utf-8', fileReadCallback);

// Synchrounous
const data = fs.readFileSync('component/text.txt', 'utf-8');
console.log(data);