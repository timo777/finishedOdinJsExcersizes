const repeatString = function(y, x) {
    if (x === -1) {
        return "ERROR";
        }
    let result = ""
    for (let i=0; i != x; i++) {
        result += y;
    }
    return result;
}

module.exports = repeatString
