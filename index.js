'use strict';
const got = require('got');
const cheerio = require('cheerio');
const popute = require('popute');
const shuffle = require('lodash.shuffle');

module.exports = () => {
	return popute()
		.then(urls => {
			return shuffle(urls)[0];
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
};
