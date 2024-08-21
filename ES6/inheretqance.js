class Parent{
    constructor(){
        this.fatherName="Topu";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name + ' '+ this.fatherName;
    };
}

const baby= new Child('jerry');
const baby2= new Child('Tom');
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());

