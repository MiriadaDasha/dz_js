// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
const max_num = 20
let sum = 1 //сумма чисел
let num = 1 //число
while (num <= max_num) {
    sum += num
    num += 1
}
console.log(sum);
