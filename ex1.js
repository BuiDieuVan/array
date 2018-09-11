/*ex1 ex1: Không sử dụng lodash, Từ mảng A in ra mảng các phần tử có đội tuổi là chẵn theo 4 cách (Gợi ý: sử dụng for, for of, forEach, filter).*/
/*FOR*/
let arrAge = [15, 16, 17, 18, 19, 20];  
for (var i = 0; i<= arrAge.length; i ++){
	if(arrAge[i]%2==0){
		console.log(" phần tử có độ tuổi là chẵn " +arrAge[i]+"<br/>");
	};
}
/*FOR OF*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
for (var i of arrAge) {
	if(i%2==0){
   console.log(i); 
};
}

/*FOR EACH*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
arrAge.forEach(function(arrAge){
	if(arrAge%2==0){
		console.log(arrAge);
	}
});
/* filter*/
let arrAge = [15, 16, 17, 18, 19, 20]; 
var result = arrAge.filter(function(a){
return a % 2==0;
})
console.log(result)


