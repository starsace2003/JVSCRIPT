var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 100,
    isFinished: true
  },
  {
    id: 2,
    name: 'HTML,CSS',
    coin: 200,
    isFinished: true
  },
  {
    id: 3,
    name: 'Le Phuc Lam',
    coin: 300,
    isFinished: false
  },
  {
    id: 4,
    name: 'Le Phuc Lam',
    coin: 400,
    isFinished: true
  },
  {
    id: 5,
    name: 'Le Phuc Lam',
    coin: 500,
    isFinished: false
  },
  {
    id: 6,
    name: 'Le Phuc Lam',
    coin: 600,
    isFinished: true
  },
];
var result= courses.some(function(course) {
  return course.isFinished;
});
console.log(result); // some() là một phương thức của mảng trong JavaScript.

// Nó sẽ duyệt từng phần tử trong mảng và kiểm tra điều kiện.

// Nếu ít nhất 1 phần tử thỏa mãn điều kiện, some() sẽ trả về true.

// Nếu không có phần tử nào thỏa mãn, nó trả về false.