

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
const filmSoul = document.getElementById('film-soul') || []
const filmUs = document.getElementById('film-us') || []
const filmTheJoker = document.getElementById('film-the-joker') || []
const filmSmile = document.getElementById('film-smile') || []
const filmADogJourney = document.getElementById('film-a-dog-journey') || []
const filmSerenity = document.getElementById('film-serenity') || []
const filmThorRagnarok = document.getElementById('film-thor-ragnarok') || []
const filmGranizo = document.getElementById('film-granizo') || []
const filmJohnWick = document.getElementById('film-john-wick') || []
const filmVenom = document.getElementById('film-venom') || []
const filmTheGirlOfTheTrain = document.getElementById('film-the-girl-of-the-train') || []
const filmThe5thWave = document.getElementById('film-the-5th-wave') || []
const filmRed = document.getElementById('film-red') || []
const filmPig = document.getElementById('film-pig') || []
const filmOld = document.getElementById('film-old') || []
const filmTheInvitation = document.getElementById('film-the-invitation') || []
const film2067 = document.getElementById('film-2067') || []
const filmTheRequin = document.getElementById('film-the-requin') || []
const filmSoCold = document.getElementById('film-so-cold') || []
const filmKadaver = document.getElementById('film-kadaver') || []
const filmItChapterTwo = document.getElementById('film-it-chapter-two') || []
const filmBreathe = document.getElementById('film-breathe') || []
const filmTheSeaBeast = document.getElementById('film-the-sea-beast') || []
const filmDriftingHome = document.getElementById('film-drifting-home') || []
const filmMinari = document.getElementById('film-minari') || []
const filmPassengers = document.getElementById('film-passengers') || []
const filmTheNun = document.getElementById('film-the-nun') || []
const filmCaptainMarvel = document.getElementById('film-captain-marvel') || []
const filmTheImitationGame = document.getElementById('film-the-imitation-game') || []
const filmMyPoliceman = document.getElementById('film-my-policeman') || []
const filmMulan = document.getElementById('film-mulan') || []
const filmAMonsterCalls = document.getElementById('film-a-monster-calls') || []
const filmNope = document.getElementById('film-nope') || []
const filmFatherOfTheBride = document.getElementById('film-father-of-the-bride') || []
const filmLightyear = document.getElementById('film-lightyear') || []
const filmTheTomorrowWar = document.getElementById('film-the-tomorrow-war') || []
const filmParasite = document.getElementById('film-parasite') || []
const filmCam = document.getElementById('film-cam') || []
const filmMoana = document.getElementById('film-moana') || []
const filmPinocchio = document.getElementById('film-pinocchio') || []
const filmAfterEverHappy = document.getElementById('film-after-ever-happy') || []
const filmLighthouse = document.getElementById('film-lighthouse') || []
const filmMinionsTrog = document.getElementById('film-minions-trog') || []
const filmFahrenheit451 = document.getElementById('film-fahrenheit-451') || []
const filmLuca = document.getElementById('film-luca') || []
const filmCarter = document.getElementById('film-carter') || []
const filmFindingDory = document.getElementById('film-finding-dory') || []
const filmDoctorStrangeItmom = document.getElementById('film-doctor-strange-itmom') || []
const filmHustle = document.getElementById('film-hustle') || []


