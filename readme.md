# pe-machine-type-descriptor

**Get name and description of [PE](https://en.wikipedia.org/wiki/Portable_Executable) machine types. As specified by [Microsoft PE and COFF Specification 9.3](https://download.microsoft.com/download/9/c/5/9c5b2167-8017-4bae-9fde-d599bac8184a/pecoff_v83.docx) <sup>[doc]</sup>, section 3.1.1.**

[![npm status](http://img.shields.io/npm/v/pe-machine-type-descriptor.svg?style=flat-square)](https://www.npmjs.org/package/pe-machine-type-descriptor) [![node](https://img.shields.io/node/v/pe-machine-type-descriptor.svg?style=flat-square)](https://www.npmjs.org/package/pe-machine-type-descriptor) [![Travis build status](https://img.shields.io/travis/vweevers/pe-machine-type-descriptor.svg?style=flat-square&label=travis)](http://travis-ci.org/vweevers/pe-machine-type-descriptor) [![AppVeyor build status](https://img.shields.io/appveyor/ci/vweevers/pe-machine-type-descriptor.svg?style=flat-square&label=appveyor)](https://ci.appveyor.com/project/vweevers/pe-machine-type-descriptor) [![Dependency status](https://img.shields.io/david/vweevers/pe-machine-type-descriptor.svg?style=flat-square)](https://david-dm.org/vweevers/pe-machine-type-descriptor) [![Greenkeeper badge](https://badges.greenkeeper.io/vweevers/pe-machine-type-descriptor.svg)](https://greenkeeper.io/)

## example

```js
const mt = require('pe-machine-type-descriptor')

console.log(mt(0x8664).type) // 'amd64'
console.log(mt(0x8664).description) // 'x64'

console.log(mt(0x1c4).type) // 'armnt'
console.log(mt(0x1c4).description) // 'ARM Thumb-2 little endian'
```

## related

- [pe-signature](https://github.com/vweevers/pe-signature)
- [pe-signature-offset](https://github.com/vweevers/pe-signature-offset)

## install

With [npm](https://npmjs.org) do:

```
npm install pe-machine-type-descriptor
```

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers
