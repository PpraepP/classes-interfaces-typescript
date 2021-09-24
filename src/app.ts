// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

//--------------//

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void; // method
}

class Person implements Greetable, Named {
  name?: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("PpraepP");

// user1 = {
//   name: "Prae",
//   age: 26,
//   greet(phrase: string) {
//     console.log(phrase + "" + this.name);
//   },
// };

user1.greet("Hi there - I am ");
console.log("user1: ", user1);
