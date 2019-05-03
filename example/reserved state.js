const log = require('../index')()

log.register('request', {
  hello: '（￣︶￣）↗ Hello World！',
  downloading:  data => `${data.frame} downloading data from a remote server`,
  completed: '√ download completed',
})


// 状态更换后，保留这条消息
log.request.hello(true)
setTimeout(() => log.request.downloading(), 500)
// 这一条也会被保留
// 因为状态会一直被持续
setTimeout(() => log.request.completed(), 2000)
