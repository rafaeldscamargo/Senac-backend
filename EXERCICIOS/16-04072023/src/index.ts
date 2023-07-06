/*function anagram(phrase: string): number {
    let num: number = phrase.length;
    let result: number = num;

    while (num > 1) {
        num--;
        result = result * num;
    };

    return result;
};

console.log(anagram('mesa'));
*/

function factorial(word: string): number {
    let wordSize: number = word.length;
    console.log(wordSize);
    
    //com laço if
    /*if (wordSize === 0 || wordSize === 1) {
        return 1;
    }
    */

    //com laço while
    let result = wordSize
    /*while(wordSize > 1) {
        wordSize--;
        result *= wordSize;
    }
    return result;
    */

       //com laço for
       for(let i = wordSize - 1; i > 1 ; i--) {
        wordSize *= i;
    }
}

    return 1;

    factorial("Gremio");
    factorial("");
