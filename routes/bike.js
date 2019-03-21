// Bike router file to APIs Velomi Backend

// Mode strict
'use strict';

// Dependencies
var express = require('express');
var router = express.Router();

// Obtain ota settings
const { bms24, mc15, mc17, mc19 } = require('../settings').ota;

/* POST List OTA files avaliable. */
router.post('/ota.api', function(req, res, next) {

  // Get params
  const bmsSoftware = parseInt(req.body.bmsSoftware || req.param.bmsSoftware || req.query.bmsSoftware || 24);
  const mcSoftware = parseInt(req.body.mcSoftware || req.param.mcSoftware || req.query.mcSoftware || 17);

  let files = [];
  let order = 1;

  if (bmsSoftware && !isNaN(bmsSoftware) && bmsSoftware < 24) {
    bms24.sort = order++; // Sort
    files.push(bms24); // Update to bms24
  }

  if (mcSoftware === 15) {
    mc17.sort = order++; // Sort
    files.push(mc17); // Update to mc17 from mc15
  }

  if (mcSoftware === 17) {
    mc19.sort = order++; // Sort
    files.push(mc19); // Update to mc19 from mc17
  }

  if (mcSoftware === 19) {
    mc17.software = 21; // Set fake software 21 to cheat app.
    mc17.sort = order++; // Sort
    files.push(mc17); // Downgrade to mc17 from mc19
  }

  // Render JSON
  return res.json({ ota: files });

});

module.exports = router;
