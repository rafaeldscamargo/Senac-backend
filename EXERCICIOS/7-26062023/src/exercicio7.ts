/*
Função que recebe  string com nome, outra string com data ('26/06/2023').
Retornar string no formato:
`Olá me chamo ${nome}, naci no dia ${dia} do mes ${mes} do ano de ${ano}`;
*/

function apresentation(name: string, dateBirth: string): string {
    const nameApresentation: string = name;
    let splitDate = dateBirth.split('/')
    //console.log(splitDate);
    return `Olá me chamo ${nameApresentation}, naci no dia ${splitDate[0]} do mes ${splitDate[1]} do ano de ${splitDate[2]}`;
}

console.log(apresentation('Soares', '12/03/2022'));