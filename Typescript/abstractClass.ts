/**
 * Abstract class is a class that cannot be instantiated. It is used to define a blueprint for other classes.
 */
abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  statement() {
    return this.getSalary() * 3;
  }
}

class Developer extends Employee {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  getSalary() {
    return 10000;
  }
}

let itDeveloper = new Developer("Kunal", "Malviya");
console.log(itDeveloper.getFullName());
console.log(itDeveloper.statement());
console.log(itDeveloper.getSalary());
