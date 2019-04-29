# log

一个内置进度动画的命令行文本输入工具。

[![GitHub](https://img.shields.io/badge/GitHub-yeshimei-green.svg)](https://github.com/yeshimei/ntbl-log.git) [![npm](https://img.shields.io/npm/v/@ntbl/log.svg)](https://www.npmjs.com/package/@ntbl/handle) [![MIT](https://img.shields.io/npm/l/express.svg)](https://github.com/yeshimei/ntbl-log.git)

# Installation

```bash
$ npm i @ntbl/log --save
```

# Usage

```js
const Log = require('@ntbl/log')

const log = Log({
  name: 'dots',   // 动画类型
  speed: 80,   // 动画速度
  color: 'green'  // 
})

// 开始
log.start(frame => `${frame} 下载中...`)
// 两秒后，停止（默认保留动画最后一帧）

setTimeout(() => log.stop(), 2000)

// 停止，并清除
log.stop(true)


// 在同一行打印文本
log.log('在一行覆盖式输入文本')
// 清除
log.clear()
```

# Frames

log 内置了所有 [cli-spinners](https://github.com/sindresorhus/cli-spinners) 命令行进度动画。

```js
// 默认为 dots
Log('dots')
// 或者
Log({
  name: 'dots'
})
```
