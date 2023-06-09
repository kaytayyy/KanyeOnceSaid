const apiUrl = 'https://api.kanye.rest'

// global variables to use later

let isFavorited = false
const newQuoteButton = document.getElementById( "new-quote" )
const favoriteButton = document.getElementById( "favorite-button" ) 
const currentQuote   = document.getElementById( "current-quote-content" )
const favoriteList   = document.getElementById( "favorite-list")
const logoDisplay    = document.getElementById( "logo")
logoDisplay.src = 'assets/Kanye_logo.png'
favoriteButton.style.display = "none"

// page refresh 
logoDisplay.addEventListener("click", () => 
{
    window.location.reload()
})


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
        favoriteButton.style.display = 'block' // reveals like button when new quote button is clicked
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
                addNewFavorite()
                console.log( "add" )

            }      

                                                  
// checks if isFavorited is false
                if ( !isFavorited )              
            {
                
                removeLastFavorite();
                console.log( "remove" )
                
            }

            

}    

function addNewFavorite() 
{

            const newFavorite  = document.createElement("li")
            const deleteEmoji = document.createElement('span')          
            deleteEmoji.textContent =     '❌'                           // function that appends new favorites to a list 

            deleteEmoji.addEventListener(
                "mouseover",
                (e) => 
                {
                  newFavorite.style.color = "purple"; 
                })
            
                deleteEmoji.addEventListener(
                "mouseout",
                (e) => 
                {
                   newFavorite.style.color = ""
                })
            

            newFavorite.textContent = currentQuote.textContent
            newFavorite.appendChild(deleteEmoji)
            favoriteList.appendChild(newFavorite)
        
            deleteEmoji.addEventListener('click', () => 
            {
                    newFavorite.remove()
                    if (Math.random() > 0.5) {
                    window.alert("Don't you love all of kanye's sayings ;(")}

            })
            
}


function removeLastFavorite() 
{
     

            const favoriteListDelete = favoriteList.getElementsByTagName("li")
            const lastItem = favoriteListDelete[favoriteListDelete.length - 1]   // function that removes the last favorite if heart is clicked again
            lastItem.parentNode.removeChild(lastItem)
}                                                                                   





// function kanyeForPresident () {
// let enterEventCount = 0;
// let leaveEventCount = 0;
// const mouseTarget = document.getElementById("mouseTarget");
// const unorderedList = document.getElementById("unorderedList");

// mouseTarget.addEventListener("mouseenter", (e) => {
//   mouseTarget.style.border = "5px dotted orange";
//   enterEventCount++;
//   addListItem("Kanye for president!");
// });

// mouseTarget.addEventListener("mouseleave", (e) => {
//   mouseTarget.style.border = "1px solid #333";
//   leaveEventCount++;
//   addListItem("Kanye for president!");
// });
// function addListItem(text) {
//   const newTextNode = document.createTextNode(text);
//   const newListItem = document.createElement("li");
//   newListItem.appendChild(newTextNode);
//   unorderedList.appendChild(newListItem);
// }}

// kanyeForPresident()

