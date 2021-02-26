const sumAll = function(i, y) {
    let sumOf = 0
    if (Number.isInteger(i) && Number.isInteger(y) && i >= 0 && y >= 0) {
        if (i < y) {
            for (i; i != y + 1; i++) {
                sumOf += i
            }
        } else {
            for (y; y != i + 1; y++) {
                sumOf += y
            }

        }
        return sumOf
    }
    return "ERROR"
}

module.exports = sumAll