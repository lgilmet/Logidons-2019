var fs = require('fs');

var settings;
console.log("Loading settings..");
var raw = fs.readFileSync('./config.json');
settings = JSON.parse(raw);
console.log("Settings loaded.");

module.exports = settings;