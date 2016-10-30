window.onload = function () {

    var Human = {
        name: 'Alex',
        age: 25,
        sex: 'male',
        height: 180,
        weight: 80
    };

    var Worker = {
        company: 'McDonalds',
        salary: 5000,
        work: function () {
            console.log("I'm a good worker")
        },
        __proto__: Human
    };


    var Student = {
        university: 'Polytechnic Institute',
        scholarship: 1000,
        watchTVshows: function () {
            console.log("I'm lazy")
        },
        __proto__: Human
    };

    console.log(Worker, Worker.work());
    console.log(Student, Student.watchTVshows());

};
