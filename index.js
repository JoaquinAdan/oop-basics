const joaquin = {
  // objeto literal
  name: 'Joaquin',
  age: 25,
  points: 1000,
}
function Student() {
  this.name = 'Nombre'
  this.age = 25
  this.points = 1000
}

const joaco = new Student()
console.log(joaco) // instancia de Student, no es un objeto literal
console.log(joaquin)

const objetito = {}

console.log(joaco.hasOwnProperty('name'))
console.log(objetito.hasOwnProperty('name'))
