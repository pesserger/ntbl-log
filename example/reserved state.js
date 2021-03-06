const log = require('../index')()

// 在实例化之前，注册一个消息
log.register('request', {
  downloading: {
    name: 'flip',   // 使用 flip 动画
    interval: 50,   // 更快一些
    color: 'gray',  // 灰色！
    text: data => `${data.frame} downloading data from a remote server`
  },
  completed: '√ download completed',
})



// 使用
log.request.downloading()
setTimeout(() => log.request.completed(), 2000)

