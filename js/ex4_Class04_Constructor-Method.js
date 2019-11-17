class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  greet(){
    const el = document.querySelector('h1');
    el.innerHTML = (this.name + this.age);
  }
}

const anm = new Animal("おれ", 90);
anm.greet();

const anm2 = new Animal("青年", 14);
const anm3 = new Animal("中年", 24);

// Add Prop
var elem = document.createElement('div');
// Add Class
elem.className = 'cls';
// Add Prop to HTML
elem.innerHTML = anm2.name + anm2.age;
// get Parent Prop
var parent = document.querySelector('h2');
// Add Prop to Child
parent.appendChild(elem);
