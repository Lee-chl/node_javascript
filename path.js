const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:',path.delimiter);
console.log('-----------------------------');
console.log('path.dirname():',path.dirname(string));
console.log('path.extname():',path.extname(string));
console.log('path.basename():',path.basename(string));
console.log('path.basename():',path.basename(string,path.extname(string)));
console.log('---------------------------');
console.log('path.parse()',path.parse(string));
console.log('path.format():',path.format({
    dir: 'D:\\node_jsm',
    name: 'path',
    ext: '.js',
}));
console.log('path.normalize():',path.normalize('D:\\\\node_jsm\\\path.js'));
console.log('--------------------------------');
console.log('path.isAbsolute():',path.isAbsolute('D:\\'));
console.log('path.isAbsolute():',path.isAbsolute('./home'));
console.log('-------------------------------');
console.log('path.relative():',path.relative('D:\\node_jsm\\path.js','D:\\'));
console.log('path.join():',path.join(__dirname,'..','..','/users','.','/node_jsm'));
console.log('path.resolve():',path.resolve(__dirname,'..','users','.','/node_jsm'));