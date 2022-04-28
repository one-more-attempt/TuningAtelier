class User {
  #name;
  #surname;

  constructor(name, surname) {
    this.#name = name;
    this.#surname = surname;
  }

  set name(inputValue) {
    inputValue instanceof String ? (this.#name = inputValue) : null;
  }

  get name() {
    return this.#name;
  }

  set surname(inputValue) {
    inputValue instanceof String ? (this.#surname = inputValue) : null;
  }

  get surname() {
    return this.#surname;
  }

  getFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends User {
  #startYear;

  constructor(name, surname, startYear) {
    super(name, surname);
    this.#startYear = startYear;
  }

  get startYear() {
    return this.#startYear;
  }

  set startYear(inputValue) {
    if (inputValue instanceof Number) {
      if (inputValue > 0 && inputValue <= new Date().getFullYear()) {
      }
    }
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    const currentCourse = currentYear - this.#startYear;

    !(currentCourse >= 5)
      ? console.log(currentCourse)
      : console.log("Alredy graduated");
  }
}

//TESTS
const JD = new Student("John", "Dorian", 2020);

JD.getFullName();
JD.getCourse();

console.log(JD.startYear);
JD.startYear = -1;
console.log(JD.startYear);

JD.name = 123;
JD.surname = 123;
JD.getFullName();
console.log("");

//-------------------------------
const methodsContainer = {
  firstName: "test",
  lastName: "test",
  salary: 1412000,
  job: {
    company: "test",
    position: "test",
  },
  getFullName(inputObject) {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  getFullJob(inputObject) {
    console.log(`${this.job.company} (${this.job.position})`);
  },
  getBySalary(inputObject) {
    console.log(`${this.salary} BYN`);
  },
};

OliverSykesSinger = {
  firstName: "Oliver",
  lastName: "Sykes",
  salary: 3000,
  job: {
    company: "Bring Me The Horizon",
    position: "FrontMan",
  },
};

JohnDorianDoctor = {
  firstName: "Jonh",
  lastName: "Dorian",
  salary: 500,
  job: {
    company: "Sacred Heart",
    position: "Doctor",
  },
};

//TESTS
methodsContainer.getFullJob();
methodsContainer.getFullName.bind(OliverSykesSinger)();
methodsContainer.getFullJob.bind(OliverSykesSinger)();
methodsContainer.getBySalary.bind(OliverSykesSinger)();
