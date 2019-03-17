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
  const bmsHardware = req.body.bmsHardware || req.param.bmsHardware || req.query.bmsHardware || 18;
  const bmsSoftware = req.body.bmsSoftware || req.param.bmsSoftware || req.query.bmsSoftware || 24;
  const mcHardware = req.body.mcHardware || req.param.mcHardware || req.query.mcHardware || 5;
  const mcSoftware = req.body.mcSoftware || req.param.mcSoftware || req.query.mcSoftware || 15;

  let files = [];
  let order = 1;

  if (bmsHardware === 18 && bmsSoftware && !isNaN(bmsSoftware) && bmsSoftware < 24) {
    bms24.sort = order++; // Sort
    files.push(bms24); // Update to bms24
  }

  if (mcHardware === 5 && mcSoftware === 15) {
    mc17.sort = order++; // Sort
    files.push(mc17); // Update to mc17 from mc15
  }

  if (mcHardware === 5 && mcSoftware === 17) {
    mc19.sort = order++; // Sort
    files.push(mc19); // Update to mc19 from mc17
  }

  if (mcHardware === 5 && mcSoftware === 19) {
    mc17.software = 21; // Set fake software 21 to cheat app.
    mc17.sort = order++; // Sort
    files.push(mc17); // Downgrade to mc17 from mc19
  }

  if (mcHardware === 5 && order === 1) { // None of the above options? Set MC15
    mc15.sort = order; // Sort
    files.push(mc15); // Downgrade to mc15 from ????
  }

  // Render JSON
  return res.json({ ota: files });

});

module.exports = router;
