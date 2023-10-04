import { movieCard } from "./domObjects.js";
import { fetching } from "./APICall.js";

const renderMovieList =  (movieList) => {
    let movieSection = document.querySelector('.moviesContainer')
    movieSection.textContent = ''
    movieList.forEach(movie => movieSection.append((movieCard(movie))
    ))
}

const displayPopularMovies = async (movieList) => {
    let popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    let popularMoviesList = await fetching(popularMoviesUrl)
    renderMovieList(popularMoviesList)
}

export{renderMovieList, displayPopularMovies};