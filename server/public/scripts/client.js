console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    $('#addJokeButton').on('click', addJoke)
    showJokes()
    console.log('DOM ready');
}

function showJokes() {

    $.ajax({
        method: 'GET',
        url: '/jokes',
    }).then(function (getJokes) {
        for (let joke of getJokes) {
            // looping through the item
            $('#outputDiv').append(`
      <div>${joke.whoseJoke} </div>
       <div>${joke.jokeQuestion}</div>
       <div>${joke.punchLine}  </div>
  `)
        }
        ;
    })
};

function addJoke(){

        console.log('this', $('.box').text())
        // set the input value of .box to a variable
        let answer = $('.box').html()
        // creating the object to be sent over
        let jokes = {
            whoseJoke: $('#whoseJokeIn').val(),
            jokeQuestion: $('#qustionIn').val(),
            punchLine: $('#punchlineIn').val
        }
        // sending over the problem variable
        $.ajax({
            method: 'POST',
            url: '/newJokes',
            data: jokes
        })
    
}

