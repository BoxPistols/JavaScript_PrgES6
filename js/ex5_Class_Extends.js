// animal.js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    // console.log("こんにちは");
    const elem = document.createElement('div');
    elem.innerHTML = "名前は" + this.name;
    const parent = document.querySelector('h2');
    parent.appendChild(elem);

    const elem2 = document.createElement('div');
    elem2.innerHTML = this.age + "歳です";
    const parent2 = document.querySelector('h2');
    parent2.appendChild(elem2);
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// dog.js
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);

    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);

    const elem3 = document.createElement('div');
    elem3.innerHTML = "犬種は" + this.breed + "、人間年齢では" + humanAge + "歳です";
    const parent3 = document.querySelector('h2');
    parent3.appendChild(elem3);

  }

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("レオナルド", 12, "チワワ");
dog.info();
