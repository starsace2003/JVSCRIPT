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
var result = courses.every(function(course) {
  return course.isFinished;
});
console.log(result); // every() là một phương thức của mảng trong JavaScript.