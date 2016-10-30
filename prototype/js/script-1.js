window.onload = function () {

    var Human = {
        name: 'Alex',
        age: 25,
        sex: 'male',
        height: 180,
        weight: 80
    };

    function Worker(company, salary) {
        this.company = company;
        this.salary = salary;
    };

    Worker.prototype = Human;

    Worker.prototype.work = function () {
        console.log("I'm a good worker");
    };

    function Student(university, scholarship) {
        this.university = university;
        this.scholarship = scholarship;
    };

    Student.prototype = Human;

    Student.prototype.watchTVshows = function () {
        console.log("I'm lazy");
    };

    var newWorker = new Worker('McDonalds', 5000);
    var newStudent = new Student('Polytechnic Institute', 1000);

    console.log(newWorker, newWorker.work());
    console.log(newStudent, newStudent.watchTVshows());
};