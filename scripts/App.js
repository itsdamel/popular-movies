import { displayPopularMovies, displaySearchedMovies } from "./events.js"
import {getUserInput} from './domObjects.js'

getUserInput()


window.onload = displayPopularMovies()
