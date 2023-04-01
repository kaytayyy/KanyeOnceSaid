// click event for displaying the quote
const apiUrl = 'https://api.kanye.rest'
const newQuoteButton = document.getElementById( "new-quote" )

// button that starts the fetch request
newQuoteButton.addEventListener( "click", makeNewQuote ) 
const currentQuote = document.getElementById( "current-quote" )
// fetch request to api ... returns an object
function makeNewQuote() 
{
fetch( apiUrl )
.then( response => response.json() )
.then( quoteData => displayQuote(quoteData) ) 
}
// define function that will display the quote on the page
function displayQuote( quoteData ) 
{
    console.log( quoteData.quote )

// attach the quote to where we want to display it on the page     

currentQuote.textContent = quoteData.quote
//reset the color of the favorite button when displaying new quote
favoriteButton.style.backgroundColor='white'
}


// button to favorite a quote 

 const favoriteButton = document.getElementById("favorite-button")

// make the button glow red on click
favoriteButton.addEventListener("click", glowingClick)
function glowingClick()
 
{

    favoriteButton.style.backgroundColor='red'
}


// adds the current quote being displayed to a favorites list
// favoriteButton.addEventListener("click", addQuoteToFavorites)


//  function addQuoteToFavorites()