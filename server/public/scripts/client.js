console.log('client.js sourced');
// used to check if document is ready.
$(document).ready(onReady);

// function to serve as staging area for other functions
function onReady() {
    // used to run the addjoke function
    $('#addJokeButton').on('click', addJoke)
    // used to run display function
    showJokes()
    // used to run the clear function
    $('#clear').on('click', clear)
    console.log('DOM ready');
}

// function to showjokes that have been retrieved
// from the server side and display them on dom
function showJokes() {
// empyting out the html id area so that repeat
// data doesnt show up
$('#outputDiv').empty()
    $.ajax({
        method: 'GET',
        url: '/jokes',
    }).then(function (getJokes) {
        // looping through the getjokes data
        for (let joke of getJokes) {
            // append the properties in the getjokes
            // object retrieved from getjokes
            $('#outputDiv').append(`
      <div class="name">${joke.whoseJoke} </div>
       <div class="joke">${joke.jokeQuestion}</div>
       <div class="punch">${joke.punchLine}</div>
       
  `)
        }
        ;
    })
};

// function to add jokes once the add joke button 
// is clicked
function addJoke(){

        // creating the object to be sent over
        let jokes = {
            whoseJoke: $('#whoseJokeIn').val(),
            jokeQuestion: $('#questionIn').val(),
            punchLine: $('#punchlineIn').val()
        }
        // sending over jokes variable
        $.ajax({
            method: 'POST',
            url: '/newJokes',
            data: jokes
        })
        // used to empty out the values of inputs 
        // data is sent over
        $('#whoseJokeIn').val(''),
    $('#questionIn').val(''),
    $('#punchlineIn').val('')
// runnig the showjokes function so that the new data
// can be show the showjokes function refreshes the page 
    showJokes()
    
}

// function to clear the input val once the clear button
// is clicked
function clear(){
    
    $('#whoseJokeIn').val(''),
     $('#questionIn').val(''),
     $('#punchlineIn').val('')
}


