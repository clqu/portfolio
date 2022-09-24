const clquConfig = require('../../clqu.config');
const { Softwareer } = require('@softwareer/node');
const softwareer = new Softwareer(clquConfig.softwareerKey);

module.exports = softwareer;