Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId) {
        return !!userId;
    },
    remove: function(userId) {
        return !!userId;
    }
})

Ingredient = new SimpleSchema ({
    name: {
        type: String
    },
    amount: {
        type: String
    }
})

RecipeSchema = new SimpleSchema({
    name: {
      type: String,
      label: "Name"
    },
    description: {
      type: String,
      label: "Description"
    },
    calories: {
      type: String,
      label: "Calories"
    },
    ingredients: {
      type: [Ingredient]
    },
    author: {
      type: String,
      label: "Author",
      autoValue: function() {
          return Meteor.user().username
      },
      autoform: {
        type: "hidden"
      }
    },
    dietType: {
        type: String,
        label: "Diet type",
        autoform: {
          options: function () {
            return [
            {label: "Cutting", value: "/images/cutting.png"},
            {label: "Bulking", value: "/images/bulking.png"},
            {label: "Maintaining", value: "/images/maintain.png"}
          ]
          }
        }
    },
    createdAt: {
      type: Date,
      label: "Created At",
      autoValue: function() {
        return new Date()
      },
      autoform: {
        type: "hidden"
      }
    },
    userId: {
      type: String,
      label: "user",
      autoValue: function() {
        return Meteor.userId()
      },
      autoform: {
        type: "hidden"
      }
    }
});

Recipes.attachSchema( RecipeSchema );
