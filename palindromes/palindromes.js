const palindromes = function(sentence) {
    var re = /[\W_]/g;
    const y = sentence.toLowerCase().replace(re, '')
    const x = y.split("").reverse().join("")
    if (y === x) {
        return true
    }
    return false

}

module.exports = palindromes