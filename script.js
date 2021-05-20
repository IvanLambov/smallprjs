let numberOfFilms= +prompt ('How many films did you see ?','' ) ;

let personalMovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const a= prompt('One of the last seen films?',''),
b= prompt ('The mark of that film?',''),
c = prompt('One of the last seen films?', ''),
    d = prompt('The mark of that film?', '');
    personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;
        console.log(personalMovieDB);

