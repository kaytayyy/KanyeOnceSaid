const apiUrl = 'https://api.kanye.rest'

// global variables to use later
let isFavorited = false
const newQuoteButton = document.getElementById( "new-quote" )
const favoriteButton = document.getElementById( "favorite-button" ) 
const currentQuote   = document.getElementById( "current-quote" )


// button that starts the fetch request
newQuoteButton.addEventListener( "click", makeNewQuote ) 

// fetch request to api ... returns an object
function makeNewQuote() 
{
        fetch( apiUrl )
        .then( response => response.json() )
        .then( quoteData => 
    {
        displayQuote( quoteData )
        isFavorited = false      // sets the isFavorited variable to false everytime a new quote is shown
        favoriteButton.style.backgroundColor = 'white'  // sets the background color of the favorite button to white
    })



}
// define function that will display the quote on the page
function displayQuote( quoteData ) 
{
    console.log( quoteData.quote )

// attach the quote to where we want to display it on the page     
    currentQuote.textContent = quoteData.quote

}


// add click event to favorite button
favoriteButton.addEventListener( "click", favClick )


    function favClick() 
    
{                                   // Turns the isFavorited variable true or false; opposite of what state it is currently in
        isFavorited = !isFavorited 
                                    // If isFavorited is true then color is red. if not color is white
        favoriteButton.style.backgroundColor = isFavorited ? "red" : "white" 




// checks if isFavorited is true

                if ( isFavorited )                
            {

                console.log( "add" )

            }      

                                                // these are the functions where we will build what we want to do when the favorite button is clicked  
// checks if isFavorited is false
                if ( !isFavorited )              
            {

                console.log( "remove" )

            }



}    