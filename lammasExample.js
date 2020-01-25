const lammas = require('./lammas');

const l = new Lammas('dolly');

console.log("lammas name %s", l.getName());
console.log('name=dolly', l.getNme() === 'dolly');

l.setName('shawn');
console.log("lammas name %s", l.getName());
console.log('name=dolly', l.getNme() === 'shawn');

TextDecoderStream('create lammas with name dolly, check that name is dolly')