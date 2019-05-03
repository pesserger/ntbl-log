const cliSpinners = require('cli-spinners')
const logUpdate = require('log-update')
const chalk = require('chalk')

module.exports = Log


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
  this.interval = options.interval || this.spinner.interval
  this.index = 0
  this.timer = null
}

Log.prototype = {
  constructor: Log,
  start (fn) {
    this.stop()
    const _ = () => this.log(fn({
      frame: chalk[this.color](this.frames[this.index++ % this.frames.length])
    }))
    // 立即显示
    _()
    this.timer = setInterval(_, this.interval)
  },

  stop (clear) {
    clearInterval(this.timer)
    if (!clear) this.clear()
  },

  clear () {
    logUpdate.clear()
  },

  log (text) {
    logUpdate(text)
  }
}