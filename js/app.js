
const content = document.getElementById('films')
let filmsArray = [];
let favouriteFilms = JSON.parse(localStorage.getItem('film')) || []

console.log(favouriteFilms.id)


const obtenerDatosFilms = () => {
    fetch('../data/data.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            renderFilms(data)
            
        })
        .catch((err) => {
            console.log(err)
        })
}

const renderFilms = (films) => {
    filmsArray = films
    
    let html = "";
    const filmHome = filmsArray.filter( (film) => film.hFilms === true )
    

    filmHome.forEach((film) => {

        html += `
        <div class="film-container" id="${film.id}">
        <img src="${film.img}" alt="${film.name}">
            <div class="film-data">
                <p class="film-year">${film.year}</p>
                <p class="film-name">${film.name}</p>
                <p id="fav-film${film.id}" class="film-favourite" onclick="addFilmFavourite(${film.id})"><i class="fa-sharp fa-solid fa-heart"></i></p>
            </div>
        </div>
    `
    })
    content.innerHTML = html
}

window.addEventListener('DOMContentLoaded', obtenerDatosFilms)


const addFilmFavourite = (filmId) => {
    const filmItem = filmsArray.find( (film) => film.id === filmId )
    // const indexItem = favouriteFilms.indexOf(filmItem)
    const findFavFilms = favouriteFilms.find((film) => film.id === filmId)
    const indexFav = favouriteFilms.indexOf(findFavFilms)


    if(favouriteFilms.includes(findFavFilms)) {
        favouriteFilms.splice(indexFav, 1)

        Swal.fire(
            'Okay...',
            `You removed ${filmItem.name} from your favourite list.`,
            'error'
        )



        localStorage.setItem('film', JSON.stringify(favouriteFilms))


        const selectFavFilm = document.getElementById(`fav-film${filmId}`)
        selectFavFilm.classList = 'fav-uncolor'


    } else if(!favouriteFilms.includes(findFavFilms)) {
        favouriteFilms.unshift(filmItem)

        Swal.fire(
            'Good job!',
            `You add ${filmItem.name} to your favourite list :)`,
            'success'
        )

        localStorage.setItem('film', JSON.stringify(favouriteFilms))
        

        const selectFavFilm = document.getElementById(`fav-film${filmId}`)
        selectFavFilm.classList = 'fav-color'
    }
}
