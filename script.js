"use strict"
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films did you see ?', '');
    //proverkstroki
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films did you see ?', '');
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


//const a = prompt('One of the last seen films?', ''),
//  b = prompt('The mark of that film?', ''),
// c = prompt('One of the last seen films?', ''),
// d = prompt('The mark of that film?', '');
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
//console.log(personalMovieDB);

//1 avtomatizirovali ziklom

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const a = prompt('One of the last seen films?', ''),
            b = prompt('The mark of that film?', '');

        //null eto cancel. polizovateli ne najal knopku cancel  a.lenght - kol-vo simvolov 
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');

        } else {
            console.log('Error');
            //inace vozvrahaemsea na 1 hag nazad 
            i--;
        }


    }
}
///rememberMyFilms();


function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You have seen not a lot films');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('klassik men ');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are tv-MAn');
    } else {
        console.log('erroe');
    }
}
//detectPersonaLevel();
//vivodim bazu esli ona publi4naia v konsoli
function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let r = 1; r <= 3; r++) {
        let genre = prompt(`Your favorite genres ${r}`);
        //zapisivaem dannie v massiv 
        personalMovieDB.genres[r -1] = genre ;

    }
    
    
}
writeYourGenres();

console.log(personalMovieDB);

//2