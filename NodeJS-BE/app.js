// process.env
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});

// process.argv
for (let i = 0; i < 4; i++) {
    console.log(`${process.argv[i]}`);
}