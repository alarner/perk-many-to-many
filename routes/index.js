let express = require('express');
let router = express.Router();
let College = require('../models/College');
let Application = require('../models/Application');

router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Colleges & Applications'
	});
});

router.get('/colleges', function(req, res, next) {
	let college = new College();
	college.fetchAll().then(colleges => {
		res.render('colleges', {
			title: 'Colleges',
			colleges: colleges
		});
	});
});

router.get('/applications', function(req, res, next) {
	let application = new Application();
	application.fetchAll().then(apps => {
		res.render('applications', {
			title: 'Applications',
			applications: apps
		});
	});
});

router.get('/applications/:id', function(req, res, next) {
	new Application({id: req.params.id}).fetch({withRelated: ['colleges']}).then(application => {
		res.render('application', {
			application: application
		});
	});
});

router.get('/colleges/:id', function(req, res, next) {
	new College({id: req.params.id}).fetch({withRelated: ['applications']}).then(college => {
		res.render('college', {
			college: college
		});
	});
});

module.exports = router;
