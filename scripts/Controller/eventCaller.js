import { displaySearchedMovies, displayFavoriteMovies, displayPopularMovies } from "./events.js";
import { returnInputField, returnSearchButton, returnCheckbox } from "./helpers.js";


let input = returnInputField()
let searchButton = returnSearchButton()
let checkbox = returnCheckbox()

const enableEvents = () =>{

    //Return to popular movies event

    document.querySelector('#pageH1').addEventListener('click',()=>{
        displayPopularMovies()
        checkbox.checked = false
    }) 

    //Search events
    
    input.addEventListener('keydown', (e) => {
        (e.key === 'Enter')&&displaySearchedMovies(input.value)
        
        
    });
    
    searchButton.addEventListener('click', () => displaySearchedMovies(input.value));
    
    //checkbox events

    checkbox.addEventListener('click', () =>{ //format arrow
        
        checkbox.checked?displayFavoriteMovies():displayPopularMovies()
        
    });
    

} 

 

export { enableEvents }