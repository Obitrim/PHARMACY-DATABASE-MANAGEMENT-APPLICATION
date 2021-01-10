const DrugModel = require('../../models/drug.js');

module.exports = (req, res) => {
	let data = req.body;
	DrugModel.create(data, (err, data) => {
		if (err){
			return res.status(500).json({
				success: false, data: null, msg: err.message
			});
		}
		return res.status(200).json({
			success: true, data, msg: 'Create drug resource successfully'
		});
	});
};