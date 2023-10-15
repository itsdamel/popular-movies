import { cleanMovieSection, returnMovieSection, returnCheckbox, returnBookmarkNode, findMovieObjectById } from './helpers.js';

import { getPopularMovies, searchMovieByName } from './APICall.js';
import { favorites } from './data.js';

import { movieCard, erroMessage } from './DOM.js';

//To display data
let moviesOnScreen = []

const renderMovieList =  (movieList) => {
    cleanMovieSection() 

    let movieSection = returnMovieSection()

    movieList.forEach((movie) => movieSection.append((movieCard(movie, movieList))
    ));
   
    enableMovieCardEvents()
};

const displayPopularMovies = async () => {

    let popularMoviesList = await getPopularMovies()

    renderMovieList(popularMoviesList)

    moviesOnScreen = popularMoviesList

};

function displayFavoriteMovies(){

    if(favorites.length !== 0){

        renderMovieList(favorites)
        
        moviesOnScreen = favorites
        
        returnCheckbox().checked = true;

    }else{
        
        erroMessage("Seems like you haven't bookmarked any movie yet!")

    }
    
};

async function displaySearchedMovies(inputValue){

    returnCheckbox().checked = false

    if (inputValue.trim() !== '') {

         let searchResultList = await searchMovieByName(inputValue)

         searchResultList.length === 0 ? erroMessage('Invalid search!') : renderMovieList(searchResultList)

         moviesOnScreen = searchResultList

    }else{
         
         erroMessage("Can't do! Please enter a valid movie title :)")
    }
    
};
 
//To manipulate

const enableMovieCardEvents = () => {

    returnBookmarkNode().forEach((bookmark) => {

        bookmark.addEventListener('click', (e) => {
            
            let movie = findMovieObjectById(e.target.id)

            handleFavorite(e, movie)
            
        });
    });
};

const addToLocalStorage = (array) => {

    let readyArray = JSON.stringify(array)

    localStorage.setItem("movies", readyArray)

};

const removeFromFavorites = (movie) => {
    
    let index = favorites.indexOf(movie)

    favorites.splice(index, 1)

    returnCheckbox().checked&&displayFavoriteMovies()

};

const handleFavorite = (e, movie) => {

    e.target.classList.toggle('isBookmarked')

    movie.isBookmarked = !movie.isBookmarked
    
    movie.isBookmarked ? favorites.push(movie) : removeFromFavorites(movie)
        
    addToLocalStorage(favorites)
};

export{ displayPopularMovies, displayFavoriteMovies, displaySearchedMovies, handleFavorite, moviesOnScreen };

