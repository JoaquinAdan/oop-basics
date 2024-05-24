// Objetos literales

const joaco1 = {
  name: 'Joaco',
  username: 'joaco1',
  points: 4494,
  socialMedia: {
    instagram: 'joaco1',
    twitter: 'joaco1',
    facebook: undefined,
  },
  approvedCourses: ['Course 1', 'Course 2'],
  learningPaths: [
    { name: 'Escuela de desarrollo', courses: ['Curso 1', 'Curso 2'] },
    { name: 'Escuela de Videojuegos', courses: ['Curso 3'] },
  ],
}

const miguelito1 = {
  name: 'Miguelito',
  username: 'miguelito1',
  points: 3644,
  socialMedia: {
    instagram: 'miguelito1',
    twitter: undefined,
    facebook: undefined,
  },
  approvedCourses: ['Course 1', 'Course 2', 'Course 3'],
  learningPaths: [
    { name: 'Escuela de desarrollo', courses: ['Curso 1', 'Curso 2'] },
    { name: 'Escuela de Data Science', courses: ['Curso 4', 'Curso 5'] },
  ],
}

// CLASESSSSS
class Student {
  constructor({
    name,
    username,
    points = 0,
    instagram = undefined,
    twitter = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name
    this.username = username
    this.points = points
    this.socialMedia = {
      instagram,
      twitter,
      facebook,
    }
    this.approvedCourses = approvedCourses
    this.learningPaths = learningPaths
  }
}

class LearningPaths {
  constructor({ name, courses = [] }) {
    this.name = name
    this.courses = courses
  }
}

const joaco2 = new Student({
  name: 'Joaco',
  username: 'joaco2',
  points: 4494,
  email: 'joaco@email.com',
  learningPaths: new LearningPaths({
    name: 'Escuela de la muni',
    courses: ['curso de Nico', 'curso de Joaco', 'curso de la chica'],
  }),
})
