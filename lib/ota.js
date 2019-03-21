// OTA file lib to APIs Velomi Backend

// Mode strict
'use strict';

// Obtain ota settings
const { bms24, mc15, mc17, mc19 } = require('../settings').ota;

const getOTAs = (bmsSoftware, mcSoftware) => {

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
        mc17.sort = order; // Sort
        files.push(mc17); // Downgrade to mc17 from mc19
    }

    return files;

};

module.exports.getOTAs = getOTAs;
