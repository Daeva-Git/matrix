const matrix = require('./utils.js');

let matrix1 = [
    [31, 42, 45],
    [23, 27, 85],
    [0, 34, 42]
];
let matrix2 = [
    [85, 25, 34],
    [34, 64, 75],
    [75, 67, 58]
];

matrix.print(matrix.multiply(matrix1, matrix2));
