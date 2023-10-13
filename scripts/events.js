import { movieCard, returnCheckbox } from "./domObjects.js";
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
    
    cleanMovieSection() //Maybe cleanAndReturn movieSection?
    let movieSection = returnMovieSection()
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
    if(favorites.length !== 0){
        renderMovieList(moviesInLocalStorage())
        moviesOnScreen = moviesInLocalStorage()
        returnCheckbox().checked = true;
    }else{
        cleanMovieSection()
        let movieSection = returnMovieSection()
        movieSection.append(erroMessage("Seems like you haven't bookmarked any movie yet!"))
    }
    
}

async function displaySearchedMovies(inputValue){
    
   if(inputValue.trim() !== ''){
        let searchResultList = await searchMovieByName(inputValue)
        renderMovieList(searchResultList)
   }else{
        cleanMovieSection()
        let movieSection = returnMovieSection()
        movieSection.append(erroMessage("Can't do! Please enter a valid movie title :)"))
   }
   

   
}

//Error message but is a DOM element
const erroMessage = (message) =>{
    const container = document.createElement('div')
    container.classList.add('error')
    container.innerHTML = `<h3>OOPS!</h3><p>${message}</p>`;
    return container
}
//Helper
const findMovieObjectById = (id) => {
    return moviesOnScreen.find((movie) => movie.id == id)
}

function isInLocalStorage(movieId){

   return moviesInLocalStorage().some((favoritedMovie) => favoritedMovie.id == movieId)
}


function cleanMovieSection(){
    let movieSection = returnMovieSection()
    movieSection.textContent = ''
}

//return
function returnMovieSection(){
    return document.querySelector('.moviesContainer')
}
export{renderMovieList, displayPopularMovies, displaySearchedMovies, displayFavoriteMovies, handleFavorite, findMovieObjectById, isInLocalStorage, moviesInLocalStorage, favorites};

