
const GENDER_MEN = 1
const GENDER_WOMEN = 2

export class Person {
  name: string;
  gender: number;

  constructor(name: string) {
    this.name = name
  }
  say(): string {
    return "I am `{name}`"
  }
}

export class Man extends Person{
  constructor(name: string) {
    super(name)
    this.gender = GENDER_MEN
  }
}

export class Woman extends Person{
  name: string;
  gender: number;

  constructor(name: string) {
    super(name)
    this.gender = GENDER_WOMEN
  }
}
