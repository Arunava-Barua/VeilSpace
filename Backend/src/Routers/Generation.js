const express = require('express');
const generator = express.Router();
const {generateData}=require('../Controllers/GenerationController');
const {isAuthentication} = require('../../middleware/authentication');

generator.post('/v1/uploadExcel',isAuthentication,generateData);
// generator.get('/v1/getIDAndQR',isAuthentication,generateIDAndQR);


module.exports = generator