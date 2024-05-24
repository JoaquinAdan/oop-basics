// Prototipos con la sintaxis de clases
class Student {
  // constructor(name, age, approvedCourses) {
  //   this.name = name
  //   this.age = age
  //   this.approvedCourses = approvedCourses
  // }
  constructor({ name, email, age, approvedCourses = [] }) {
    this.name = name
    this.email = email
    this.age = age
    this.approvedCourses = approvedCourses
  }
  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse)
  }
}

// const joaco = new Student('Joaco', 20, ['Curso 1', 'Curso 2', 'Curso 3'])
const joaco = new Student({
  email: 'joaco@email.com',
  name: 'Joaco',
  age: 20,
})
console.log(joaco)
