module.exports = function reverse(n) {
    let res = '';
    n = n.toString();
    if (n < 0) {
        n = (-n).toString();
    }
    for (let i = n.length - 1; i >= 0; i--) {
        res = res + n[i];
    }
    return res;
};
