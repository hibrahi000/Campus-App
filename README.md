## The general outline of the backend and front end interactions

1. when the application loads the express server needs to run and then the react server needs to run in the client folder where it has its own package.json file
## 
2. in the back end side :: the first thing that runs is the server.js file
## 
3. in this file the required routes are imported from the routes folder and express is required so that we can tell express what to use with app.use
## 

4. In the routes folder you have multiple routes and each route is stated as a express route by the notation router.get ==> (i set router = express())
## 

5. in the middleware folder are all the functions that get passed into the routes so it can be easy to follow and also debug
## 

6. in the model folder are all the models that represent tables that are in the database-- these files will be use to reference the database for queries
## 

7. in the api folder are all the functions that are either database oriented or anything else so that the middleware doesnt become bloated 
## 

8. in the api/campusDB file it uses the model and creates async functions so all you have to do is pass in a table value for example getCampusById( this is where the campus id goes) and using a .then(campus) allows you to access that campus object
## 
