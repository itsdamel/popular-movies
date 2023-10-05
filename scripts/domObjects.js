import { displaySearchedMovies} from "./events.js"

const movieCard = (movie) =>{
    let movieCard = document.createElement('div')
    movieCard.classList.add('movieCard')

    let mainContent = document.createElement('div')
    mainContent.classList.add('mainContent')
    let movieCover = document.createElement('img')
    movieCover.classList.add('movieCover')
    movieCover.src = 'https://image.tmdb.org/t/p/w185/' + movie.poster_path
    movieCover.alt = ''

    let title = document.createElement('div')
    title.classList.add('title')
    let h3Title = document.createElement('h3')
    h3Title.textContent = movie.title
    let icons = document.createElement('div')
    icons.classList.add('icons')

    let div1 = document.createElement('div')
    div1.innerHTML = `<img src='img/Star.svg' alt='Rating'><span>${movie.vote_average}</span>`

    let div2 = document.createElement('div')
    div2.innerHTML= '<img class="bookmark" src="img/Heart.svg" alt=""> <span>Bookmark</span>'
    
    let description = document.createElement('p')
    description.classList.add('description')
    description.textContent = movie.overview
    icons.append(div1, div2)
    title.append(h3Title, icons)
    mainContent.append(movieCover, title)
    movieCard.append(mainContent, description)

    return movieCard
    
}

const getUserInput = () =>{
    return returnInputField.value
}

const returnInputField = () => {
    let input = document.querySelector('.userInput') 
    return input
}

const returnSearchButton = () => {
    let searchButton = document.querySelector('#searchIcon')
    return searchButton;
}


//Adding events
let input = returnInputField()
let searchButton = returnSearchButton()
input.addEventListener('keydown', (e) => {
    (e.key === 'Enter')&&displaySearchedMovies(input.value)
});


searchButton.addEventListener('click', () => displaySearchedMovies(input.value));



export {movieCard, getUserInput};