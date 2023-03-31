/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// Teks yang dibaca oleh readable stream memiliki ukuran 15 karakter tiap bagiannya. Tentukan nilai highWaterMark-nya.
// Tulis ulang teks dengan menggunakan teknik writable stream pada berkas output.txt. Untuk tiap bagian teks yang dibaca melalui readable stream, pisahkan dengan baris baru (‘\n’).


const fileSystem = require('fs');



const readableStream = fileSystem.createReadStream('component/input.txt', {
    highWaterMark: 15
})
const WritableStream = fileSystem.createWriteStream('component/output.txt');

readableStream.on('readable', () => {
    try {
        let teks = `${readableStream.read()}\n`
        process.stdout.write(teks); //print ke terminal
        WritableStream.write(teks); //print ke file
    } catch (error) {
        console.log('Ada kesalahan!\n' + error);
    }
})
readableStream.on('end', () => {
    WritableStream.end();
});
// end ternyata wajib euy