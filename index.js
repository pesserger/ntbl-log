const cliSpinners = require('cli-spinners')
const logUpdate = require('log-update')
const chalk = require('chalk')

function Log(options = {}) {
  if (!(this instanceof Log)) return new Log(options)

  if (typeof  options === 'string') {
    options = {
      name: options
    }
  }

  this.name = options.name || 'dots'
  this.color = options.color || 'green'
  this.spinner = cliSpinners[this.name]
  this.frames = this.spinner.frames
  this.speed = options.speed || this.spinner.interval
  this.index = 0
  this.timer = null
}

Log.prototype = {
  constructor: Log,
  start (fn) {
    this.stop()
    this.timer = setInterval(() => this.log(fn(chalk[this.color](this.frames[this.index++ % this.frames.length]))), this.speed)
  },

  stop (clear) {
    clearInterval(this.timer)
    if (clear) this.clear()
  },

  clear () {
    logUpdate.clear()
  },

  log (text) {
    logUpdate(text)
  }
}


const log = Log({
  name: 'dots',
  speed: 80,
  color: 'green'
})

// 开始
log.start(frame => `${frame} 下载中...`)
// 两秒后，停止
setTimeout(() => log.stop(true), 2000)
