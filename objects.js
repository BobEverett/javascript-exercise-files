/*

let myArray = {
    0: 'robert',
    1: 'johnny',
    2: 'everett',
    3: 'bobby',
    4: 'johnstone',
    length: 5
};



for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}



let contactInfor = {
    firstName: 'Bob',
    lastName: 'Everett',
    address: '1610 Lindendale Ave',
    city: 'Fullterton',
    state: 'CA',
    zip: 92813,
    phone: {
        mobile: '916-257-1002',
        work: '714-856-2491'
    },
    email: {
        personal: 'rjeverett2@gmail.com',
        work: 'beverett@controlac.com'
    },

    // print address label
    addressLabel: function() {
        console.log(`\n${this.firstName} ${this.lastName}
${this.address}
${this.city}, ${this.state} ${this.zip}\n`)
    }
}

console.log(contactInfor);
console.log(contactInfor.addressLabel());


function ContactInfo(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;


    // print address label
    this.addressLabel = function() {
            console.log(`\n${this.firstName} ${this.lastName}
${this.address}
${this.city}, ${this.state} ${this.zip}\n`)
        },
        this.addMobilePhone = function() {
            if (this.phone == undefined) {
                let rlSync = require("readline-sync");
                this.phone = rlSync.question(`Enter ${this.firstName} ${this.lastName}'s mobile phone number: `);
            }
            else {
                console.log('Phone number exists already');
            }
        }
}

let contact1 = new ContactInfo('Steven', 'Smith', '213 Brea Blvd', 'Brea', 'CA', 92821, undefined, 'steven.b.smith014@gmail.com');
contact1.addressLabel();
console.log(contact1);
contact1.addMobilePhone();



let bob = { name: 'Bob', age: 55 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';


//console.log(bob);
//console.log(studentBob);
//console.log(studentBob.name);


let person = { name: 'Bob', age: 55, height: "6'4\"", eyes: 'brown', hair: 'black' };
let person2 = Object.create(person);
person2.sex = 'male';
person2.city = 'Fullerton';


for (let prop in person2) {
    console.log(person2[prop]);
}

let personKeys = Object.keys(person);
console.log(personKeys);

personKeys.forEach(key => console.log(key));

let personValues = Object.values(person);
console.log(personValues);

personValues.forEach(value => console.log(value));

let personEntries = Object.entries(person);
console.log(personEntries);

personEntries.forEach(pair => console.log(pair));


let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let objKeysCap = Object.keys(obj);

objKeysCap.forEach(key => console.log(key.toUpperCase()));
console.log(obj);

let objKeysCap2 = Object.keys(obj).map(key => console.log(key.toUpperCase()));
console.log(obj);

let objValues = Object.values(obj);
console.log(objValues);

console.log(objValues.filter(value => value > 2));

*/

let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj);

myObj.qux = 3;

console.log(myObj);

Object.keys(myObj).forEach(function(key) {
    console.log(key);
});

Object.keys(myObj).forEach(function(key) {
    if (myObj.hasOwnProperty(key)) {
        console.log(key);
    }
});

console.log('#'.repeat(50));

for (let key in myObj) {
    console.log(key);
};
