const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

router.post(
	'/',
	[
		check('name', 'name is required')
			.not()
			.isEmpty(),
		check('email', 'include a valid email').isEmail(),
		check('password', 'pwd must be > 6 chars').isLength({ min: 6 })
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send('passed');
	}
);

module.exports = router;
