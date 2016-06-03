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
    console.log('Created New instance of Vehicle');
  },
  toString: function(){
    return JSON.stringify(this.toJSON());
  },
  dump: function(){
    console.log(this.toString());
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
var bayline = new Vehicle({
  model: 'xg3',
  length: 50
});

bayline.type = 'boat';

console.log(ford.type);
console.log(bayline.type);

bayline.model = 'xg3';
bayline.length = 50;
console.log(bayline.toString());

//bicycle inherits from vehicle

var Bicycle = Vehicle.extend({});
console.log(Bicycle.question());
var schwin = new Bicycle({
  forks: 'fixed'
});

console.log(schwin.toString());
console.log('schwin is instance of Bicyle', schwin instanceof Bicycle);
console.log('schwin is instance of Vehicle', schwin instanceof Vehicle);
console.log('schwin is instance of Backbone.Model', schwin instanceof Backbone.Model);
schwin.dump();

//using set
schwin.set('color', 'grey');
schwin.set({
  length: 56,
  height: 48
});
schwin.dump();

//using get and escape
var $body = $('body');
$body.append(schwin.get('color'));
schwin.set('html', '<h1>Hello World</h1>');
$body.append(schwin.escape('html'));
$body.append(schwin.get('html'));

//using has--returns true if property or method is native to instance
console.log(schwin.has('toString'));
console.log(schwin.has('question'));