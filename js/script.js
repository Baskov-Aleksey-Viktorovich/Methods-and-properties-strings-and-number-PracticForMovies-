"use strict";
    let numberOfFilms;
    function start(){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };
        function rememberMyFilms(){
            for (let i =0; i < 2; i++){
                const a = prompt('Один из последних просмотренных фильмов', '');
                const b = prompt('На сколько оцените его?', '');
                if (a != null && b != null && a !='' && b !='' && a.length < 50 && b.length < 50){
                    personalMovieDB.movies[a] = b;
                    console.log('Yes');
                } else{
                    console.log('Error');
                    i--;
                }
    }
}

    rememberMyFilms();

        function detectPersonalLevel(){
            if (personalMovieDB.count < 10){
                console.log('Просмотренно довольно мало фильмов');
        
            } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            {
                console.log('Вы классический зритель');
            }
                else if(personalMovieDB.count >= 30 ){
                console.log('Вы киномаН');
            }else{
                    console.log('Произошла ошибка!');
                    
                }
        }  
function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


        detectPersonalLevel();

        function writeYourGeners(){
            for (let i =1; i <= 3; i++){
                const d = prompt(`Ваш любимый жанр под номером ${i}`);
                if (d != null && d != null && d !='' && d !='' && d.length < 50 && d.length < 50){
                    personalMovieDB.genres[i - 1] = d; 
                    console.log('Yes');
                } else{
                    console.log('Error');
                    i--;
                }
        }
    }
    writeYourGeners();
    console.log(personalMovieDB);