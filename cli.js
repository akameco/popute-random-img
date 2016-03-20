#!/usr/bin/env node
'use strict';
const termImg = require('term-img');
const poputeRandomImg = require('./');

poputeRandomImg().then(img => {
	termImg(img, {height: '90%'});
});
