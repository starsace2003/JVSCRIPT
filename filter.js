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
var filterCourses = courses.filter(function(course) {
  return course.coin > 300;
});