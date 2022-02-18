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
God.create(godSeed, (err,data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Gods added to database!`)
  }
})

//___________________
// Routes
//___________________
//localhost:3000

//route updating the information from the edit fields
app.put(`/smite_compendium/:id` , (req, res) => {
  const ab1 = {
    abilityName: req.body.ability1Name,
    abilityType: req.body.ability1Type,
    abilityDescription: req.body.ability1Description,
    abilityEffect1: req.body.ability1Effect1,
    abilityEffect2: req.body.ability1Effect2,
    abilityEffect3: req.body.ability1Effect3,
    abilityEffect4: req.body.ability1Effect4,
    abilityCost: req.body.ability1Cost,
    abilityCooldown: req.body.ability1Cooldown
  }
  const ab2 = {
    abilityName: req.body.ability2Name,
    abilityType: req.body.ability2Type,
    abilityDescription: req.body.ability2Description,
    abilityEffect1: req.body.ability2Effect1,
    abilityEffect2: req.body.ability2Effect2,
    abilityEffect3: req.body.ability2Effect3,
    abilityEffect4: req.body.ability2Effect4,
    abilityCost: req.body.ability2Cost,
    abilityCooldown: req.body.ability2Cooldown
  }
  const ab3 = {
    abilityName: req.body.ability3Name,
    abilityType: req.body.ability3Type,
    abilityDescription: req.body.ability3Description,
    abilityEffect1: req.body.ability3Effect1,
    abilityEffect2: req.body.ability3Effect2,
    abilityEffect3: req.body.ability3Effect3,
    abilityEffect4: req.body.ability3Effect4,
    abilityCost: req.body.ability3Cost,
    abilityCooldown: req.body.ability3Cooldown
  }
  const ab4 = {
    abilityName: req.body.ability4Name,
    abilityType: req.body.ability4Type,
    abilityDescription: req.body.ability4Description,
    abilityEffect1: req.body.ability4Effect1,
    abilityEffect2: req.body.ability4Effect2,
    abilityEffect3: req.body.ability4Effect3,
    abilityEffect4: req.body.ability4Effect4,
    abilityCost: req.body.ability4Cost,
    abilityCooldown: req.body.ability4Cooldown
  }

  req.body.abilities = [ab1,ab2,ab3,ab4]
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

// // filters for classes
app.get('/warriors' , (req, res) => {
    God.find({class: "Warrior"} , (err, godWarrior) => {
        res.render(`index.ejs` ,
          {
            god: godWarrior
          }
        )
    })
});

app.get('/assassins' , (req, res) => {
    God.find({class: "Assassin"} , (err, godWarrior) => {
        res.render(`index.ejs` ,
          {
            god: godWarrior
          }
        )
    })
});


app.get('/mages' , (req, res) => {
    God.find({class: "Mage"} , (err, godWarrior) => {
        res.render(`index.ejs` ,
          {
            god: godWarrior
          }
        )
    })
});


app.get('/guardians' , (req, res) => {
    God.find({class: "Guardian"} , (err, godWarrior) => {
        res.render(`index.ejs` ,
          {
            god: godWarrior
          }
        )
    })
});


app.get('/hunters' , (req, res) => {
    God.find({class: "Hunter"} , (err, godWarrior) => {
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
  const ab1 = {
    abilityName: req.body.ability1Name,
    abilityType: req.body.ability1Type,
    abilityDescription: req.body.ability1Description,
    abilityEffect1: req.body.ability1Effect1,
    abilityEffect2: req.body.ability1Effect2,
    abilityEffect3: req.body.ability1Effect3,
    abilityEffect4: req.body.ability1Effect4,
    abilityCost: req.body.ability1Cost,
    abilityCooldown: req.body.ability1Cooldown
  }
  const ab2 = {
    abilityName: req.body.ability2Name,
    abilityType: req.body.ability2Type,
    abilityDescription: req.body.ability2Description,
    abilityEffect1: req.body.ability2Effect1,
    abilityEffect2: req.body.ability2Effect2,
    abilityEffect3: req.body.ability2Effect3,
    abilityEffect4: req.body.ability2Effect4,
    abilityCost: req.body.ability2Cost,
    abilityCooldown: req.body.ability2Cooldown
  }
  const ab3 = {
    abilityName: req.body.ability3Name,
    abilityType: req.body.ability3Type,
    abilityDescription: req.body.ability3Description,
    abilityEffect1: req.body.ability3Effect1,
    abilityEffect2: req.body.ability3Effect2,
    abilityEffect3: req.body.ability3Effect3,
    abilityEffect4: req.body.ability3Effect4,
    abilityCost: req.body.ability3Cost,
    abilityCooldown: req.body.ability3Cooldown
  }
  const ab4 = {
    abilityName: req.body.ability4Name,
    abilityType: req.body.ability4Type,
    abilityDescription: req.body.ability4Description,
    abilityEffect1: req.body.ability4Effect1,
    abilityEffect2: req.body.ability4Effect2,
    abilityEffect3: req.body.ability4Effect3,
    abilityEffect4: req.body.ability4Effect4,
    abilityCost: req.body.ability4Cost,
    abilityCooldown: req.body.ability4Cooldown
  }

  req.body.abilities = [ab1,ab2,ab3,ab4]

  console.log(req.body)
  God.create(req.body, (error, createGod) =>
  {
      res.redirect(`/smite_compendium`)
  })
})


//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
