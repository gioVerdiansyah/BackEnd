// program sederhana cetak angka sebanyak yang di inginkan
const cetakNama = (nama, panjang) => {
    if (typeof nama === "string" && typeof panjang === "number") {
        const isiNama = [];
        for (let i = 0; i < panjang; i++) {
            isiNama.push(nama);
        }
        return isiNama;
    } else {
        return "input yang anda masukkan tidak sesuai; clue(string,number)";
    }
}

console.table(cetakNama("verdi", 1))

const path = require('path');
console.log(path.join(__filename));