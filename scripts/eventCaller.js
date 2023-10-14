import { displaySearchedMovies, displayFavoriteMovies, handleFavorite, displayPopularMovies} from "./events.js"
import { returnInputField, returnSearchButton, returnCheckbox, returnBookmarkNode, findMovieObjectById } from "./helpers.js"

let input = returnInputField()
let searchButton = returnSearchButton()
let checkbox = returnCheckbox()

//Page title events
document.querySelector('#pageH1').addEventListener('click',()=>{
    displayPopularMovies()
}) 

input.addEventListener('keydown', (e) => {
    (e.key === 'Enter')&&displaySearchedMovies(input.value)
    
    checkbox.checked = false
});

searchButton.addEventListener('click', () => displaySearchedMovies(input.value));

//checkbox events
checkbox.addEventListener('click', (e) =>{ //format arrow
    e.target.checked?displayFavoriteMovies():displayPopularMovies()
});

//Card events
const enableMovieCardEvents = () => {

    returnBookmarkNode().forEach((bookmark) => {

        bookmark.addEventListener('click', (e) =>{
            let movie = findMovieObjectById(e.target.id)
            handleFavorite(e, movie)
        
            
        });
    });
};


 

export {enableMovieCardEvents}