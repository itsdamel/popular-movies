import { enableMovieCardEvents } from "./domObjects.js"
import { displayPopularMovies} from "./events.js"


enableMovieCardEvents()
window.onload = displayPopularMovies()

