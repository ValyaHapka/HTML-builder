/* eslint-disable indent */
/* eslint-disable semi */
const fs = require('fs');
const path = require('path');

const dir = path.join('03-files-in-folder', 'secret-folder');

fs.readdir(dir, {withFileTypes: true}, (err, list) => {
    if (!err) {
        list.forEach(e => {
            if (e.isFile()) {
                const ind = e.name.indexOf('.');
                const base = path.basename(e.name, e.name.slice(ind));
                const last = path.extname(e.name);
                fs.stat(`${dir}/${e.name}`, (err, stats) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`${base} - ${last} - ${stats.size}`);
                })
            }
        });
    }
});


