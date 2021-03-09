const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    let a = 0,
        b = 1,
        f = 0
    for (let i = 1; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return a;
};
module.exports = fibonacci