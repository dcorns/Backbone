/**
 * rectangle
 * Created by dcorns on 6/1/16
 * Copyright © 2016 Dale Corns
 */
'use strict';
(function(){
  var Rectangle = Backbone.Model.extend({});
  var RectangleView = Backbone.View.extend({
    tagName: 'div',
    className: 'rectangle',
    events: {
      'click': 'moveRight'
    },
    render: function(){
      this.setDimensions();
      this.setPosition();
      this.setColor();
      return this;
    },
    setDimensions: function(){
      this.$el.css({
        width: this.model.get('width') + 'px',
        height: this.model.get('height') + 'px'
      });
    },
    setPosition: function(){
      var position = this.model.get('position');
      this.$el.css({
        left: position.x,
        top: position.y
      });
    },
    setColor: function(){
      this.$el.css('background-color', this.model.get('color'));
    },
    moveRight: function () {
      this.$el.css('left', this.$el.position().left + 10);
    }
  });

  var myRectangles = [new Rectangle({
    width: 100,
    height: 60,
    position: {
      x: 300,
      y: 150
    },
    color: '#ff0000'
  }),
    new Rectangle({
      width: 10,
      height: 5,
      position: {
        x: 300,
        y: 100
      },
      color: '#00ff00'
    }),
    new Rectangle({
      width: 50,
      height: 30,
      position: {
        x: 50,
        y: 10
      },
      color: '#0000ff'
    }),
    new Rectangle({
      width: 25,
      height: 10,
      position: {
        x: 40,
        y: 40
      },
      color: '#ff00fd'
    })];

  _(myRectangles).each(function(mdl){
    $('div#canvas').append(new RectangleView({model: mdl}).render().el);
  });
  
})();

