module.exports = function reverse(n) {
    //     return (n > 0 ? -1 : 1) * parseInt(n.toString().split('').reverse().join(''));
    // };
    if (n > 0) {
        return (1 || -1) * parseInt(n.toString().split('').reverse().join(''));
    } else if (n < 0) {
        return (1 || -1) * parseInt(n.toString().split('').reverse().join(''));
    }
};
