class Human {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  hello(){
    console.log(this.name)
    el.innerHTML = hmn.name + "/" + hmn.age;
  }
}

const hmn = new Human("ぼく", 30);
// console.log(hmn.name);
const el = document.querySelector('h2');
// el.innerHTML = hmn.name + "/" + hmn.age;

hmn.hello();
