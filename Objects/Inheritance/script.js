function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

function Student(firstName, lastName, age, studentId, academyName) {
    Person.call(this, firstName, lastName, age);
    this.studentId = studentId
    this.academyName = academyName;
}
Student.prototype = new Person();

function CodeStudent(firstName, lastName, age, studentId,hasIndividualProject) {
    Student.call(this, firstName, lastName, age, studentId, 'web development-academy');
    this.hasIndividualProject = hasIndividualProject;
}

let codeStudent = new CodeStudent('Velimir', 'Stojanov', 24, 10626, false);

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    Student.call(this, firstName, lastName, age, studentId, 'design-academy');
    this.isStudentOfTheMonth = isStudentOfTheMonth;
}

let designStudent = new DesignStudent('Velimir', 'Stojanov', 24, 10626, false);

function NetworkStudent(firstName, lastName, age, studentId) {
    Student.call(this, firstName, lastName, age, studentId, 'newtowrk-academy');
    this.hasCiscoExam = function () {
        console.log(`${this.firstName} ${this.lastName} has cisco exam.`)
    }
}

let networkStudent = new NetworkStudent("Velimir", "Stojanov", 24, 10626,)

console.log(codeStudent);
console.log(designStudent);
console.log(networkStudent);
networkStudent.hasCiscoExam();