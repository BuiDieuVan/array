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
/*: Tù mảng C (f), viết mã để tạo ra các mảng mới như sau:
   - Mảng các student thuộc quốc tịch 'VN' và không phải 'VN' (2 mảng)*/

let arrVN = arrStudent.filter(arr => {
  if(arr.country === "VN" ) return arr
})

console.log(arrVN)
/*- Đưa ra mảng tất cả các student có tên được uppercase.
 Ngoài ra mỗi student có thêm 1 trường nữa mô tả tổng phí thích nghi có tên là 'fee'.
  Cách  //    tính giá trị của fee như sau:
//        . nếu income < 200 => fee = age * income + 1000
//        . nếu income > 250 => fee = age * income + 1500*/
let arrVN = arrStudent.map(arr => {
  arr.name = arr.name.toUpperCase();
   if(arr.income <200 ){
     arr.fee = arr.age * arr.income + 1000
   } 
  else if(arr.income > 250){
    arr.fee = arr.age * arr.income +1500
  }
  return arr
})

console.log(arrVN)

