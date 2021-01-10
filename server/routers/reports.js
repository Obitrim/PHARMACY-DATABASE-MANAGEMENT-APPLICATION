const router = require('express').Router();

router.get('/', (req, res) => {
	res.json({ success: true, msg: 'Getting reports' });
});

router.post('/create', (req, res) => {
	res.json({ success: true, msg: 'Report created successfully' });
});

router.delete('/:id', (req, res) => {
	res.json({ success: true, msg: 'Report deleted successfully' });
})

module.exports = router;