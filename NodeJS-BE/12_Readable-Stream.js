const fs = require('fs');
const readableStream = fs.createReadStream('component/article.txt', {
    highWaterMark: 10
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        //when the chunk cannot be read
        console.log('Berkas tidak ditemukan\n' + error);
    }
})

readableStream.on('end', () => {
    console.log('Done');
})