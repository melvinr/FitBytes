import {
    Template
}
from 'meteor/templating';
import {
    ReactiveVar
}
from 'meteor/reactive-var';

import { Accounts } from 'meteor/accounts-base';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Template.recipes.helpers({
    recipes: function() {
      return Recipes.find({}, {
        sort: {createdAt: -1}
      });
    }
});

Template.recipe.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('recipes', id);
  });
});

Template.recipe.helpers({
  isTrue: function(){
      if(Meteor.userId() === this.userId){
          return true;
      }
      else{
          return false;
      }
  },
  favoriteCount: function() {
    return Favorites.find({id: this._id}).count()
  },
  thisRecipe: function() {
    var id = FlowRouter.getParam('id');
    var recipe = Recipes.findOne({
      _id: id
    }) || {};
    return recipe;
  }
});

Template.recipe.events({
    "click .remove-recipe": function(event){

        Recipes.remove(this._id);
        return false;
    },

    "click .likeIt": function(event){

      console.log(" click");
      Meteor.call("likeRecipe", this._id, Meteor.userId(), Meteor.user().username);
      }
});
