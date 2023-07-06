/*
Criar uma funcão que recebe o primeiro e o sebrenome, o sobrenome pode ser nulo, exibir nome completo
*/

function fullName(firstName: string, lastName?: string): void {
    console.log(firstName, lastName || '');
}

fullName('Ronaldinho')