import { movieCard, returnCheckbox } from "../View/DOM.js";
import {getPopularMovies, searchMovieByName, moviesOnScreen } from "../Model/APICall.js";
import { enableMovieCardEvents } from "../View/DOM.js";
import { erroMessage } from '..View/DOM.js';
import { favorites } from "../Model/data.js";

//To display data

const renderMovieList =  (movieList) => {
    
    cleanMovieSection() //Maybe cleanAndReturn movieSection?
    let movieSection = returnMovieSection()
    movieList.forEach(movie => movieSection.append((movieCard(movie))
    ))
    
    enableMovieCardEvents()

};

const displayPopularMovies = async () => {

    let popularMoviesList = await getPopularMovies()

    renderMovieList(popularMoviesList)

};

const displayFavoriteMovies = () =>{
    if(favorites.length !== 0){
        renderMovieList(moviesInLocalStorage())
        moviesOnScreen = moviesInLocalStorage()
        returnCheckbox().checked = true;
    }else{
        
        erroMessage("Seems like you haven't bookmarked any movie yet!")
    }
    
};

async function displaySearchedMovies(inputValue){
    
    if(inputValue.trim() !== ''){
         let searchResultList = await searchMovieByName(inputValue)
         searchResultList.length === 0 ? erroMessage('Invalid search!') : renderMovieList(searchResultList)
    }else{
         
         erroMessage("Can't do! Please enter a valid movie title :)")
    }
    
};
 
//To manipulate

const addToLocalStorage = (array) =>{
    let readyArray = JSON.stringify(array)
    localStorage.setItem("movies", readyArray)
};

const removeFromFavorites = (movie) =>{
    let index = favorites.indexOf(movie)
    favorites.splice(index, 1)
};

const handleFavorite = (e, movie) =>{
    e.target.classList.toggle('isBookmarked')
    movie.isBookmarked = !movie.isBookmarked

    if (movie.isBookmarked){
        favorites.push(movie)

    }else{
       
        removeFromFavorites(movie)
        
        
    }

    addToLocalStorage(favorites)
};
export{ displayPopularMovies };

