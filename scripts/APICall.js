import { createNewMovie } from "./objects.js";
import { favorites, isInLocalStorage, moviesInLocalStorage } from "./events.js";
const apiKey = '60333fe76f8b9de19cc5752f48b60ee0'


const searchMovieByName = async(inputValue) =>{

    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}&language=en-US&page=1`

    let searchResultList = await fetching(searchUrl)
    return searchResultList

};

const getPopularMovies = async () =>{

  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

  const popularMovies = await fetching(popularMoviesUrl)
  return popularMovies

};

let moviesOnScreen = []

const fetching = async (url) => {
    try {
        let response = await fetch(url)
        let responseJson = await response.json()
        let objectList = responseJson.results.map((movie)=>{
            if(isInLocalStorage(movie.id)){
                return favorites.find((movieInStorage) => movieInStorage.id == movie.id)
            }else{
                return createNewMovie(movie)
            }
            
        })
        console.log(objectList)
        console.log(favorites)
        moviesOnScreen = objectList
        return objectList;
    } catch(err) {
        console.log(err)
    }
   
};

export{fetching, getPopularMovies, searchMovieByName, moviesOnScreen}