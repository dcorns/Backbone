/**
 * backboneModels
 * Created by dcorns on 6/1/16
 * Copyright © 2016 Dale Corns
 */
'use strict';

//Inheritance and a class function
var Vehicle = Backbone.Model.extend({
  type: 'car',
  initialize: function(){
    console.log('initialize runs when a new object is instantiated from the constructor');
  }
},
//class properties come after the instance object
  {
    question: function(){
      return 'What is "this" in this case?';
    }
  }
);

console.log(Vehicle.question());

var ford = new Vehicle();
var bayline = new Vehicle();

bayline.type = 'boat';

console.log(ford.type);
console.log(bayline.type);
