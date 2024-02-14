function showYoungestStudent(allstudents) {
    var minStudent = allstudents[0];
    for (let i = 0; i < allstudents.lenght; i++) {
        if (allstudents[i].age < minStudent.age)
            minStudent = allstudents[i];

    }
    console.log("the youngest student is:", minStudent.name);
}
let allstudents = [
    { name: "atho", age: 20 },
    { name: "aya", age: 23 },
    { name: "noor", age: 26 },
    { name: "zoz", age: 22 }
]
showYoungestStudent(allstudents);
