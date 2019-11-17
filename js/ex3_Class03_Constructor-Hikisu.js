class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    const el = document.querySelector('h1');
    el.innerHTML = (animal.name + animal.age);
  }
  greetSub(){
    const el = document.querySelector('h2');
    el.innerHTML = (animal2.name + animal2.age);
  }
}
const animal = new Animal("レオ", 12);
console.log(animal);

const animal2 = new Animal("たま", 16);
console.log(animal2);

animal.greet();
animal.greetSub();
