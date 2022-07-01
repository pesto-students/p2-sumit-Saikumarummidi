function spiralOrder(matrix, m, n) {
    let rowStart = 0;
    let rowEnd = m;
    let columnStart = 0;
    let columnEnd = n;

    let result = []

    while (rowStart < rowEnd && columnStart < columnEnd) {
        for(let i = columnStart; i < columnEnd; i++) {
            result.push(matrix[rowStart][i])
        }
        rowStart++;
        
        for(let i = rowStart; i < rowEnd; i++) {
            result.push(matrix[i][columnEnd - 1])
        }
        columnEnd--;
        for(let i = columnEnd - 1; i >= columnStart; i--) {
            result.push(matrix[rowEnd - 1][i])
        }
        rowEnd--;
        for(let i = rowEnd - 1; i >= rowStart;i--) {
            result.push(matrix[i][columnStart])
        }
        columnStart++;
        
    }
 return result;
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]],3,3))