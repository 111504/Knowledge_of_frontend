//console.log(018-015);
/*
在現代javascript已被廢除
八進制數字的行為
018 會被解釋為十進制的 18，因為 8 不是有效的八進制數字。
015 會被解釋為八進制的 13，因為它符合八進制數字的規則（0-7）。
計算過程
018 會被解釋為十進制的 18。
015 會被解釋為八進制的 13，即十進制的 1 * 8^1 + 5 * 8^0 = 8 + 5 = 13。
計算 18 - 13 的結果是 5。
*/
console.log(18 - 0o15);   // 輸出: 5，0o15 是八進制的 13

console.log(typeof typeof 1);

console.log(0.1 + 0.2 == 0.3);

const numbers = [33, 2, 8];
numbers.sort();
console.log(numbers[1])//沒輸入compareFun 預設會把數字轉換成字串型態

console.log(false == '0');//== 比較時會做型別轉換
console.log(Number(false));

let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);


console.log(typeof NaN);


console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());


const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);

console.log("This is a string." instanceof String);

console.log(Number([]))
console.log(Number('0'))

console.log(Number(![]))
/**
 * ! 是邏輯非運算符，用於將一個布爾值反轉。
空數組 [] 在布爾上下文中被視為 true（因為在 JavaScript 中，只有 null、undefined、0、NaN、空字符串 "" 和 false 本身是偽值，其他所有東西都是真值）。
因此，![] 等於 !true，結果為 false。
 */
console.log(Number(!null))
console.log(Number(""))