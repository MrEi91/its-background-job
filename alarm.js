'use strict'

var cron = require('node-cron')

cron.schedule('* * * * *', function () {
  console.log('running a task every minute')
})
