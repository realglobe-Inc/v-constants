'use strict'

const {Hostnames} = require('v-constants')

async function tryExample () {
  const {DEFAULT_HOSTNAME} = Hostnames
  console.log(DEFAULT_HOSTNAME)
}

tryExample().catch((err) => console.error(err))
