const numbertOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');

const personalMovieDB = {
	count: numbertOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
};


for (let i = 0; i < 2; i++){
	const a = prompt('Один из последних просмотренных фильмов', ''),
				b = prompt('На сколько оцените его?','');
	if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
			personalMovieDB.movies[a] = b;
			console.log('done');
	} else{
			console.log('error');
			i--;
	}
}
if (personalMovieDB.count < 10){
	console.log('мало')
}else if (personalMovieDB.count > 10 && personalMovieDB.count<30 ){
	console.log('нормально')
}else{
	console.log('много')
}
console.log(personalMovieDB)