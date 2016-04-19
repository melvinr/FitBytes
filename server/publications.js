Meteor.publish('favorites', function() {
  return Favorites.find({});
});

Meteor.publish('recipes', function() {
  return Recipes.find({}, {
    sort: {createdAt: -1}
  });
});

Favorites.remove({})
