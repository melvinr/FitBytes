
#Real-Time Web
##FitBytes

##Exercise 4
Describe what your application should do and which aspects will be reactive.

##Live
You can find the application live at [fitbytes.mreijnoudt.com](fitbytes.mreijnoudt.com).

###Create fitness recipes
The application will allow users to create recipes for fitness purposes. When creating a recipe, it will be important to specify the diet type it is meant for. The three options will be: bulking, cutting and maintaining. When recipes have been created they are added to the homepage which contains a live feed of newly created recipes.

####Target Audience
FitnessByte's target audience will be people who exercise and have a certain nutrition and/or weight goal. For example, are the recipes meant for 'cutting' or 'bulking'. But of course, the application can also be useful to people who just need some inspiration for dinner.

####MVP
- A homepage which contains a feed of newly added recipes.
- The ability to create recipes.
- The possibility of creating a user account, so users are able to see who created a certain recipe.

####Wishlist
- Keeping track of your fitness goals.
- Creating a group recipe with friends/training partners. Perhaps you want to eat rice, but don't know what else you want to add to your recipe. Let your friends add ingredients for you.
- Add feedback when a certain nutritional value is excessively present in a recipe.
- Add a nutrition API to show an ingredient's corresponding nutritional values.
- Dynamically created detail pages.

####Reactive components
- When a recipe has been created it will be added to the live feed on the homepage.
- When someone likes a recipe, the count will automatically be updated.

###App Structure
```
FitBytes
│
│
└───client
│    │ main.html
│    │ main.css
│    │ main.js
│    │
│    ├───components
│    │   
│    │  
│    ├───layouts  
│    │		detailrecipe.html
│    │		home.html
│    │		recipecreator.html
│    │
│    ├───partials
│    │		header.html
│    │		nav.html
│    │
│    ├───recipes
│    │		newrecipe.html
│    │		recipe.html
│    │
│    ├───subscriptions
│    │		subscriptions.js    
│       
└───server        
│    │  main.js
│    │  methods.js
│    │  publications.js 
│
└───lib        
│    │  routes.js
│    │  
│    ├───collections
│    │		comments.js
│    │		favorites.js
│    │		recipes.js
│    │		
│       
└───public
│    │  
│    ├───images
│    │		bulking.png
│    │		cutting.png
│    │		maintain.png
│    │	      
```
I came across this file structure whilst checking out some meteor tutorials. It seemed like a good way to structure a meteor application, since it is fairly straightforward.

##User test
I had one person, who has no real knowledge about webdevelopment, test the application. The results were pretty good. The application was straightforward and pretty easy to use. But there were some points the application could improve:

- The buttons on the recipe feed don't work. This is not as expected.
- The styling could be better, it's not really appealing to the eye.
- The login form extends outside the application's view.

These are problems I was already aware of and updates will be done to fix them.