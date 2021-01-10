const createController = require('./create.js');
const updateController = require('./update.js');
const removeController = require('./remove.js');
const readController = require('./readByPage.js');

module.exports = {
	'read': readController,
	'update': updateController,
	'remove': removeController,
	'create': createController
};