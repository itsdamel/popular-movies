const moviesInLocalStorage = () => {

    if(localStorage.length !== 0 || localStorage.getItem("movies") !== null){

        return JSON.parse(localStorage.getItem("movies"))

    } else {
        return []
    }
};

let favorites =  moviesInLocalStorage() 

export { favorites, moviesInLocalStorage }