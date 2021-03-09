const askWhatSize = code => (code < 97 ? 65 : 97); //checks which number it needs too return
const solve = (n, m) => (n % m + m) % m; // helps with negative numbers

const caesar = function(letters, distance) {
    let res = ""
    const leter = /^[A-Za-z]+$/;
    for (let c of letters) {
        if ((/[a-zA-Z]/).test(c)) {
            let mod = (c.charCodeAt(0))
            if ((mod >= 65 && mod <= 90) || (mod >= 97 && mod <= 122)) {
                res += String.fromCharCode(solve(mod + distance - askWhatSize(mod), 26) + askWhatSize(mod))
            }
        } else {
            res += c
        }
    }
    return res
}

module.exports = caesar