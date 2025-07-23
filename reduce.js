var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 100
  },
  {
    id: 2,
    name: 'HTML,CSS',
    coin: 200
  },
  {
    id: 3,
    name: 'Le Phuc Lam',
    coin: 300
  },
  {
    id: 4,
    name: 'Le Phuc Lam',
    coin: 400
  },
  {
    id: 5,
    name: 'Le Phuc Lam',
    coin: 500
  },
  {
    id: 6,
    name: 'Le Phuc Lam',
    coin: 600
  },
];
// var i=0;
// function coinHandler(accmulator, currentValue,currentIndex) {
// i++;
// var total= accmulator + currentValue.coin;
// console.table({
//   'Lượt chạy thứ': i,
//   'Biến tích trữ': accmulator,
//   'Biến hiện tại': currentValue.coin,
//   'Tổng': total
// });
// return total;
// Lượt chạy thứ: ${i}
// Biến tích trữ : ${accmulator}
// Biến hiện tại : ${currentValue.coin}

// }
var totalCoin = courses.reduce(function(accmulator, currentValue) {
  return accmulator + currentValue.coin;
}, 0);
console.log(totalCoin); // 2100









