export namespace Person {
  export class Man {
    name: string;
    gender: number;

    constructor(name) {
      this.name = name;
      this.gender = 0;
    }

    say(): string {
      return "I am"+name
    }
  }
}
