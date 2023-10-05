import { movieCard } from "./domObjects.js";
import {getPopularMovies, searchMovieByName } from "./APICall.js";

const renderMovieList =  (movieList) => {
    
    let movieSection = document.querySelector('.moviesContainer')
    movieSection.textContent = ''

    movieList.forEach(movie => movieSection.append((movieCard(movie))
    ))

};

const displayPopularMovies = async () => {

    let popularMoviesList = await getPopularMovies()
    renderMovieList(popularMoviesList)

}

async function displaySearchedMovies(inputValue){
   
   let searchResultList = await searchMovieByName(inputValue)
   renderMovieList(searchResultList)

}

export{renderMovieList, displayPopularMovies, displaySearchedMovies};