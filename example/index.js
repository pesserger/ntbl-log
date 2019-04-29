const Log = require('../index')
const log = Log({
  name: 'dots',
  speed: 80,
  color: 'green'
})

// 开始
log.start(frame => `${frame} 下载中...`)
// 两秒后，停止
setTimeout(() => log.stop(true), 2000)
