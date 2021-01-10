const router = require('express').Router();
const DrugModel = require('../models/drug.js');
const drugController = require('../controllers/drugs');
/**
 *
 * Read drug records page by page
 */
router.get('/:pageNumber', drugController['read']);
/**
 *
 * Attempts to delete drug with a specific ID
 */
router.delete('/:id', drugController['remove']);
/**
 *
 * Attempts to update a drug record
 */
router.post('/update/:id', drugController['update']);
/**
 *
 * Attempts to create a new drug record
 */
router.post('/create', drugController['create']);

module.exports = router;