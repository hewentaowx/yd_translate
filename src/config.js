require('dotenv').config();

module.exports = {
  url: 'https://openapi.youdao.com/api',
  appKey: process.env.APPKEY || 'appKey',
  secret: process.env.SECRET || 'secret',
  from: ['EN', 'zh-CHS'],
  to: ['EN', 'zh-CHS']
}