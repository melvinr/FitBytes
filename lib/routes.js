FlowRouter.route('/', {
    name: 'home',
    action() {
      BlazeLayout.render('home', {main: 'recipes'})
    }
});

FlowRouter.route('/recipe-create', {
    name: 'recipe-create',
    action() {
      BlazeLayout.render('recipeCreator', {main: 'NewRecipe'})
    }
});

// FlowRouter.route('/recipe', {
//     name: 'recipedetail',
//     action() {
//       BlazeLayout.render('detailRecipe', {main: 'recipe'})
//     }
// });

FlowRouter.route('/recipe/:id', {
    name: 'recipedetail',
    action: function(params, queryParams) {
      BlazeLayout.render('detailRecipe', {main: 'recipe'})
    }
});
