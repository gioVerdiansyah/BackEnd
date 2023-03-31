// TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
// TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
// TODO 3 : Import class Tiger dari berkas Tiger.js.
// TODO 4 : Import class Wolf dari berkas Wolf.js.

// Setelah selesai mengerjakan TODO, eksekusi berkas index.js dengan perintah:

// node ./modularization/index.js 
// TODO 3
const Tiger = require('../component/tiger');
// TODO 4
const Wolf = require('../component/wolf');

const fighting = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        tiger.growl();
        return;
    }

    if (wolf.strength > tiger.strength) {
        wolf.howl();
        return;
    }

    console.log('Tiger and Wolf have same strength');
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf);