"use strict";
function apresentation(name, dateBirth) {
    const nameApresentation = name;
    let splitDate = dateBirth.split('/');
    return `Olá me chamo ${nameApresentation}, naci no dia ${splitDate[0]} do mes ${splitDate[1]} do ano de ${splitDate[2]}`;
}
console.log(apresentation('Soares', '12/03/2022'));
//# sourceMappingURL=exercicio7.js.map