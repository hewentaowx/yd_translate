# 基于Nodejs命令行终端的有道翻译脚本

# 该项目本意只是为了方便大家命令行翻译，运行两三年没有问题，但是最近遇到恶意的行为导致有道账号内充值的钱都刷完了，目前项目已弃用

![](https://img.shields.io/badge/node-%3Ev8.0.0-blue.svg)
![](https://img.shields.io/badge/npm-v6.1.0-blue.svg)
![](https://img.shields.io/badge/test-invalid-lightgrey.svg)

![img](https://github.com/hewentaowx/yd_translate/blob/master/example.gif)
### 项目说明

  - 写这个翻译脚本的初衷是每次需要定义变量的时候都要去网页翻译觉得很烦很烦，后来狠下心就想写一个基于命令行的翻译脚本，于是花了一天时间然后就写出来了，可能代码很丑但是将就用，已经发到npm上了，目前支持汉英互翻，准备慢慢迭代😄

### 使用说明
  ```code
  yarn global add yd_translate
  或者
  npm install -g yd_translate
  ```

  - 英语翻译为汉语
  - ts country 
    - ⠴ 正在查询中,请稍候...
    - n. 国家，国土；国民；乡下，农村；乡村；故乡 adj. 祖国的，故乡的；地方的，乡村的；国家的；粗鲁的；乡村音乐的
  
  - 汉语翻译为英语
  - ts 国家
    - ⠸ 正在查询中,请稍候...
    - state nation country nationality

### 附
  - 使用了tj大神的commander模块
  - 后续准备自定义打印的颜色
  - [有道翻译API](http://ai.youdao.com/docs/doc-trans-api.s#p01)
