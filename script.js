//complete this code
class Person {
	
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	set age(age){
		this.age= age;
	}
	get name(){
		return this.name;
	}
}

class Student extends Person {
	// contructor(name,age){
	// 	super(name,age);
	// }
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	// contructor(name,age){
	// 	super(name,age);
	// }
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
const student = new Student("John", 30);
const student = new Student("Alice", 30)
const teacher = new Teacher("Alice", 30);
const teacher = new Teacher("John", 30);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
