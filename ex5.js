// ex5: Từ mảng B, viết mã để in ra màn hình 2 kết quả như sau:


/*//    - Tổng của các phần tử có kiểu số (expect: 44)*/
let arrFamily = ['Vân', 24, 20, 'Thịnh', true, false];
let sum=0 ; 
arrFamily.forEach(function(i){
if ( typeof i==="number"){
	sum+=i;
}
})
console.log(sum );

//    - Chuỗi các phần tử ghép nối nhau bởi dấu ',' (expect: Vân, Thịnh)
let arrFamily = ['Vân', 24, 20, 'Thịnh', true, false];
let a = arrFamily.filter(function(e) {
    return 'string' === typeof e;
})
console.log(a.toString());




