// TODO: tampilkan teks pada notes.txt pada console.
const fileSystem = require('fs');

const fileReadCallback = (err, data) => {
    if (err) {
        console.log('Berkas tidak ditemukan');
        return;
    }
    console.log(data);
}

fileSystem.readFile('component/notes-filesystem.txt', 'utf-8', fileReadCallback);