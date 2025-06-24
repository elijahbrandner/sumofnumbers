"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFor = sumFor;
exports.sumWhile = sumWhile;
exports.sumRecursion = sumRecursion;
exports.sumTheFunctionalWay = sumTheFunctionalWay;
function sumFor(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    let total = 0;
    let i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}
function sumRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers[0] + sumRecursion(numbers.slice(1));
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumFor([1, 2, 3, 4])); // 10
console.log(sumWhile([1, 2, 3, 4])); // 10
console.log(sumRecursion([1, 2, 3, 4])); // 10
console.log(sumTheFunctionalWay([1, 2, 3, 4])); // 10
