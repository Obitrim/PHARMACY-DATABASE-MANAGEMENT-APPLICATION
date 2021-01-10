const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ success: true, msg: 'Getting all receipts' });
});

router.post('/create', (req, res) => {
	res.json({ success: true, msg: 'receipt generated successfully' });
});

module.exports = router;