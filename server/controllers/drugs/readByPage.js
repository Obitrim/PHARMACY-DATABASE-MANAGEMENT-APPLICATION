const DrugModel = require('../../models/drug.js');

module.exports = (req, res) => {
	const PAGE_SIZE = 20; // 20 results per page
	let { pageNumber } = req.params;
	pageNumber = parseInt(pageNumber);

	if (pageNumber < 0){
		pageNumber = 1;
	}

	if (pageNumber === 1){
		DrugModel.find({}, (err, drugs) => {
			if (err){
				return res.status(500).json({ success: false, msg: 'Failed to get drug data' });
			}
			let pageCount = Math.floor(drugs.length / PAGE_SIZE);
			if (drugs.length % PAGE_SIZE) {
				pageCount++
			}
			res.status(200).json({ success: true, drugs, pageCount })
		})
	} else {
		DrugModel.find({}, (err, drugs) => {
			if (err) {
				return res.status(500).json({ success: false, msg: 'Failed to get drug data' });
			}
			res.status(200).json({ success: true, drugs })
		})
		.skip((pageNumber - 1) * PAGE_SIZE)
		.limit(PAGE_SIZE)
	}
};