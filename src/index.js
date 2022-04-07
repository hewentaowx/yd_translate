#!/usr/bin/env node

const program = require('commander');
const request = require('request');
const qs = require('querystring');
const crypto = require('crypto');
const ora = require('ora');
const config = require('./config');

program
  .version('0.2.8', '-v, --version, --VERSION')
	.description('💻 您好，欢迎使用SonderzzZ的有道翻译脚本，目前只支持中英文互译，谢谢您的支持~🍺')
	.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}

const spinner = ora('正在查询中,请稍候...').start();
spinner.color = 'green';

const word = process.argv.slice(2).join(' ');

// 将需要翻译的文本转换为 UTF-8 编码
const q_utf8 = Buffer.from(word).toString();
const url = config.url;
const appKey = config.appKey;
const secret = config.secret;
const from = config.from;
const to = config.to;
const salt = 2;

// 加密生成sign
const md5 = crypto.createHash('md5');
md5.update(appKey + q_utf8 + salt + secret);
const sign = md5.digest('hex').slice(0, 32).toUpperCase();

// 组合参数为options
const options = {
	q: q_utf8,
	appKey,
	from,
	to,
	salt,
	sign,
};

const new_options = qs.stringify(options);
const new_url = `${url}?${new_options}`;

request({
	url: new_url,
	method: 'POST',
	json: true,
}, (err, res, body) => {
    if (body.errorCode == 202) {
		console.log('\n', "秘钥换了哎大哥，您在翻译书吗?一天跑了50块！");
		spinner.stop();
    } else if (err && res.statusCode !== 200) {
		console.error(`好像出了一点点小意外￣□￣｜|...${err.message}`);
	} else if (body.basic) {
		console.log('\n', (body.basic.explains).join('; '));
		spinner.stop();
	} else {
		console.log('\n', (body.translation).join('; '));
		spinner.stop();
	}
});
