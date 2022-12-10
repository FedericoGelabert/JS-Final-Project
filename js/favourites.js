const favFilms = JSON.parse(localStorage.getItem('film')) || []
const filmFavContainer = document.getElementById('fav-container')



favFilms.forEach(favFilm => {

    filmFavContainer.innerHTML += `
    <div class="film-container" id="${favFilm.id}">
    <img src="${favFilm.img}" alt="${favFilm.name}">
        <div class="film-data">
            <p class="film-year">${favFilm.year}</p>
            <p class="film-name">${favFilm.name}</p>
            <p id="fav-film${favFilm.id}" class="film-favourite-select id${favFilm.id}" onclick="addFilmFavourite(${favFilm.id})"><i class="fa-sharp fa-solid fa-heart"></i></p>
        </div>
    </div>
    
    `;
});



const addFilmFavourite = (filmId) => {
    const filmItem = favFilms.find( (favFilm) => favFilm.id === filmId )
    const indexItem = favFilms.indexOf(filmItem)
    const filmFavDiv = document.getElementById(filmId)
    const getFilm = JSON.parse(localStorage.getItem('film'))



    if(favFilms.includes(filmItem)) {
        favFilms.splice(indexItem, 1)

        Swal.fire(
            'Okay...',
            `You removed ${filmItem.name} from your favourite list.`,
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
