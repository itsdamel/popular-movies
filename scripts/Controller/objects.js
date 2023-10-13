import { isInLocalStorage } from './helpers.js'

function Movie(title, imgPath, backdropImg, description, rating, id){
    this.title = title;
    this.imgServe = 'https://image.tmdb.org/t/p/w185'
    this.imgPath = imgPath || backdropImg 
    this.description = description.replace(' ','').length > 300?description.slice(0,200) + '...':description
    this.rating = rating.toFixed(1)
    this.id = id
    this.isBookmarked = isInLocalStorage(this.id)
}

function createNewMovie(movie, i){
    let movieObject = new Movie(movie.title, movie.poster_path, movie.backdrop_path,  movie.overview, movie.vote_average, movie.id)
    return movieObject
}




export {createNewMovie}