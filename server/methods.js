Meteor.methods({
  likeRecipe: function(recipe_id, user_id, username) {

    Favorites.insert({id: recipe_id, userId: user_id, userName: username});
    console.log(Favorites.find({}).fetch({}));
        return false;
    }
});
