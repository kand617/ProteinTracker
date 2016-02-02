/**
  * @module ProteinTrackerLib
  *  
  * TODO Enter a description
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController');


function initializer(){}

//Main functional components of ProteinTrackerLib
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of ProteinTrackerLib

module.exports = initializer;