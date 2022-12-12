
const favouriteFilms = JSON.parse(localStorage.getItem('film')) || []
const filmContainer = document.getElementById('films-container')
const searchGet = document.getElementById('films-search')

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


searchGet.addEventListener("input", () => {
    const cards = document.querySelectorAll('.film-container')
    const searchInput = document.getElementById('films-search').value



    filmPage.forEach((film, index) => {
        if (film.lowername.includes(searchInput) || film.name.includes(searchInput)) {
            cards[index].classList.remove("hide")
        } else {
            cards[index].classList.add("hide")
        }
    })
})





const obtenerDatosFilms = () => {
    fetch('../data/data.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            renderAllFilms(data)

        })
        .catch((err) => {
            console.log(err)
        })
}


const renderAllFilms = (films) => {
    filmPage = films

    let html = "";

    filmPage.map((film) => {
        
        const itemFav = favouriteFilms.find((fav) => fav.id === film.id)

        if(favouriteFilms.includes(itemFav)){
            
            html += `
            <div class="film-container" id="${film.id}">
                <a href="${film.url}">
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
            <a href="${film.url}">
                <img src="${film.img}" alt="${film.name}">
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
    filmContainer.innerHTML = html
}

window.addEventListener('DOMContentLoaded', obtenerDatosFilms)


const addFilmFavourite = (filmId) => {
    const filmItem = filmPage.find((film) => film.id === filmId)
    const findFavFilms = favouriteFilms.find((film) => film.id === filmId)
    const indexFav = favouriteFilms.indexOf(findFavFilms)

    if (favouriteFilms.includes(findFavFilms)) {
        favouriteFilms.splice(indexFav, 1)

        Swal.fire(
            'Okay...',
            `You removed <strong>${filmItem.name}</strong> from your favourite list.`,
            'error'
        )


        localStorage.setItem('film', JSON.stringify(favouriteFilms))

        const selectFavFilm = document.getElementById(`fav-film${filmId}`)
        selectFavFilm.classList = 'fav-uncolor'

    } else if (!favouriteFilms.includes(findFavFilms)) {
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


