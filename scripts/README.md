<div style="text-align: center">
    <h1>Popular Movies single page</h1>
    <div ><a style='cursor: pointer'>PT - README</a> || <a style='cursor: pointer'>ES - README</a></div>
</div>

<div style="text-align: center">
    <h2>PREVIEW</h2>
    <img src='img/preview.png' alt='deployed preview'></img>
    <a style='text-decoration: none; text-transform: uppercase' href='https://itsdamel.github.io/popular-movies/'>See live 🚀</a>
</div>

<div style="text-align: center">
    <h2>Developed with</h2>
    <img alt='Javascript' src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'>
    <img alt='HTML' src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'>
    <img alt='CSS' src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'>

</div>

<div style="text-align: center">
    <h2>Features</h2>
    <h3>
        This project is one of <a href='https://alura-7dayscode.vercel.app/' target='_blank'>ALURA #7DAYSOFCODE</a>'s challenges.<br><br> The goal of this challenge was to:
    </h3>     
    <ul style="text-align: left">
        <li>Create a page that uses the <a href='https://developer.themoviedb.org/docs' target='_blank'>TMDB API</a>, dynamically showing the most popular films of the moment.</li><br>
        <li>Using a different endpoint of the same API, allow the user to search for movies by title in any language</li><br>
        <li>Allow users to bookmark films and view only their bookmarked films when clicking on checkbox.</li><br>
        <li>Save user's bookmarked films in the local storage.</li>
    </ul>
    
</div>

<div style="text-align: center">
    <h3>
        The additional features that I've included into the application was:
    </h3>     
    <ul style="text-align: left; font-size: 16px">
        <li> Made the page 100% responsive to different screen sizes </li><br>
        <li> Added tab navigation for users who navigate the page with the help of a screen reader software. </li><br>
        <li> Customized page if the user's search is invalid.</li><br>
        <li>Customized page if user tries to search with an empty input field</li><br>
        <li>Customized page if user tries to view bookmarked films without having any bookmarked film.</li><br>
        <li>Default movie cover when API doesn't return a movie cover.</li><br>
        <li>Films with a description longer than 300 characters have their description formated.</li><br> 
    </ul>
    
</div>

<div>
    <h2>Good practices</h2>
    <p> In this project, I applied the <strong>MCV architecture pattern</strong>, dividing the entire application into different directories and .js files according to the context of each one. I also worked with <strong>object-oriented programming</strong>, creating a class to instantiate "movie" objects with only the necessary attributes I wanted from the API results, doing this also allowed me to manipulate the bookmark status of the movies, handle frequent errors with the cover of more unknown titles, and prevent films with longer descriptions from "breaking" their cards. I worked a lot with software versioning with git through the terminal.
</div>

<div>
    <h2>Dev's thoughts</h2>
    <p>This is the first project I've done exclusively dedicated to my portfolio. The idea was to make this first one as simple as possible so that my progress when I finish larger projects is clear. Thinking that in August I knew nothing about DOM manipulation with js, to now be able to deploy an excellent project like this one makes me fall in love with coding even more. All the time I spent reading articles on optimization, architecture, good practices and clean code was worth it for the ease with which I developed this project. In short, It didn't take me much time (a week and a half dedicating 2 hours a day), it was a lot of fun from start to end, I had several challenges that, when overcomed, made me a better developer. I still have some ideas like adding a dedicated page for each movie so the user can watch its teaser or read full description, I also want to add more keyboard events to make the site more accessible, so I hope to get back to this project someday.</p>
    <p>If you've read this far, thank you for your interest and patience! I genuinely hope you have an amazing day :)</p>

</div>