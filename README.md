# popute-random-img [![Build Status](https://travis-ci.org/akameco/popute-random-img.svg?branch=master)](https://travis-ci.org/akameco/popute-random-img)

> ポプテピピックの画像をランダムで取得

![screenshot](media/media.png)

## Installation

```
$ npm install popute-random-img
```

## CLI

```
$ ppt-img
```

## Usage

```js
const termImg = require('term-img');
const poputeRandomImg = require('popute-random-img');

poputeRandomImg().then(img => {
	termImg(img);
});
```

## License

MIT
