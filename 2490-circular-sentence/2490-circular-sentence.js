/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    
    if (hasSameFirstAndLastChar(sentence)) {
    
        const sentenceArr = sentence.split(" ");

    return areCircularWords(sentenceArr);
        
    } else {
        return false;
    }
    
};
    
var hasSameFirstAndLastChar = function(sentence) {
    const first = sentence.slice(0,1);
    const last =  sentence.slice(sentence.length - 1);

    if (first !== last) {
        return false;
    } else {
        return true;
    }
    
}

var areCircularWords = function(sentenceArr) {
    let prevLastChar = sentenceArr[0].slice(sentenceArr[0].length - 1);

    for (let i = 1; i< sentenceArr.length; i++) {
        let curWord = sentenceArr[i];
            let curFirstChar = curWord[0];
            if (prevLastChar === curFirstChar) {
                let curLastChar = curWord[curWord.length - 1];
                prevLastChar = curLastChar;
            } else {
                return false;
            }
    }
    return true;
    
}