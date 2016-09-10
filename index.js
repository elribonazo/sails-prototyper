var util 	   = require('util');
var _          = require('lodash');

function Prototyper() { 
    if (!(this instanceof Prototyper)) { 
        return new Prototyper();
    }
    this.object = {};
};

Prototyper.prototype.extend = function(objectName, objectData){
	if(this.object[objectName] === undefined){
		if(typeof objectData === "function"){
			this.object[objectName] = objectData;
		}else{
			this.object[objectName] = function(){
				return objectData;
			};
		}
	}
};
Prototyper.prototype._ = function(object){
	return _.merge({},this.object,object);
};

module.exports = Prototyper;
