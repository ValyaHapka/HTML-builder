/* eslint-disable indent */
const fs = require('fs');
const path = require('path');

const styles = path.join('05-merge-styles', 'styles');
const dir = path.join('05-merge-styles', 'project-dist');

fs.readdir(styles, {withFileTypes: true}, (err, list) => {
    if (!err) {
        list.forEach(e => {
            if (e.isFile() && path.extname(e.name) === '.css') {
                const styleStream = fs.createReadStream(`${styles}/${e.name}`);
                let writer = fs.createWriteStream(`${dir}/bundle.css`, {flags: 'a'});
                styleStream.pipe(writer);
            }
        });
    }
});