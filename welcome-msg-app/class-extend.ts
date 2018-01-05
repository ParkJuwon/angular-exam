class Person {
    // name : string;
    // age : number;
    constructor(public string, public age) {

    }
}

class Employee extends Person {
    department : string;
    role : string;
}