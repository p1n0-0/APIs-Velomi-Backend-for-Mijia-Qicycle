// Bike router file to APIs Velomi Backend

// Mode strict
'use strict';

// Dependencies
const router = require('express').Router();
const { getOTAs } = require('../lib/ota');

/* GET List OTA files avaliable. */
router.get('/ota.api', function(req, res, next) {

  // Get params
  const bmsSoftware = parseInt(req.body.bmsSoftware || req.param.bmsSoftware || req.query.bmsSoftware || 24);
  const mcSoftware = parseInt(req.body.mcSoftware || req.param.mcSoftware || req.query.mcSoftware || 17);

  // Render JSON
  return res.json({ ota: getOTAs(bmsSoftware, mcSoftware) });

});

/* POST List OTA files avaliable. */
router.post('/ota.api', function(req, res, next) {

  // Get params
  const bmsSoftware = parseInt(req.body.bmsSoftware || req.param.bmsSoftware || req.query.bmsSoftware || 24);
  const mcSoftware = parseInt(req.body.mcSoftware || req.param.mcSoftware || req.query.mcSoftware || 17);

  // Render JSON
  return res.json({ ota: getOTAs(bmsSoftware, mcSoftware) });

});

module.exports = router;
