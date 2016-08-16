'use strict';
const got = require('got');
const cheerio = require('cheerio');
const popute = require('popute');
const shuffle = require('array-shuffle');

module.exports = () =>
	popute()
		.then(urls => shuffle(urls)[0])
		.then(url => got(url))
		.then(res => cheerio.load(res.body)('#extMdlSeriesMngrArticle-inner78 img').attr('src'))
		.then(url => got(url, {encoding: null}))
		.then(res => res.body);
