const nomeEmpresa = "OMMA Receitas";
console.log(nomeEmpresa);

console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

const listaDeReceitas = [
	{
		id: 1,
		titulo: "Risoto de Abobora",
		dificuldade: "simples",
		ingrediente: ["2 colheres (sopa) de azeite ", "1 cebola média bem picada "],
		preparo: "escasque a abóbora e corte-a em cubinhos pequenos.",
		link: "youtube.com",
		vegana: true,
	},
]; //nunca vai deixar de ser um ARRAY

console.log(listaDeReceitas);

console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

const cadastrarReceita = (id, titulo, dificuldade, ingrediente, preparo, link, vegana) => {
	const novaReceita = { id, titulo, dificuldade, ingrediente, preparo, link, vegana };
	listaDeReceitas.push(novaReceita);
	console.log("Cadastro adicionado com sucesso");
};

cadastrarReceita(
	25,
	"Cachorro Quente",
	"simples",
	["1 pao de Leite", "1 Salsicha", "Maionese"],
	"jodbvnujd osbvcujsbn jsbfusb",
	"youtube.com",
	false
);

cadastrarReceita(
	31,
	"Torta Quente",
	"simples",
	["2 ovos", "queijo parmesao"],
	"jodbvnujd osbvcujsbn jsbfusb",
	"youtube.com",
	true
);
console.log(listaDeReceitas);

console.log("\n:::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

// const exibirReceitas = () => {
// 	for (let i = 0; i < listaDeReceitas.length; i++) {
// 		const receita = listaDeReceitas[i];
// 		console.log("---------------------------------");
// 		console.log(`Receita: ${receita.titulo}`);
// 		console.log(`Ingredientes: ${receita.ingrediente}`);
// 		console.log(`E vegana? ${receita.vegana}`);
// 	}
// 	console.log("---------------------------------");
// };

const exibirReceitas = () => {
	listaDeReceitas.forEach((receita) => {
		console.log("---------------------------------");
		console.log(`Receita: ${receita.titulo}`);
		console.log(`Ingredientes: ${receita.ingrediente}`);
		console.log(`E vegana? ${receita.vegana}`);
	});
};

exibirReceitas();

console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

// const deletarReceita = (x) => {
// 	for (let i = 0; i < listaDeReceitas.length; i++) {
// 		if (listaDeReceitas[i].id == x) {
// 			let idDeleted = listaDeReceitas[i].id;
// 			listaDeReceitas.splice(i, 1);
// 			console.log(`Receita do indice ${i} e com id ${idDeleted} deletada com sucesso`);
// 			return;
// 		}
// 	}
// 	console.log(`Nao existe receita com id ${x}`);
// };

const deletarReceita = (id) => {
	let check = 0;
	listaDeReceitas.forEach((receita) => {
		if (id === receita.id) {
			listaDeReceitas.splice(listaDeReceitas[id], 1);
			console.log(`Receita deletada com sucesso`);
			check++;
		}
	});
	if (check == 0) {
		console.log(`Receita nao encontrada`);
	}
};

deletarReceita(1);

console.log(listaDeReceitas);
console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

// const buscarReceita = (busca) => {
// 	let check = 0;
// 	listaDeReceitas.forEach((x) => {
// 		if (x.titulo.includes(busca)) {
// 			console.log(x);
// 			check++;
// 		}
// 	});
// 	if (check == 0) {
// 		console.log(`Receita nao encontrada`);
// 	}
// };
const buscaReceita2 = (busca) => {
	return listaDeReceitas.filter((item) => item.titulo.includes(busca));
};

console.log(buscaReceita2("Quente"));

// const buscarReceita = (termo) => {
// 	const resultado = listaDeReceitas.filter((receita) => receita.titulo.toLowerCase().includes(termo.toLowerCase()));
// 	if (!resultado.length) {
// 		console.log("Nao foi encontrado");
// 	}
// 	return console.log(resultado);
// };
// buscarReceita("QUENTE");
// console.log("\n::::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

// const atualizarReceita = (id, receita) => {
// 	// let check = 0;
// 	listaDeReceitas.forEach((receita) => {
// 		if (receita.id == id) {
// 			receita.titulo = novoTitulo;
// 			receita.dificuldade = novodificuldade;
// 			receita.ingrediente = novoIngredientes;
// 			receita.preparo = novoPreparo;
// 			receita.link = novoLink;
// 			receita.vegana = novoVegana;
// 			check++;
// 		}
// 	});
// 	if (check <= 0) {
// 		console.log("\nCódigo não encontrado. Tente novamente.\n");
// 	} else {
// 		console.log("\nReceita atualizada com sucesso.\n");
// 	}
// };

const atualizarReceita = (id, receitaAtualizada) => {
	let foiAtualizado = false;
	listaDeReceitas.forEach((receita) => {
		if (receita.id != id) {
			return;
		}

		if (receitaAtualizada.titulo) receita.titulo = receitaAtualizada.titulo;
		if (receitaAtualizada.dificuldade) receita.dificuldade = receitaAtualizada.dificuldade;
		if (receitaAtualizada.ingrediente) receita.ingrediente = receitaAtualizada.ingrediente;
		if (receitaAtualizada.preparo) receita.preparo = receitaAtualizada.preparo;
		if (receitaAtualizada.link) receita.link = receitaAtualizada.link;
		if (receitaAtualizada.vegana) receita.vegana = receitaAtualizada.vegana;
		console.log("Receita atualizada com sucesso");
		foiAtualizado = true;
	});
	if (!foiAtualizado) console.log("id nao encontrado");
};

atualizarReceita(31, { titulo: "Pizza de Mussarela" });

console.log(listaDeReceitas);
