const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let path = require('path');

let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
  }];

// app.get('/', function (req, res) {
//     res.send('Hello World')
// });

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

// API route
app.get('/api/characters', (req, res) => {
    // let chosen = req.params.character;
    // res.send(`My name is ${chosen}`);
    res.json(characters);
});

app.get('/api/characters/:character', function(req, res){
    let chosen = req.params.character;

    characters.forEach(function(person){
        
        if(chosen === person.routeName){
            res.json(person);
        }
    });
        res.send("No");

});


// Create new characters
app.post('/api/characters', function(req, res){
    let newCharacter = req.body;
    characters.push(newCharacter);
    console.log(newCharacter);
    res.json(newCharacter);
});

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`));

