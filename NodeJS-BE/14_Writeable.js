const fs = require('fs');
const WritableStream = fs.createWriteStream('component/coba-wriable.txt');

WritableStream.write('Ini teks baris pertama\n');
WritableStream.write('Ini teks baris kedua\n');
WritableStream.end('Akhir dari teks!');