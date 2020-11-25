// const course1 = {
//     code: "ACIT 1620",
//     name: 'Web Fundemental Technologies'

//  };
// const course2 = {
//     code: "ACIT 1515",
//     name: 'Scripting for IT'
     
//  };
// const course3 = {
//     code: "MATH 1310",
//     name: 'Mathematics for IT'
    
// };
// let courseList = [course1, course2, course3];
function createCourseArray(){
    let courseList = [];
    // let coursename = document.getElementsByClassName("subone")[0].innerHTML;
    // let coursecode = document.getElementsByClassName('subthree')[0].innerHTML;
    let coursename = document.querySelectorAll(".subone a")[0];
    let coursecode = document.getElementsByClassName('subthree')[0].innerHTML;
    coursename = (coursename.innerHTML)
    let obj = {code:coursename, name:coursecode};
    courseList.push(obj)
    return courseList

}
console.log(createCourseArray())
// let course = prompt("Enter four digit course number", );
//     while (course.length != 4 || (isNaN(course))) {
//         course = prompt("Please re-enter a correct course number" , );
// }
// let courseExist = false;

// for(let courseitem of courseList){
//    if (courseitem.code.includes(course)){
//     console.log(`Yes I am taking the course: ${courseitem.code} - ${courseitem.name}`);
//     courseExist = true;
//     break;
//    }
// }
// if (courseExist === false){
//     let obj = {code:course, name:null};
//     courseList.push(obj);
//     console.log(`new course added`);
//     console.log(courseList);


// }