const findId1 = allFilms.filter((film) => film.id === 1)
const findId2 = allFilms.filter((film) => film.id === 2)
const findId3 = allFilms.filter((film) => film.id === 3)
const findId4 = allFilms.filter((film) => film.id === 4)
const findId5 = allFilms.filter((film) => film.id === 5)
const findId6 = allFilms.filter((film) => film.id === 6)
const findId7 = allFilms.filter((film) => film.id === 7)
const findId8 = allFilms.filter((film) => film.id === 8)
const findId9 = allFilms.filter((film) => film.id === 9)
const findId10 = allFilms.filter((film) => film.id === 10)
const findId11 = allFilms.filter((film) => film.id === 11)
const findId12 = allFilms.filter((film) => film.id === 12)
const findId13 = allFilms.filter((film) => film.id === 13)
const findId14 = allFilms.filter((film) => film.id === 14)
const findId15 = allFilms.filter((film) => film.id === 15)
const findId16 = allFilms.filter((film) => film.id === 16)
const findId17 = allFilms.filter((film) => film.id === 17)
const findId18 = allFilms.filter((film) => film.id === 18)
const findId19 = allFilms.filter((film) => film.id === 19)
const findId20 = allFilms.filter((film) => film.id === 20)
const findId21 = allFilms.filter((film) => film.id === 21)
const findId22 = allFilms.filter((film) => film.id === 22)
const findId23 = allFilms.filter((film) => film.id === 23)
const findId24 = allFilms.filter((film) => film.id === 24)
const findId25 = allFilms.filter((film) => film.id === 25)
const findId26 = allFilms.filter((film) => film.id === 26)
const findId27 = allFilms.filter((film) => film.id === 27)
const findId28 = allFilms.filter((film) => film.id === 28)
const findId29 = allFilms.filter((film) => film.id === 29)
const findId30 = allFilms.filter((film) => film.id === 30)
const findId31 = allFilms.filter((film) => film.id === 31)
const findId32 = allFilms.filter((film) => film.id === 32)
const findId33 = allFilms.filter((film) => film.id === 33)
const findId34 = allFilms.filter((film) => film.id === 34)
const findId35 = allFilms.filter((film) => film.id === 35)
const findId36 = allFilms.filter((film) => film.id === 36)
const findId37 = allFilms.filter((film) => film.id === 37)
const findId38 = allFilms.filter((film) => film.id === 38)
const findId39 = allFilms.filter((film) => film.id === 39)
const findId40 = allFilms.filter((film) => film.id === 40)
const findId41 = allFilms.filter((film) => film.id === 41)
const findId42 = allFilms.filter((film) => film.id === 42)
const findId43 = allFilms.filter((film) => film.id === 43)
const findId44 = allFilms.filter((film) => film.id === 44)
const findId45 = allFilms.filter((film) => film.id === 45)
const findId46 = allFilms.filter((film) => film.id === 46)
const findId47 = allFilms.filter((film) => film.id === 47)
const findId48 = allFilms.filter((film) => film.id === 48)
const findId49 = allFilms.filter((film) => film.id === 49)
const findId50 = allFilms.filter((film) => film.id === 50)



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

    filmSoul.innerHTML = `
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
                    <a href="https://pelispedia.one/pelicula/soul/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/xOsLIiBStEs"></iframe>
    </div>
    `

})

findId3.forEach(film => {

    filmUs.innerHTML = `
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
                    <a href="https://www.netflix.com/es-en/title/81026600">
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
        <iframe src="https://www.youtube.com/embed/hNCmb-4oXJA"></iframe>
    </div>
    `

})

findId4.forEach(film => {

    filmTheJoker.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/joker-2019/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/joker-online-hd/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/t433PEQGErc"></iframe>
    </div>
    `

})

findId5.forEach(film => {

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

findId6.forEach(film => {

    filmADogJourney.innerHTML = `
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
                    <a href="https://www.netflix.com/es-en/title/81037744">
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
        <iframe src="https://www.youtube.com/embed/A2FrrSyyKfA"></iframe>
    </div>
    `

})

findId7.forEach(film => {

    filmSerenity.innerHTML = `
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
                    <a href="https://pelispedia.one/pelicula/obsesion-serenity/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/k3zMlsEK8xA"></iframe>
    </div>
    `

})

findId8.forEach(film => {

    filmThorRagnarok.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/thor-ragnarok-2017/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/thor-ragnarok/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/v7MGUNV8MxU"></iframe>
    </div>
    `

})

