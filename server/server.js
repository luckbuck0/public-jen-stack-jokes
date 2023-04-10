// bringing in express
const express = require( 'express' );
// initiating express
const app = express();
// initiating body parser
const bodyParser = require( 'body-parser' );

// port used
const PORT = 5000;


// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

// A array with objects called jokes that has 
//the properties of the jokes

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// serve back static files
app.use(express.static('server/public'));


app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server


// sending the jokes array to the client js
app.get('/jokes', (req, res) => {

  res.send(jokes);
})

// used to get data from client side
app.post('/newJokes', (req, res) => {
// taking in the data and putting it in variable
  let newJokes= req.body;
  // pushing new data to jokes array
  jokes.push(newJokes)
  res.sendStatus(201)
})