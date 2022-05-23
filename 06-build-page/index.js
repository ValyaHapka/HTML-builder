/* eslint-disable indent */
const fs = require('fs');
const path = require('path');

const styles = path.join('06-build-page', 'styles');
const dir = path.join('06-build-page', 'project-dist');
const copyAssets = path.join('06-build-page', 'project-dist', 'assets');
// const fonts = path.join('06-build-page', 'project-dist', 'assets', 'fonts');
// const img = path.join('06-build-page', 'project-dist', 'assets', 'img');
// const svg = path.join('06-build-page', 'project-dist', 'assets', 'svg');
const assets = path.join('06-build-page', 'assets');

fs.mkdir(dir, {recursive: true}, (err) => {
    if (err) {
        console.error(err);
    }
});
fs.readdir(assets, {withFileTypes: true}, (err, list) => {
    if (!err) {
      list.forEach(e => {
          fs.readdir(`${assets}/${e.name}`, {withFileTypes: true}, (error, list) => {
              if (!error) {
                  list.forEach(el => {
                      fs.copyFile(`${assets}/${e.name}/${el.name}`, `${copyAssets}/${e.name}/${el.name}`, (err) => {
                          console.error(err);
                      });
                  });
              }
          });
      });
    }
});
fs.readdir(styles, {withFileTypes: true}, (err, list) => {
    if (!err) {
        list.forEach(e => {
            if (e.isFile() && path.extname(e.name) === '.css') {
                const styleStream = fs.createReadStream(`${styles}/${e.name}`);
                let writer = fs.createWriteStream(`${dir}/style.css`, {flags: 'a'});
                styleStream.pipe(writer);
            }
        });
    }
});