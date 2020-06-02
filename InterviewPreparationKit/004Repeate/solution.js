
'use strict';

class solution {
    constructor(s, n) {

        const countA = (str) => str.split('')
            .filter(c => c == 'a')
            .length;

        const d = Math.floor(n / s.length);
        const r = n - (s.length * d);
        return d * countA(s) + countA(s.substr(0, r))
    }
}

module.exports = solution;
