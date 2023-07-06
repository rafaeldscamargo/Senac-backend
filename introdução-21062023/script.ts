//DECLARAÇÃO DE VARIAVEIS
const company: string = 'senac';
let age: number= 28;
let isCorrect: boolean = true;


//DECLARAÇÃO DE ARRAY
const arr: Array <number> = [1, 2, 3];
const array: number[] = [1, 2, 3];


//DECLARAÇÃO DE OBJETO
const person: {
    name: string,
    age: number
} = {
    name: 'senac',
    age: 30
}


//DECLARAÇÃO DE TIPO ANY
let result: any;
result = 'result';
result = 1903;
result = true;

//DECLARAÇÃO DE FUNÇÃO TIPADA
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

function resulrSum(n1: number, n2: number): string {
    let result = n1 + n2;
    return `Resultado é ${result}.`;
}


//DECLARAÇÃO DE FUNÇÃO VOID
function sayHello(name?: string): void {
    console.log('Hello, ', name || 'World');
}


