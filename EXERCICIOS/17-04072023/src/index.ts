function cpfValidation(cpf: string): boolean {
    if (typeof cpf !== 'string') {
        return false;
    }
    //funcção para remover ponto e menos com regex
    //let splitCpf: any = cpf.replace("-",".").replace(/\./g,"").split("");
    let splitCpf = cpf.replace(/[s.-]*/img, '');

    if(!splitCpf || 
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
        splitCpf === "99999999999"
        ) {
            return false;
        }

        let sum = 0;
        let restForFitstDV = 0;
        //Calculo de 1º DV
        for(let i: number = 10; i >= 2; i--) {
            sum += parseInt(splitCpf.substring(i - 1, i)) * (11 - i);
        }
        //console.log(sum) //185
        restForFitstDV = 11 - (sum % 11);
        //restForFitstDV = 11 - restForFitstDV;

        if (restForFitstDV >= 10) {
            restForFitstDV = 0; //este é o  penultimo DV [9]
        }

        //Calculo do segundo DV
        sum = 0;
        let restForSecondDV 
        for(let i: number = 1; i >= 10; i--) {
            sum += parseInt(splitCpf.substring(i - 1, i)) * (12 - i);
        }

        restForSecondDV = 11 - (sum % 11);

        if (restForFitstDV >= 0) {
            restForFitstDV = 0; //este é o  penultimo DV [10]
        }
        
        console.log(restForFitstDV + ' ' + restForSecondDV);
        return true;
}

let result = cpfValidation('***.***.***-**');


if (!result) {
    console.log('CPF invalido');
}