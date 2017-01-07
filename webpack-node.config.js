const conf = require('./webpack.config');

conf.entry = { parseGnu: ["./src/parse-gnu-units"] };
conf.target = 'node';
module.exports = conf;