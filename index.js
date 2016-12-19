'use strict';

module.exports = function getType (value, type, description) {
  if (typeof value !== 'number') {
    throw new TypeError('Machine type must be a number')
  }

  const t = type || 'type'
      , d = description || 'description'

  switch(value) {
    case 0x0:    return { [t]: 'unknown',   [d]: 'The contents of this field are assumed to be applicable to any machine type' }
    case 0x1d3:  return { [t]: 'am33',      [d]: 'Matsushita AM33' }
    case 0x8664: return { [t]: 'amd64',     [d]: 'x64' }
    case 0x1c0:  return { [t]: 'arm',       [d]: 'ARM little endian' }
    case 0x1c4:  return { [t]: 'armnt',     [d]: 'ARM Thumb-2 little endian' }
    case 0xebc:  return { [t]: 'ebc',       [d]: 'EFI byte code' }
    case 0x14c:  return { [t]: 'i386',      [d]: 'Intel 386 or later processors and compatible processors' }
    case 0x200:  return { [t]: 'ia64',      [d]: 'Intel Itanium processor family' }
    case 0x9041: return { [t]: 'm32r',      [d]: 'Mitsubishi M32R little endian' }
    case 0x266:  return { [t]: 'mips16',    [d]: 'MIPS16' }
    case 0x366:  return { [t]: 'mipsfpu',   [d]: 'MIPS with FPU' }
    case 0x466:  return { [t]: 'mipsfpu16', [d]: 'MIPS16 with FPU' }
    case 0x1f0:  return { [t]: 'powerpc',   [d]: 'Power PC little endian' }
    case 0x1f1:  return { [t]: 'powerpcfp', [d]: 'Power PC with floating point support' }
    case 0x166:  return { [t]: 'r4000',     [d]: 'MIPS little endian' }
    case 0x5032: return { [t]: 'riscv32',   [d]: 'RISC-V 32-bit address space' }
    case 0x5064: return { [t]: 'riscv64',   [d]: 'RISC-V 64-bit address space' }
    case 0x5128: return { [t]: 'riscv128',  [d]: 'RISC-V 128-bit address space' }
    case 0x1a2:  return { [t]: 'sh3',       [d]: 'Hitachi SH3' }
    case 0x1a3:  return { [t]: 'sh3dsp',    [d]: 'Hitachi SH3 DSP' }
    case 0x1a6:  return { [t]: 'sh4',       [d]: 'Hitachi SH4' }
    case 0x1a8:  return { [t]: 'sh5',       [d]: 'Hitachi SH5' }
    case 0x1c2:  return { [t]: 'thumb',     [d]: 'Thumb' }
    case 0x169:  return { [t]: 'wcemipsv2', [d]: 'MIPS little-endian WCE v2' }

    default   :  throw new TypeError('Unknown machine type: ' + value)
  }
}
