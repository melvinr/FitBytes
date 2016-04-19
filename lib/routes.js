FlowRouter.route('/', {
    name: 'home',
    action() {
      BlazeLayout.render('home');
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
      BlazeLayout.render('main', {main: 'recipeform'})
    }
});


FlowRouter.route('/recipe-create', {
    name: 'recipe-create',
    action() {
      BlazeLayout.render('recipeCreator', {main: 'Recipes'})
    }
});
