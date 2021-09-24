abstract class Department {
  static fiscalYear = 2020;
  //   private readonly id: string;
  //   public name: string;
  //   private employees: string[] = []; // private is definde only this class
  protected employees: string[] = []; // protected is definde only class and extens class

  //shorthand
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear); // static can't use this... in constructur
  }

  //   constructor(id: string, n: string) {
  //     this.id = id;
  //     this.name = n;
  //   }

  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = "d2"; // this is error because id set readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // call constructur variable from Department class
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private report: string[]) {
    super(id, "Accounting"); // call constructur variable from Department class
    this.lastReport = report[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("D2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accouting Department - ID:`, this.id);
  }

  addEmployee(name: string) {
    if (name === "Prae") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.report.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(`Report List: `, this.report);
  }
}

const employee1 = Department.createEmployee("Name1");
console.log("employee1: ", employee1, Department.fiscalYear);

const it = new ITDepartment("D1", ["Prae"]);

it.addEmployee("Kaprui");
it.addEmployee("Kapook");
it.addEmployee("P'Taow");

it.describe();

it.name = "NEW NAME";

it.printEmployeeInformation();

console.log(it);

//-----------------------------------------------//

// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

accounting.describe();

accounting.addReport("Something went wrong😵‍💫!!");
accounting.addReport("Something happening 😵!!");

accounting.mostRecentReport = "Year End Report";
console.log("Last report: ", accounting.mostRecentReport);

accounting.printReport();

accounting.addEmployee("Prae");
accounting.addEmployee("Phot");

accounting.printEmployeeInformation();

// const accounting = new Department("D1", "Accounting");
// console.log("accounting", accounting);

// accounting.describe();

// accounting.addEmployee("Kaprui");
// accounting.addEmployee("Kapook");
// accounting.addEmployee("Dang");
// accounting.addEmployee("P'Taow");

//accounting.employees[5] = "KaiNa"; // this work because employees isn't private variable
// accounting.name = "New Name!";

// accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
