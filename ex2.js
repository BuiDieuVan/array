// ex2:Từ mảng A, lọc ra tất các các phần tử có độ tuổi >= 18 theo 4 cách (gợi ý như trên)
// /*FOR*/
// let arrAge = [15, 16, 17, 18, 19, 20];  
// for (var i = 0; i<= arrAge.length; i ++){
// 	if (arrAge[i]>=18){
// 		console.log(arrAge[i]);
// 	};
// }
/*FOR OF*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
for (var i of arrAge) {
	if(i>=18){
   console.log(i); 
};
}
/*FOR EACH*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
arrAge.forEach(function(arrAge){
	if(arrAge%2>=18){
		console.log(arrAge);
	}
});
/* filter*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
var result = arrAge.filter(function(a){
return a >=18;
})
console.log(result)