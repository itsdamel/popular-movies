import { movieCard } from "./domObjects.js";
import {getPopularMovies, searchMovieByName, moviesOnScreen } from "./APICall.js";
import { enableMovieCardEvents } from "./domObjects.js";


let moviesInLocalStorage = () => {

    if(localStorage.length !== 0 || localStorage.getItem("movies") !== null){
        return JSON.parse(localStorage.getItem("movies"))
    }else{
        return []
    }
}

let favorites =  moviesInLocalStorage() 

const renderMovieList =  (movieList) => {
    
    let movieSection = document.querySelector('.moviesContainer')
    movieSection.textContent = ''

    movieList.forEach(movie => movieSection.append((movieCard(movie))
    ))
    
    enableMovieCardEvents()

};

const addToLocalStorage = (array) =>{
    let readyArray = JSON.stringify(array)
    localStorage.setItem("movies", readyArray)
}

const removeFromFavorites = (movie) =>{
    let index = favorites.indexOf(movie)
    console.log(index)
    favorites.splice(index, 1)
}
const displayPopularMovies = async () => {
    
    let popularMoviesList = await getPopularMovies()
    renderMovieList(popularMoviesList)
    
}

const handleFavorite = (e, movie) =>{
    e.target.classList.toggle('isBookmarked')
    movie.isBookmarked = !movie.isBookmarked

    if (movie.isBookmarked){
        favorites.push(movie)

    }else{
       
        removeFromFavorites(movie)
        
        
    }

    
    addToLocalStorage(favorites)
    
}   



const displayFavoriteMovies = () =>{
    renderMovieList(moviesInLocalStorage())
    moviesOnScreen = moviesInLocalStorage()
}

async function displaySearchedMovies(inputValue){
   
   let searchResultList = await searchMovieByName(inputValue)
   renderMovieList(searchResultList)
   
}


//Helper
const findMovieObjectById = (id) => {
    return moviesOnScreen.find((movie) => movie.id == id)
}

function isInLocalStorage(movieId){

   return moviesInLocalStorage().some((favoritedMovie) => favoritedMovie.id == movieId)
}


export{renderMovieList, displayPopularMovies, displaySearchedMovies, displayFavoriteMovies, handleFavorite, findMovieObjectById, isInLocalStorage, moviesInLocalStorage, favorites};

