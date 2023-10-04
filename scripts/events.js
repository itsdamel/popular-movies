import { movieCard } from "./domObjects.js";

const renderMovieList = (movieList) => {
    let movieSection = document.querySelector('.moviesContainer')
    movieSection.textContent = ''
    
    movieList.forEach(movie => movieSection.append((movieCard(movie))
    ))
}

export{renderMovieList};