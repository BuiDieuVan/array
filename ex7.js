
let arrStudent = [
  {
    name: 'Van',
    address: 'HungYen',
    age: 24,
    country: 'VN',
    income: 120,
    married: false,
    gender: 'female'
  },
  {
    name: 'Thinh',
    address: 'DaNang',
    age: 20,
    country: 'VN',
    income: 70,
    married: true,
    gender: 'male'
  },
  {
    name: 'HoaPham',
    address: 'HaNoi',
    age: 26,
    country: 'VN',
    income: 150,
    married: true,
    gender: 'male'
  },
  {
    name: 'Mr.John',
    address: 'NewYork',
    age: 25,
    country: 'US',
    income: 300,
    married: true,
    gender: 'male'
  },
  {
    name: 'Marry',
    address: 'Manchester',
    age: 27,
    country: 'UK',
    income: 310,
    married: false,
    gender: 'female'
  }
];
/*- Tông độ tuổi của các sinh viên gộp lại*/

let sumAge = arrStudent.reduce((a, b) => a + b.age, 0);
console.log(sumAge);

/*- Tổng thu nhập của toàn bộ các sinh viên*/

let sumIncome = arrStudent.reduce((a, b) => a + b.income, 0);
console.log(sumIncome);

/* - Gọi phụ cấp của mỗi student là feeAllowance 
(Công thức tính: nếu gender=male => feeAllowance = 0 ngược lại feeAllowance = age * income) 
//    => Hãy tính tổng giá trị phụ cấp của các student  (Sử dụng ngắn gọn nhất trong 1 câu lệnh, 
Gợi ý: sử dụng reduce, kết hợp với toán tử 3 ngôi)*/


let sum =0;
arrStudent.forEach(function(arr) {
  sum+= arr.gender==="male" ? 0: arr.age* arr.income;
});
console.log(sum);
// em chưa làm được theo reduce


