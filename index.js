'use strict';
const got = require('got');
const cheerio = require('cheerio');
const popute = require('popute');

module.exports = () =>
	popute()
		.then(urls => {
			return urls[Math.floor(Math.random() * urls.length)];
		}).then(url =>
			got(url).then(res => {
				const $ = cheerio.load(res.body);
				return $('#extMdlSeriesMngrArticle-inner78 img').attr('src');
			})
		).then(url =>
			got(url, {encoding: null}).then(res => {
				return res.body;
			})
		).catch(e => {
			console.log(e);
		});
