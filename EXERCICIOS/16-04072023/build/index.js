"use strict";
function factorial(word) {
    let wordSize = word.length;
    console.log(wordSize);
    if (wordSize === 0 || wordSize === 1) {
        return 1;
    }
    let result = wordSize;
    while (wordSize >= 0) {
        wordSize--;
        result *= wordSize;
    }
    return result;
    return 1;
}
factorial("Gremio");
factorial("");
//# sourceMappingURL=index.js.map