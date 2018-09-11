// Từ mảng A, tỉnh tổng tất cả các phần tử trong mảng 
// theo 4 cách (Gợi ý: sd for, for of, forEach, reduce)
/*FOR*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
let  i=0;
let sum=0 ; 
for ( ; i< arrAge.length; i ++){
	sum+=arrAge [i];
	}
console.log("tổng các phần tử trong mảng" + " "+sum );


// // reduce
let arrAge = [15, 16, 17, 18, 19, 20].reduce((a, b) => a + b, 0); 
console.log(arrAge);


/*FOR EACH*/
let arrAge = [15, 16, 17, 18, 19, 20];
let sum=0 ; 
arrAge.forEach(function(i){
    sum+=i;
})
console.log("tổng các phần tử trong mảng" + " "+sum );

/*FOR OF*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
var sum=0;
for (var i of arrAge) {
	sum+=i;
};
console.log(sum);




