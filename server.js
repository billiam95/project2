//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const bodyParser = require(`body-parser`);
const God = require(`./models/gods.js`);
const godSeed = require(`./models/seed.js`);
require('dotenv').config();
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

// add seed data to databse
// God.create(godSeed, (err,data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(`Gods added to database!`)
//   }
// })

//___________________
// Routes
//___________________
//localhost:3000

//route updating the information from the edit fields
app.put(`/smite_compendium/:id` , (req, res) => {
  God.findByIdAndUpdate(req.params.id , req.body, {new:true} , (error, updatedModel) => {
    res.redirect(`/smite_compendium`)
  })
})

// route connecting edit form to editing god info page
app.get(`/smite_compendium/:id/edit`, (req, res) => {
  God.findById(req.params.id, (error, editGod) => {
    res.render(`edit.ejs`,
    {
      god: editGod
    })
  })
})

// // filter for Warriors only
app.get('/smite_compendium/warriors' , (req, res) => {
    God.find({class: "Warrior"} , (err, godWarrior) => {
        res.render(`index.ejs` ,
          {
            god: godWarrior
          }
        )
    })
});

// Route for showing home page
app.get('/smite_compendium' , (req, res) => {
    God.find({} , (err, allGods) => {
        res.render(`index.ejs` ,
          {
            god: allGods
          }
        )
    })
});

//route for deleting gods
app.delete(`/smite_compendium/:id`, (req,res) => {
  God.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect(`/smite_compendium`)
  })
})

//route for taking user to new.ejs page
app.get(`/smite_compendium/new` , (req,res) => {
  res.render(`new.ejs`)
})

// Route for god show page
app.get(`/smite_compendium/:id`, (req, res) => {
  God.findById(req.params.id, (error, foundGod) => {
    res.render(`show.ejs`,
    {
      god:foundGod
    })
  })
})

// posting new god to the index/home page
app.post(`/smite_compendium`, (req,res) => {
  God.create(req.body, (error, createGod) =>
  {
      res.redirect(`/smite_compendium`)
  })
})


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