findId9.forEach(film => {

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

findId10.forEach(film => {

    filmJohnWick.innerHTML = `
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
                    <a href="https://www.netflix.com/uy/title/80131552">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/john-wick-chapter-2-2017/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/john-wick-pacto-de-sangre/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/XGk2EfbD_Ps"></iframe>
    </div>
    `
})

findId11.forEach(film => {

    filmVenom.innerHTML = `
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
                    <a href="https://www.netflix.com/es/title/80991034">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/venom-2018/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/venom/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/u9Mv98Gr5pY"></iframe>
    </div>
    `
})

findId12.forEach(film => {

    filmTheGirlOfTheTrain.innerHTML = `
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
                    <a href="https://www.netflix.com/uy-en/title/81144153">
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
        <iframe src="https://www.youtube.com/embed/y5yk-HGqKmM"></iframe>
    </div>
    `
})

findId13.forEach(film => {

    filmThe5thWave.innerHTML = `
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
                    <a href="https://www.netflix.com/title/80067831">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/la-quinta-ola/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/kmxLybfGNC4"></iframe>
    </div>
    `
})

findId14.forEach(film => {

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

findId15.forEach(film => {

    filmPig.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/pig-2021/">
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
        <iframe src="https://www.youtube.com/embed/gH6vhlNTLUk"></iframe>
    </div>
    `
})

findId16.forEach(film => {

    filmOld.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/old-2021/">
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
        <iframe src="https://www.youtube.com/embed/A4U2pMRV9_k"></iframe>
    </div>
    `
})

findId17.forEach(film => {

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

findId18.forEach(film => {

    film2067.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/2067-2020/">
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
        <iframe src="https://www.youtube.com/embed/5DffqtgDOMU"></iframe>
    </div>
    `

})

findId19.forEach(film => {

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

findId20.forEach(film => {

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

findId21.forEach(film => {

    filmKadaver.innerHTML = `
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
                    <a href="https://www.netflix.com/title/81203335">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/kadaver-2020/">
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
        <iframe src="https://www.youtube.com/embed/Bc8sZbEEO8U"></iframe>
    </div>
    `

})

findId22.forEach(film => {

    filmItChapterTwo.innerHTML = `
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
                    <a href="https://pelispedia.one/pelicula/it-capitulo-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/xhJ5P7Up3jA"></iframe>
    </div>
    `

})

findId23.forEach(film => {

    filmBreathe.innerHTML = `
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
        <iframe src="https://www.youtube.com/embed/JycCFypvgmI"></iframe>
    </div>
    `

})

findId24.forEach(film => {

    filmTheSeaBeast.innerHTML = `
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
                    <a href="https://www.netflix.com/title/81018682">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/the-sea-beast-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/el-monstruo-marino/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/P-E-IGQCsPo"></iframe>
    </div>
    `

})

findId25.forEach(film => {

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

findId26.forEach(film => {

    filmMinari.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/minari-2021/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/minari-historia-de-mi-familia/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/KQ0gFidlro8"></iframe>
    </div>
    `

})

findId27.forEach(film => {

    filmPassengers.innerHTML = `
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
                    <a href="https://www.netflix.com/title/80117456">
                    <button>Netflix</button>
                    </a>
                    <a href="#">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/passengers/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/7BWWWQzTpNU"></iframe>
    </div>
    `

})

findId28.forEach(film => {

    filmTheNun.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/the-nun-2018/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/la-monja/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/zwAM5UnGd2s"></iframe>
    </div>
    `

})

findId29.forEach(film => {

    filmCaptainMarvel.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/captain-marvel-2019/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/capitana-marvel/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/0LHxvxdRnYc"></iframe>
    </div>
    `

})

findId30.forEach(film => {

    filmTheImitationGame.innerHTML = `
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
                    <a href="https://www.netflix.com/title/70295172">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/the-imitation-game-2014/">
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
        <iframe src="https://www.youtube.com/embed/VHeUNxBvmMg"></iframe>
    </div>
    `

})

findId31.forEach(film => {

    filmMyPoliceman.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/my-policeman-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/mi-policia/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/xAEgWXOH1mY"></iframe>
    </div>
    `

})

findId32.forEach(film => {

    filmMulan.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/mulan-2020/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/mulan/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/KK8FHdFluOQ"></iframe>
    </div>
    `

})

findId33.forEach(film => {

    filmAMonsterCalls.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/a-monster-calls-2016/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/un-monstruo-viene-a-verme/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/jDbpDVfXpFY"></iframe>
    </div>
    `

})

findId34.forEach(film => {

    filmNope.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/nope-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/nop/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/In8fuzj3gck"></iframe>
    </div>
    `

})

findId35.forEach(film => {

    filmFatherOfTheBride.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/father-of-the-bride-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/el-padre-de-la-novia/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/ikL2lkWKYA8"></iframe>
    </div>
    `

})

findId36.forEach(film => {

    filmLightyear.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/lightyear-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/lightyear/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/BwZs3H_UN3k"></iframe>
    </div>
    `

})

findId37.forEach(film => {

    filmTheTomorrowWar.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/the-tomorrow-war-2021/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/lightyear/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/LnIbOiskSdc"></iframe>
    </div>
    `

})

findId38.forEach(film => {

    filmParasite.innerHTML = `
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
                    <a href="https://www.netflix.com/title/81221938">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/%ea%b8%b0%ec%83%9d%ec%b6%a9-2019/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/parasitos-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/5xH0HfJHsaY"></iframe>
    </div>
    `

})

findId39.forEach(film => {

    filmCam.innerHTML = `
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
                    <a href="https://www.netflix.com/title/80177400">
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
        <iframe src="https://www.youtube.com/embed/p1DahKn4HZk"></iframe>
    </div>
    `

})

findId40.forEach(film => {

    filmMoana.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/moana-2016/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/vaiana/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/LKFuXETZUsI"></iframe>
    </div>
    `

})

findId41.forEach(film => {

    filmPinocchio.innerHTML = `
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
                    <a href="https://www.netflix.com/uy/title/80218455">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/guillermo-del-toros-pinocchio-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/pinocho-de-guillermo-del-toro/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/Od2NW1sfRdA"></iframe>
    </div>
    `

})

findId42.forEach(film => {

    filmAfterEverHappy.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/after-ever-happy-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/after-amor-infinito/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/TlAukkPK-dc"></iframe>
    </div>
    `

})

findId43.forEach(film => {

    filmLighthouse.innerHTML = `
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
                    <a href="https://www.netflix.com/title/81135068">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/the-lighthouse-2019/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/el-faro/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/42_UHhpq530"></iframe>
    </div>
    `

})

findId44.forEach(film => {

    filmMinionsTrog.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/minions-the-rise-of-gru-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/minions-el-origen-de-gru-2/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/HhIl_XJ-OGA"></iframe>
    </div>
    `

})

findId45.forEach(film => {

    filmFahrenheit451.innerHTML = `
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
                    <a href="https://pelispedia.one/pelicula/fahrenheit-451/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/ek0HkV7y4w8"></iframe>
    </div>
    `

})

findId46.forEach(film => {

    filmLuca.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/luca-2021/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/luca/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/mYfJxlgR2jw"></iframe>
    </div>
    `

})

findId47.forEach(film => {

    filmCarter.innerHTML = `
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
                    <a href="https://www.netflix.com/title/81399639">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/%ec%b9%b4%ed%84%b0-2022/">
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
        <iframe src="https://www.youtube.com/embed/p0nbdTaNMhc"></iframe>
    </div>
    `

})

findId48.forEach(film => {

    filmFindingDory.innerHTML = `
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
                    <a href="https://pelispedia.one/pelicula/buscando-a-dory/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/JhvrQeY3doI"></iframe>
    </div>
    `

})

findId49.forEach(film => {

    filmDoctorStrangeItmom.innerHTML = `
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
                    <a href="https://cuevana3.info/pelicula/doctor-strange-in-the-multiverse-of-madness-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/doctor-strange-en-el-multiverso-de-la-locura/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/aWzlQ2N6qqg"></iframe>
    </div>
    `

})

findId50.forEach(film => {

    filmHustle.innerHTML = `
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
                    <a href="https://www.netflix.com/title/80242342">
                    <button>Netflix</button>
                    </a>
                    <a href="https://cuevana3.info/pelicula/hustle-2022/">
                        <button>Cuevana</button>
                    </a>
                    <a href="https://pelispedia.one/pelicula/garra-hustle/">
                        <button>PelisPedia</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="trailer-info">
        <iframe src="https://www.youtube.com/embed/nM4iy0reaCA"></iframe>
    </div>
    `

})