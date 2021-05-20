let numberOfFilms = +prompt('How many films did you see ?', '');

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
for(let i = 0; i<2; i++){
    
   const a = prompt('One of the last seen films?', ''),
    b = prompt('The mark of that film?', '');

//null eto cancel. polizovateli ne najal knopku cancel  a.lenght - kol-vo simvolov 
 if ( a!= null && b !=null && a!= '' && b != '' && a.length<50){
personalMovieDB.movies[a] = b;
console.log('done');

 }else{
     console.log('Error');
     //inace vozvrahaemsea na 1 hag nazad 
     i--;
 }


}


if (personalMovieDB.count<10){
console.log('You have seen not a lot films');
}else if(personalMovieDB.count >10 && personalMovieDB.count <30){
console.log('klassik men ');
}else if (personalMovieDB.count>=30){
    console.log('You are tv-MAn');
}else{
    console.log('erroe');
}

console.log(personalMovieDB);

//2
