const sh = require('shelljs');
const upath = require('upath');
// const upath = require('./node_modules/upath');


const destPath = upath.resolve(upath.dirname(__filename), '../dist');

sh.rm('-rf', `${destPath}/*`)

