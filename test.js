'use strict';

const test = require('tape')
    , machineType = require('.')

test('basic', function (t) {
  t.same(machineType(0x9041), { type: 'm32r', description: 'Mitsubishi M32R little endian' })
  t.same(machineType(0x1a2, 't', 'd'), { t: 'sh3', d: 'Hitachi SH3' })
  t.end()
})

test('throws if input is not number', function (t) {
  t.plan(1)

  try {
    machineType('1')
  } catch (err) {
    t.is(err && err.message, 'Machine type must be a number')
  }
})

test('throws if value is not a known type', function (t) {
  t.plan(1)

  try {
    machineType(1)
  } catch (err) {
    t.is(err && err.message, 'Unknown machine type: 1')
  }
})
