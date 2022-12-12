
const content = document.getElementById('films')
let filmsArray = [];
let favouriteFilms = JSON.parse(localStorage.getItem('film')) || []
const buttonHome = document.getElementById('home-button') 

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


buttonHome.addEventListener('click', e => { 
    window.location.href = './pages/films.html';
})

const obtenerDatosFilms = () => {
    fetch('data/data.json')
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

    localStorage.setItem('allfilms', JSON.stringify(filmHome))

    filmHome.forEach((film) => {
        const itemFav = favouriteFilms.find((fav) => fav.id === film.id)


        if(favouriteFilms.includes(itemFav)){
            
            html += `
            <div class="film-container" id="${film.id}">
                <a href="${film.hurl}">
                    <img src="${film.img}" alt="${film.name}">
                </a>
                <div class="film-data">
                    <p class="film-year">${film.year}</p>
                    <p class="film-name">${film.name}</p>
                    <p id="fav-film${film.id}" class="film-favourite-selected" onclick="addFilmFavourite(${film.id})"><i class="fa-sharp fa-solid fa-heart"></i></p>
                </div>
            </div>
        `
        } else if(!favouriteFilms.includes(itemFav)) {


        html += `
        <div class="film-container" id="${film.id}">
            <a href="${film.hurl}">
                <img src="${film.img}" alt="${film.name}" class="film-img">
            </a>
            <div class="film-data">
                <p class="film-year">${film.year}</p>
                <p class="film-name">${film.name}</p>
                <p id="fav-film${film.id}" class="film-favourite" onclick="addFilmFavourite(${film.id})"><i class="fa-sharp fa-solid fa-heart"></i></p>
            </div>
        </div>
    `                
}

    })
    content.innerHTML = html
}

window.addEventListener('DOMContentLoaded', obtenerDatosFilms)






const addFilmFavourite = (filmId) => {
    const filmItem = filmsArray.find( (film) => film.id === filmId )
    const findFavFilms = favouriteFilms.find((film) => film.id === filmId)
    const indexFav = favouriteFilms.indexOf(findFavFilms)

    if(favouriteFilms.includes(findFavFilms)) {
        favouriteFilms.splice(indexFav, 1)

        Swal.fire(
            'Okay...',
            `You removed <strong>${filmItem.name}</strong> from your favourite list.`,
            'error'
        )



        localStorage.setItem('film', JSON.stringify(favouriteFilms))


        const selectFavFilm = document.getElementById(`fav-film${filmId}`)
        selectFavFilm.classList = 'fav-uncolor'


    } else if(!favouriteFilms.includes(findFavFilms)) {
        favouriteFilms.unshift(filmItem)

        Swal.fire(
            'Good job!',
            `You add <strong>${filmItem.name}</strong> to your favourite list :)`,
            'success'
        )

        localStorage.setItem('film', JSON.stringify(favouriteFilms))
        

        const selectFavFilm = document.getElementById(`fav-film${filmId}`)
        selectFavFilm.classList = 'fav-color'
    }
}
