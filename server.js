'use strict';
const babelConfig = require('./babelrc');
require('@babel/register')(babelConfig);

module.exports = require('./server/server');