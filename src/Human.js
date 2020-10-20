export class Human {
  constructor({name, age, arms, legs}) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.arms = arms;
    this.dir = null;
  }
  move({direction}) {
    this.direction = direction;
  }
}