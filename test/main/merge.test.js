var request = require('supertest');
var assert = require('assert');

var prototype = require('../../index.js');
var UserPrototype = require("../prototypes/UserPrototype.js");


describe('Sails prototyper', function () {

    describe('Basic tests', function () {
        it("Merge two objects into one class", function (callback) {
        	
            var User = new prototype();
            User.extend('getAttribute', function(attribute){
                return this.attributes[attribute];
            });
        	var user = User._(UserPrototype);
        	assert(user.getAttribute('name').type === UserPrototype.attributes.name.type,true);

        	callback();
        });
    });


});