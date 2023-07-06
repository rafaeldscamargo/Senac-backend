let products = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
];


const adjustPrice = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ " + valorAjustado
}

type stock = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string,
}

function listProducts(products: stock[]): string[] {
    //use a função ajustarPreco para corrigir os preços
    products.map(product => {
        product.valorUnitario = adjustPrice(product.valorUnitario as number)
    });

    return products.sort((a,b) => 
        a.quantidade - b.quantidade
    ) as any
}

console.table(listProducts(products));