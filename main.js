function videoPlay(id) {
  const urlSecreta = `https://platziultrasecreto.com/${id}`
  console.log('Se está reproduciendo desde la url ' + urlSecreta)
}

function videoStop(id) {
  const urlSecreta = `https://platziultrasecreto.com/${id}`
  console.log('Pausamos la url ' + urlSecreta)
}

export class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name
    this.videoId = videoID
  }

  reproducir() {
    videoPlay(this.videoId)
  }
  pausar() {
    videoStop(this.videoId)
  }
}

class Course {
  #name
  constructor({ name, classes = [], isFree = false, lang = 'spanish' }) {
    this.#name = name
    this.classes = classes
    this.isFree = isFree
    this.lang = lang
  }
  get name() {
    return this.#name
  }
  set name(newName) {
    if (typeof newName !== 'string') {
      console.error('Error: newName must be a String')
      return
    }
    this.#name = newName
  }
}

const cursoProgBasica = new Course({
  name: 'Curso Gratis de Programación Básica',
  isFree: true,
  lang: 'english',
})

// console.log(cursoProgBasica.name)
// console.log((cursoProgBasica.name = 'Curso'))
// console.log((cursoProgBasica.name = 1))
// console.log(cursoProgBasica.name)

const cursoDefinitivoHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  lang: 'english',
})

const cursoPracticoHTML = new Course({
  name: 'Curso Práctico de HTML y CSS',
})

const cursoPython = new Course({
  name: 'Curso de Python',
})

const cursoDataScience = new Course({
  name: 'Curso de Data Science',
})

const cursoUnity = new Course({
  name: 'Curso de Unity',
})

class learningPaths {
  constructor({ name, courses = [] }) {
    this.name = name
    this.courses = courses
  }
}

const escuelaWeb = new learningPaths({
  name: 'Escuela de Desarrollo Web',
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
})
const escuelaData = new learningPaths({
  name: 'Escuela de Data Science',
  courses: [cursoProgBasica, cursoPython, cursoDataScience],
})
const escuelaVgs = new learningPaths({
  name: 'Escuela de Videojuegos',
  courses: [cursoProgBasica, cursoUnity],
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name
    this.email = email
    this.username = username
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses
    this.learningPaths = learningPaths
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
    if (newCourse.isFree && newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse.name)
    } else {
      console.warn('Lo siento, ' + this.name + ', solo puedes tomar cursos abiertos o que no sean en ingles')
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props)
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props)
  }
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse.name)
  }
}

const juan = new FreeStudent({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@juanito.com',
  twitter: 'fjuandc',
  learningPaths: [escuelaWeb, escuelaVgs],
})

juan.approvedCourse(cursoProgBasica)
console.log(juan)

const miguelito2 = new BasicStudent({
  name: 'Miguelito',
  username: 'migelitofeliz',
  email: 'miguelito@juanito.com',
  instagram: 'migelito_feliz',
  learningPaths: [escuelaWeb, escuelaData],
})
