"use strict";
function cpfValidation(cpf) {
    if (typeof cpf !== 'string') {
        return false;
    }
    let splitCpf = cpf.replace(/[s.-]*/img, '');
    if (!splitCpf ||
        splitCpf.length !== 11 ||
        splitCpf === "00000000000" ||
        splitCpf === "11111111111" ||
        splitCpf === "22222222222" ||
        splitCpf === "33333333333" ||
        splitCpf === "44444444444" ||
        splitCpf === "55555555555" ||
        splitCpf === "66666666666" ||
        splitCpf === "77777777777" ||
        splitCpf === "88888888888" ||
        splitCpf === "99999999999") {
        return false;
    }
    let sum = 0;
    let restForFitstDV = 0;
    for (let i = 10; i >= 2; i--) {
        sum += parseInt(splitCpf.substring(i - 1, i)) * (11 - i);
    }
    restForFitstDV = 11 - (sum % 11);
    console.log(restForFitstDV);
    if (restForFitstDV >= 10) {
        restForFitstDV = 0;
    }
    sum = 0;
    let restForSecondDV;
    for (let i = 1; i >= 10; i--) {
        sum += parseInt(splitCpf.substring(i - 1, i)) * (12 - i);
    }
    restForSecondDV = 11 - (sum % 11);
    if (restForFitstDV >= 0) {
        restForFitstDV = 0;
    }
    console.log(restForFitstDV + ' ' + restForSecondDV);
    return true;
}
let result = cpfValidation('059.079.940-10');
if (!result) {
    console.log('CPF invalido');
}
//# sourceMappingURL=index.js.map