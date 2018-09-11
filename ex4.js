// Tù mảng B, Lọc ra 3 mảng chưa các kiểu riêng biệt gao gồm: mảng số, mảng chuỗi, mảng boolean.
//  (Gợi ý dùng "typeof" để check)
/*mảng số*/
let arrFamily = ['Vân', 24, 20, 'Thịnh', true, false];
let a = arrFamily.filter(function(e) {
    return 'number' === typeof e;
})
console.log(a);
/*mảng chuỗi */
let arrFamily = ['Vân', 24, 20, 'Thịnh', true, false];
let a = arrFamily.filter(function(e) {
    return 'string' === typeof e;
})
console.log(a);
/*mảng boolean*/
let arrFamily = ['Vân', 24, 20, 'Thịnh', true, false];
let a = arrFamily.filter(function(e) {
    return 'boolean' === typeof e;
})
console.log(a);