// const natalia = {
//   name: 'Natalia',
//   age: '20',
//   approvedCourses: ['Curso 1', 'Curso 2', 'Curso 3'],
//   approveCourse(nuevoCurso) {
//     this.approvedCourses.push(nuevoCurso)
//   },
// }

function Student(name, age, approvedCourses) {
  this.name = name
  this.age = age
  this.approvedCourses = approvedCourses
  // this.approveCourse = function (newCourse) {
  //   this.approvedCourses.push(newCourse)
  // }
}

Student.prototype.approveCourse = function (newCourse) {
  this.approvedCourses.push(newCourse)
}

const natalia = new Student('Natalia', 20, ['Curso 1', 'Curso 2', 'Curso 3'])
console.log(natalia)
