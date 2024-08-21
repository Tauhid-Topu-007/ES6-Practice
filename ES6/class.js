class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.university="hstu";
    }
}

const student1= new Student(101,'Topu');
const student2= new Student(21,'Tauhid');
const student3= new Student(45,'nafis');

console.log(student1,student2,student3);
console.log(student1.name,student2.id);

