//functions
console.log("hello world")
console.log("we are arthimetical")
let a =100;
let b =20;
 
let c = a+b;
console.log("addition of two numbers");
console.log(c);
 
let d = a-b;
console.log("subtraction of two numbers");
console.log(d);
 
let e = a*b;
console.log("multiplication of two numbers");
console.log(e);
 
let f = a/b;
console.log("division of two numbers");
console.log(f);
// const btn = document.getElementById("submitBtn");
 
// btn.addEventListener("click", () => {
//   console.log("clicked");
// })
// let students = ["John", "Jane", "Doe", "Smith"];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
//arrays
let students = ["mahesh", "suresh", "ramesh", "suresh"];
 
console.log(students.length);// array declaration
 
for(let i = 0; i < students.length; i++){
    console.log(students[i]);

}
//loops
let classStudents = ["mahesh", "suresh", "ramesh", "suresh","kamesh","kranthi","prasad","nani"];
let count=0;
for(let i = 0; i < classStudents.length; i++){
  if(classStudents[i] === "suresh"){
  count++;
  }
}
console.log(count);


