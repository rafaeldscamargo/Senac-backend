//Informações esenciais
//nome
//ano
//genero
//pontuação ?
//type é como se foce um esqueleto

enum genre {
	action    ="ação",
	drama   ="drama",
	comedy  ="comédia",
	romance ="romance",
	terror  ="terror"
}

type film = {
	name: string,
	year: number,
	genre: string,
	pontuation: number
}

function getFilms(name: string, year: number, genre: string, pontuation?: number): string {
	let film1: film = {
		name: name,
		year: year,
		genre: genre,
		pontuation: pontuation ? pontuation : 0,
	}

	let hasPontuation = pontuation ? `| Pontuação: ${film1.pontuation}` : '';

	return `Nome: ${film1.name} | Ano: ${film1.year} | Genero: ${film1.genre}| ${hasPontuation}`;
}

console.log(getFilms('GAme of thrones', 2010, genre.romance, 99));