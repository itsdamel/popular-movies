import { moviesInLocalStorage } from "../Model/data.js";
import { moviesOnScreen } from "./events.js";

//Return DOM elements

const getUserInput = () => returnInputField.value;

const returnInputField = () => document.querySelector('.userInput');
    
const returnSearchButton = () =>  document.querySelector('#searchIcon');
    
const returnBookmarkNode = () =>  document.querySelectorAll('.bookmark');
   
let returnCheckbox = () => document.querySelector('#favs');

const returnCheckboxDiv = () => document.querySelector('#checkbox');

const returnMovieSection = () => {
    return document.querySelector('.moviesContainer')
}

//Helper functions

const findMovieObjectById = ( id ) =>  moviesOnScreen.find(( movie ) => movie.id == id);


let isInLocalStorage = ( movieId ) => moviesInLocalStorage().some(( favoritedMovie ) => favoritedMovie.id == movieId);


const cleanMovieSection = () => {

    let movieSection = returnMovieSection()

    movieSection.textContent = ''
};

export { getUserInput, returnInputField, returnSearchButton, returnBookmarkNode, returnCheckbox, returnCheckboxDiv, returnMovieSection, findMovieObjectById, isInLocalStorage, cleanMovieSection }
