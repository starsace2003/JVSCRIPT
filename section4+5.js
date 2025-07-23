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

function courseHandler(course) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia ${course.coin}`
  };
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);
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

function courseHandler(course) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia ${course.coin}`
  };
}

var newCourses = courses.map(courseHandler);
console.log(newCourses);
