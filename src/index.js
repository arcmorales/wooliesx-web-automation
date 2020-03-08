'use strict'
import Launcher from '@wdio/cli'

require('dotenv').config()

const conf = './wdio.conf.js'
const suite = process.argv[2] || ['default']

const wdio = new Launcher(conf, { suite: suite })

// Ensure required ENV vars are set
const requiredEnv = [
  'USERNAME',
  'PASSWORD'
]
const unsetEnv = requiredEnv.filter((env) => !process.env[env])

if (unsetEnv.length > 0) {
  console.error('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']')
  process.exit()
}

wdio.run().then((code) => {
  process.exit(code)
}, (error) => {
  if (!error) {
    process.exit(0)
  } else {
    console.error('Launcher failed to start the test', error.stacktrace)
    process.exit(1)
  }
})
