

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


const allFilms = JSON.parse(localStorage.getItem('allfilms')) || []

const filmMorbius = document.getElementById('film-morbius') || []
const filmSmile = document.getElementById('film-smile') || []
const filmGranizo = document.getElementById('film-granizo') || []
const filmRed = document.getElementById('film-red') || []
const filmTheInvitation = document.getElementById('film-the-invitation') || []
const filmTheRequin = document.getElementById('film-the-requin') || []
const filmSoCold = document.getElementById('film-so-cold') || []
const filmDriftingHome = document.getElementById('film-drifting-home') || []


const findId1 = allFilms.filter((film) => film.id === 1)
const findId2 = allFilms.filter((film) => film.id === 5)
const findId3 = allFilms.filter((film) => film.id === 9)
const findId4 = allFilms.filter((film) => film.id === 14)
const findId5 = allFilms.filter((film) => film.id === 17)
const findId6 = allFilms.filter((film) => film.id === 19)
const findId7 = allFilms.filter((film) => film.id === 20)
const findId8 = allFilms.filter((film) => film.id === 25)


findId1.forEach(film => {

    filmMorbius.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.ai/55973/morbius-online">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/morbius-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/oZ6iiRrz1SY"></iframe>
    </div>
    `

})


findId2.forEach(film => {

    filmSmile.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.ai/63105/smile-online">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/smile-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/BcDK7lkzzsU"></iframe>
    </div>
    `

})


findId3.forEach(film => {

    filmGranizo.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="https://www.netflix.com/uy/title/81073970">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.ai/55869/granizo-online">
                        <button>Cuevana</button>
                    </a>
                    <a href="#">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/-F2watcvQQs"></iframe>
    </div>
    `

})



findId4.forEach(film => {

    filmRed.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/red/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/XdKzUbAiswE"></iframe>
    </div>
    `
})


findId5.forEach(film => {

    filmTheInvitation.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/la-invitacion-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/5bL1ftuxgOE"></iframe>
    </div>
    `
})



findId6.forEach(film => {

    filmTheRequin.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="#">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/ZqywpAxNa3E"></iframe>
    </div>
    `

})


findId7.forEach(film => {

    filmSoCold.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="#">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/un-rio-muy-frio/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/h1-RtEJpheY"></iframe>
    </div>
    `

})


findId8.forEach(film => {

    filmDriftingHome.innerHTML = `
    <div class="first-info-film-info">
        <div class="film-first-info" class="img${film.id}">
            <img src="${film.img}" alt="${film.name}">
            <p class="film-info-name">${film.name}</p>
            <p class="film-info-syno">Synopsis: <span>${film.syno}</span></p>
        </div>
        <div class="film-info-buttons">
            <div class="film-info">
                <p>Name: <span>${film.name}</span></p>
                <p>Gender: <span>${film.gender}</span></p>
                <p>Release Date: <span>${film.release}</span></p>
                <p>Duration: <span>${film.term}</span></p>
                <p>Director: <span>${film.director}</span></p>
                <div class="film-buttons-info">
                    <a href="https://www.netflix.com/title/81328781">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.ai/62625/ame-wo-tsugeru-hyoryu-danchi-online">
                        <button>Cuevana</button>
                    </a>
                    <a href="#">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/BSE2KGU5png"></iframe>
    </div>
    `

})