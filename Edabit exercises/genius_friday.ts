
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

// function id_mtrx(num: number): number[][] {
//     // this checks if 0 was passed in
//     if (num === 0) return [];

//     let matrix: number[][] = [];

//     // check if num is negative
//     if (num > 0) {
//         // using loop to create the matrix
//         for (let i = 0; i < num; i++) {
//             let temp: number[] = [];
//             for (let j = 0; j < num; j++){
//                 temp.push(i === j ? 1 : 0);
//             }
//             matrix.push(temp);
//         }
//     }else {
//         for (let i = num; i < 0; i++) {
//             let temp: number[] = [];
//             for (let j = num; j < 0; j++){
//                 temp.push(i === j ? 1 : 0);
//             }
//             matrix.push(temp);
//         }
//     }

//     return matrix;
// }
function id_mtrx(num: number): number[][] {
    // this checks if 0 was passed in
    if (num === 0) return [];

    let matrix: number[][] = [];
    let i: number = 0;
    let isNegative: boolean = num < 0;

    while (i < Math.abs(num) ** 2){

    }

    return matrix;
}

console.log(id_mtrx(0))
console.log(id_mtrx(-2))
console.log(id_mtrx(2))