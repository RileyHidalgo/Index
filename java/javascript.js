const course1 = {
    code: "ACIT 1620",
    name: 'Web Fundemental Technologies'

 };
const course2 = {
    code: "ACIT 1515",
    name: 'Scripting for IT'
     
 };
const course3 = {
    code: "MATH 1310",
    name: 'Mathematics for IT'
    
};
let courseList = [course1, course2, course3];
let course = prompt("Enter four digit course number", );
    while (course.length != 4) {
        course = prompt("Please re-enter a correct course number" , );
}
for(let c of courseList){
    if (course.includes("1515")) {
        console.log(`Yes I am taking the course: ${course2.code} - ${course2.name}`);
    } else if (course.includes("1620")) {
        console.log(`Yes I am taking the course: ${course1.code} - ${course1.name}`);
    } else if (course.includes("1310")) {
        console.log(`Yes I am taking the course: ${course3.code} - ${course3.name}`);
    } else { (courseList[3]={course})
        console.log('Your course has been added to the list')
    }
}