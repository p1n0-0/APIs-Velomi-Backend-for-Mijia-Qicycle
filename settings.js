// Settings file to APIs Velomi Backend

// Mode strict
"use strict";

// Settings
module.exports = {
    proxy: {
        url:'app-apis.velomi.com',
        options: {
            https: false,
            limit: '1mb'
        }
    },
    ota: {
        bms24: {
            url:"http://app-apis.velomi.com/files/bms/otafile_017024022.bin",
            md5:"897bd1a9ef27ab5eba0fcd665b1f6295",
            type:"bms",
            hardware:18,
            software:24,
            eeprom:23,
            ticket:"BMS 24 Update.",
            remark:"BMS 24 Update.",
            sort:0
        },
        mc15: {
            url:"http://app-apis.velomi.com/files/mc/otafile_005015000.bin",
            md5:"4654a01b58ff7225c6135aa561aefb15",
            type:"mc",
            hardware:5,
            software:15,
            eeprom:0,
            ticket:"MC 15 Update. Max 20km/h",
            remark:"MC 15 Update. Max 20km/h",
            sort:0
        },
        mc17: {
            url:"http://app-apis.velomi.com/files/mc/otafile_005017000.bin",
            md5:"fa7ebc569a958df8147b23027bd0c7ba",
            type:"mc",
            hardware:5,
            software:17,
            eeprom:0,
            ticket:"MC 17 Update. Max 25km/h",
            remark:"MC 17 Update. Max 25km/h",
            sort:0
        },
        mc19: {
            url:"http://app-apis.velomi.com/files/mc/otafile_005019000_cf.bin",
            md5:"eec249c636c7e01a74ddd6e7350080ef",
            type:"mc",
            hardware:5,
            software:19,
            eeprom:0,
            ticket:"MC 19 Update. Max 29km/h",
            remark:"MC 19 Update. Max 29km/h",
            sort:0
        }
    }
};
