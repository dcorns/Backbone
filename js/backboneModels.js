/**
 * backboneModels
 * Created by dcorns on 6/1/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

//Inheritance
var Vehicle = Backbone.Model.extend({
  type: 'car'
});

var ford = new Vehicle();
var bayline = new Vehicle();

bayline.type = 'boat';

console.log(ford.type);
console.log(bayline.type);

