function multiply(m1, m2) {
    let row = m1[0].length;
    if (m2.length == row) {
        let result = [];
        let column = m2[0].length;
        for (let i = 0; i < row; i++) {
            result[i] = [];
            for (let j = 0; j < column; j++) {
                let sum = 0;
                for (let k = 0; k < row; k++) {
                    sum += m1[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    } else return null;
}
module.exports = {
    multiply
}