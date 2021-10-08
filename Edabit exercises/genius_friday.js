// function lengthOfNumber(num: number): number {
//     return num.toString().length;
// }
// console.log(lengthOfNumber(2352))  
// function asc_dsc_none(arr: number[], mode: string): number[] {
//     switch(mode){
//         case 'Asc':
//             return arr.sort((a, b) => a - b);
//         case 'Des':
//             return arr.sort((a, b) => b - a);
//         default:
//             return arr;
//     }
// }
// console.log(asc_dsc_none([4,3,2,1], 'Asc'))
// console.log(asc_dsc_none([7,8,11,66], 'Des'))
// console.log(asc_dsc_none([1,2,3,4], 'None'))
function id_mtrx(num) {
    // this checks if 0 was passed in
    if (num === 0)
        return [];
    var matrix = [];
    // check if num is negative
    if (num > 0) {
        // using loop to create the matrix
        for (var i = 0; i < num; i++) {
            var temp = [];
            for (var j = 0; j < num; j++) {
                i === j ? temp.push(1) : temp.push(0);
            }
            matrix.push(temp);
        }
    }
    else {
        for (var i = num; i < 0; i++) {
            var temp = [];
            for (var j = num; j < 0; j++) {
                i === j ? temp.push(1) : temp.push(0);
            }
            matrix.push(temp);
        }
    }
    return matrix;
}
console.log(id_mtrx(0));
console.log(id_mtrx(-2));
console.log(id_mtrx(2));
