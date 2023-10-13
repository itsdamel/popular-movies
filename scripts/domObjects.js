import { moviesOnScreen } from "./APICall.js"
import { displaySearchedMovies, displayFavoriteMovies, findMovieObjectById, handleFavorite, displayPopularMovies} from "./events.js"

const movieCard = (movie) =>{
    let indexTab = moviesOnScreen.indexOf(movie) + 4
    console.log(indexTab)
    let movieCard = document.createElement('div')
    movieCard.classList.add('movieCard')

    let mainContent = document.createElement('div')
    mainContent.classList.add('mainContent')
    let movieCover = document.createElement('img')
    movieCover.classList.add('movieCover')
    movieCover.src =  (movie.imgPath !== null)?(movie.imgServe + movie.imgPath):'img/imagenotfound.jpg' //Talvez colocar isso no objeto 
    movieCover.alt = ''
    let title = document.createElement('div')
    title.classList.add('title')
    let h3Title = document.createElement('h3')
    h3Title.textContent = movie.title
    h3Title.tabIndex =    indexTab  
    let icons = document.createElement('div')
    icons.classList.add('icons')

    let div1 = document.createElement('div')
    div1.innerHTML = `<img tabindex=${indexTab} src='img/Star.svg' alt='Rating'><span>${movie.rating}</span>`
    
    let div2 = document.createElement('div')
    movie.isBookmarked
    ?div2.innerHTML = `<img class="bookmark isBookmarked" id=${movie.id} src="img/Heart.svg" alt=""> <span>Bookmark</span>`
    :div2.innerHTML= `<img class="bookmark" id=${movie.id} src="img/Heart.svg" alt=""> <span>Bookmark</span>`
    div2.tabIndex = indexTab 
    
    
    let description = document.createElement('p')
    description.classList.add('description')
    description.textContent = movie.description

    icons.append(div1, div2)
    title.append(h3Title, icons)
    mainContent.append(movieCover, title)
    movieCard.append(mainContent, description)

    return movieCard
    
}


const getUserInput = () => returnInputField.value


const returnInputField = () => document.querySelector('.userInput') 
    
const returnSearchButton = () =>  document.querySelector('#searchIcon')
    
const returnBookmarkNode = () =>  document.querySelectorAll('.bookmark')
   
const returnCheckbox = () => document.querySelector('#favs')

const returnCheckboxDiv = () => document.querySelector('#checkbox')

//Adding events
let input = returnInputField()
let searchButton = returnSearchButton()
let checkbox = returnCheckbox()
let checkboxDiv = returnCheckboxDiv() //ARE WE USING ITTT
console.log(checkbox)   

input.addEventListener('keydown', (e) => {
    (e.key === 'Enter')&&displaySearchedMovies(input.value)
    
    checkbox.checked = false;
});

checkbox.addEventListener('click', (e) =>{
    e.target.checked?displayFavoriteMovies():displayPopularMovies()
})

function enableMovieCardEvents(){
    returnBookmarkNode().forEach((bookmark) => {

        bookmark.addEventListener('click', (e) =>{
            let movie = findMovieObjectById(e.target.id)
            handleFavorite(e, movie)
        
            
        })
    })
}


searchButton.addEventListener('click', () => displaySearchedMovies(input.value));



export {movieCard, getUserInput, enableMovieCardEvents, returnBookmarkNode, returnCheckbox};