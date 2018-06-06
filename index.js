'use strict';
const got = require('got');
const cheerio = require('cheerio');
const popute = require('popute');
const shuffle = require('array-shuffle');

module.exports = () =>
	popute()
		.then(urls => got(shuffle(urls)[0]))
		.then(res =>
			cheerio
				.load(res.body)('#extMdlSeriesMngrArticle-inner78 img')
				.attr('src')
		)
		.then(result =>
			Buffer.from(result.replace(/^data:\w+\/\w+;base64,/, ''), 'base64')
		);
