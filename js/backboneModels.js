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

//model events
schwin.on('change', function(){
  console.log('schwin data changed', schwin.dump());
});

schwin.on('change:height', function(){
  console.log('schwin height is now:', schwin.get('height'));
});

schwin.set('color', 'red');
schwin.set('height', '300');
schwin.set({
  color: 'green',
  height: 48
});

//custom events
//Creating a custom event on a new var that is not a backbone object
var noBackbone = _.extend({}, Backbone.Events);
//note that using : is not required but is a best practice for name spacing events
noBackbone.on('noBackbone:break', function(e){
  console.log('Backbone broke at', e.mile);
});
noBackbone.trigger('noBackbone:break', {mile: 34});
//Adding event to backbone model
schwin.on('bike:break', function(e){
  console.log('bike brake ', e.state);
});
schwin.trigger('bike:break', {state: 'on'});
schwin.trigger('bike:break', {state: 'off'});
//Turn events off
noBackbone.off('noBackbone:break');
schwin.off('bike:break');

//id and cid once a model has been saved to the server, it will have an id, until then it only has a cid
console.log(schwin.isNew(), schwin.id, schwin.cid);