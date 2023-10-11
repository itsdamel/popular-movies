import {favorites, isInLocalStorage} from "./events.js";

function Movie(title, imgPath, description, rating, id){
    this.title = title;
    this.imgPath = imgPath;
    this.description = description;
    this.rating = rating
    this.id = id
    this.isBookmarked = isInLocalStorage(this.id)
}

function createNewMovie(movie){
    let movieObject = new Movie(movie.title, movie.poster_path, movie.overview, movie.vote_average, movie.id)
    return movieObject
}




export {createNewMovie}