class Singleton {
  constructor() {
    this.message = "Print whatever you want";
    console.log(this.message);
  }

  output(string) {
    console.log(string);
  }
}

export const print = new Singleton();
