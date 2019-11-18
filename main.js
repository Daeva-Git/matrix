const matrix = require('./utils.js');
const utils = require('./matrix.js');

let matrix1 = [
    [1, 2, 1],
    [0, 4, 0],
    [2, 3, 4]
];
let matrix2 = [
    [1, 2, 1],
    [3, 1, 5],
    [2, 3, 4]
];

utils.printMatrix(matrix.multiply(matrix2, matrix1));
