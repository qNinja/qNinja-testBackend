'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3003;


// API ROUTES ===========================================
var router = express.Router();

// test
router.get('/', function(req, res) {
  res.json({ message: 'Devlopment qNinja Siebel ASP Server Online' });
  res.status(200).end();
});

// assignSR.asp?sr=<sr>&owner=<TSE>
router.get('/assignSR.asp', function(req, res) {
	if ( req.query.owner === undefined || req.query.owner === 'undefined') {
		console.log('ERROR: undefined owner');
		res.status(400).json({ error: 'Invalid owner was specified (or not specified)' });
	}
	else if ( req.query.sr === undefined ) {
		console.log('ERROR: undefined SR')
		res.status(400).json({ error: 'Invalid SR was specified (or not specified)' });
	}
	else {
		console.log('SR ' + req.query.sr + ' assigned to ' + req.query.owner);
		res.json({ message: 'SR ' + req.query.sr + ' assigned to ' + req.query.owner });
		res.status(200).end();
	}
});

// getAllSRsInQueue.asp
var allSRs = require('./app/AllSRsInQueue.json');

router.get('/getAllSRsInQueue.asp', function(req, res) {
  res.json(allSRs);
  res.status(200).end();
});

// Will use this if I want to get specific information on SRs later using wallboard formatting.
// getSRinfo.asp?sr=<sr>
// var sr1 = require('./app/sr1.json'),
// 	sr2 = require('./app/sr2.json'),
// 	sr3 = require('./app/sr3.json'),
// 	sr4 = require('./app/sr4.json'),
// 	sr5 = require('./app/sr5.json'),
// 	sr6 = require('./app/sr6.json'),
// 	sr7 = require('./app/sr7.json'),
// 	sr8 = require('./app/sr8.json'),
// 	sr9 = require('./app/sr9.json');

router.get('/getSRinfo.asp', function(req, res) {
	switch ( req.query.sr ) {
		// case "00000000001":
		// 	res.json(sr1);
		// 	res.status(200).end();
		// 	break;
		// case "00000000002":
		// 	res.json(sr2);
		// 	res.status(200).end();
		// 	break;
		// case "00000000003":
		// 	res.json(sr3);
		// 	res.status(200).end();
		// 	break;
		// case "00000000004":
		// 	res.json(sr4);
		// 	res.status(200).end();
		// 	break;
		// case "00000000005":
		// 	res.json(sr5);
		// 	res.status(200).end();
		// 	break;
		// case "00000000006":
		// 	res.json(sr6);
		// 	res.status(200).end();
		// 	break;
		// case "00000000007":
		// 	res.json(sr7);
		// 	res.status(200).end();
		// 	break;	
		// case "00000000008":
		// 	res.json(sr8);
		// 	res.status(200).end();
		// 	break;	
		// case "00000000009":
		// 	res.json(sr9);
		// 	res.status(200).end();
		// 	break;		
		default:
			res.json({message: 'ERROR: Please define an SR as a URL Parameter' });
			res.status(400).end();
	}
});

app.use('/', router);

app.listen(port);
console.log('qNinja-testBackend on port ' + port);
