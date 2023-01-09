const favFilms = JSON.parse(localStorage.getItem('film')) || []
const filmFavContainer = document.getElementById('fav-container')

const ham = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu')

ham.addEventListener('click', () => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    ham.classList.remove('active');
    navMenu.classList.remove('active');
}))



favFilms.forEach(favFilm => {

    filmFavContainer.innerHTML += `
    <div class="film-container" id="${favFilm.id}">
    <a href="${favFilm.url}">
    <img src="${favFilm.img}" alt="${favFilm.name}">
    </a>
        <div class="film-data">
            <p class="film-year">${favFilm.year}</p>
            <p class="film-name">${favFilm.name}</p>
            <p id="fav-film${favFilm.id}" class="film-favourite-select id${favFilm.id}" onclick="addFilmFavourite(${favFilm.id})"><i class="fa-sharp fa-solid fa-heart"></i></p>
        </div>
    </div>
    
    `;
});

const notfound = document.getElementById('fav-notfound')

if(favFilms.find((film) => film.id)) {
    notfound.classList.add('hide')
} else if(!favFilms.find((film) => film.id)) {
    notfound.classList.remove('hide')
    
}





const addFilmFavourite = (filmId) => {
    const filmItem = favFilms.find( (favFilm) => favFilm.id === filmId )
    const indexItem = favFilms.indexOf(filmItem)
    const filmFavDiv = document.getElementById(filmId)
    const getFilm = JSON.parse(localStorage.getItem('film'))



    if(favFilms.includes(filmItem)) {
        favFilms.splice(indexItem, 1)

        Swal.fire(
            'Okay...',
            `You removed <strong>${filmItem.name}</strong> from your favourite list.`,
            'error'
        )


        getFilm.splice(indexItem, 1)

        localStorage.setItem('film', JSON.stringify(getFilm))

        filmFavDiv.style.display = "none"

    } else if(!favFilms.includes(filmItem)) {
        favFilms.unshift(filmItem)

        Swal.fire(
            'Good job!',
            `You add ${filmItem.name} to your favourite list :)`,
            'success'
        )

        localStorage.setItem('film', JSON.stringify(favFilms))
        
    }
}
