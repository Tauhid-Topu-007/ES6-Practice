const person= {name:'Topu',age:17,job:'devolopment',gfName:'ema Watson',address:'Uttara',phone:'01400522994',friends:['sdkfj','afssaf','sfadsf']};

const {phone,gfName,address,salary}=person;
const complexObject={
    name:'abc',
    info:{
        address:'Uttara',
        leader:'Tiger'
    }
}

const {leader}=complexObject.info;

// const gfName=person.gfName;
// const phone=person.phone;

// console.log(gfName,phone,salary,address);

const friends=['Tauhid','Topu','Rashed','Hamim','salman khan','shahrukh khan'];
const [first,nextFriend,...restFriends]=friends;
console.log(first,nextFriend);
console.log(restFriends);