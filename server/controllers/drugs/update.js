const DrugModel = require('../../models/drug.js');

module.exports = (req, res) => {
	let { id } = req.params;
	let { drug } = req.body;

	DrugModel.findByIdAndUpdate(id, { new: true }, { ...drug }, (err, drug) => {
		if (err){
			return res.status(500).json({
				success: false, data: null, msg: err.message
			});
		}
		res.status(200).json({
			success: true, data: drug, msg: 'Updated resource successfully'
		});
	});
};