//complete this code
class Person {
	
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	set age(age){
		this._age= age;
	}
	get name(){
	   return this._name
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

const student1 = new Student("John", 30);
const student = new Student("Alice", 30)
const teacher1 = new Teacher("Alice", 30);
const teacher = new Teacher("John", 30);
student1.study()

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
