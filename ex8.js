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
// Cho mảng cac vùng miền như sau (Mảng D)
var arrProvince = [
  {
    regions: 'North',
    province: [
      'HaNoi',
      'BacNinh',
      'HungYen'
    ]
  },
  {
    regions: 'Southern',
    province: [
      'Tp.HoChiMinh',
      'VungTau',
      'CaMau'
    ]
  }
]
/* - Vị trí của thành viên sống ở miền nam- VN đầu tiên trong danh sách*/
// phần này em cần hỗ trợ ạ -____-