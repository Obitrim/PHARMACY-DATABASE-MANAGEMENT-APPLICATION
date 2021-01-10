const DrugModel = require('../../models/drug.js');

module.exports = (req, res) => {
	let { id } = req.params;
	console.log(id);
	if (!id){
		return res.status(400).json({
			success: false,
			msg: 'Invalid id provided'
		});
	}
	DrugModel.findByIdAndDelete(id, (err, data) => {
		if(err) return res.status(500).json({ success: false, msg: err.message });
		res.status(200).json({
			success: true, msg: 'Recored deleted successfully successfully'
		})
	})
};