
//arrays------------
let students = ["mahesh", "suresh", "ramesh", "kamesh"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students);
students.push("kranthi");
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);
students.unshift("prasad");
console.log(students);
students.length = 0;
console.log(students);
students.includes("nani");
console.log(students.includes("nani"));

console.log(students.length);// array declaration

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

//loops-------------
let classStudents = ["mahesh", "suresh", "ramesh", "suresh","kamesh","kranthi","prasad","nani"];
let count=0;
for(let i = 0; i < classStudents.length; i++){
  if(classStudents[i] === "suresh"){
  count++;
  }
}
console.log(count);

//strings--------------
let name = "kranthi";
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes("KR"))
console.log(name.split("i").reverse().join("ram"));

//objects------------
let person = {
    name: "kranthi",
    age: 25,
    city: "hyderabad",
    designation: "frontend developer"
};
console.log(person);
console.log(person.age);
console.log(person.name);
console.log(person.city);
console.log(person.designation);
person.age = "26";

console.log(person.age);
console.log(person);

//functions-------- 
function checkPrime(number){
    let count = 0;
    for(let i =1; i<=number; i++){
        if(number % i===0){
            count++;
        }
        if(count ===2){
            console.log("primenumber" + number);
        }
        else{
            console.log("not a primenumber" + number);
        }
    }
}
checkPrimeNumber(7);
checkPrimeNumber(10);

