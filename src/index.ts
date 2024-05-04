function logger(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {

  console.log("target:", target);
  console.log("propertyKey:", propertyKey);
  console.log("descriptor:", descriptor);

  
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {

    console.log("start:", originalMethod.name);
    const result = originalMethod.apply(this, args);
    console.log("end:", originalMethod.name);
    return result;
  };

  return descriptor;
}

class User {
  constructor(private name: string, private age: number) {}

  @logger
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  @logger
  printAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const user = new User("Ron", 25);
user.greet();
// user.printAge();