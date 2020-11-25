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
    let coursename = document.querySelectorAll(".subone a")[0];
    let coursecode = document.getElementsByClassName('subthree')[0]
    coursename = (coursename.innerHTML)
    coursecode = (coursecode.innerHTML)
    let obj = {code:coursename, date:coursecode};
    courseList.push(obj)

    let coursename2 = document.querySelectorAll(".subone2 a")[0];
    let coursecode2 = document.getElementsByClassName('subthree2')[0]
    coursename2 = (coursename2.innerHTML)
    coursecode2 = (coursecode2.innerHTML)
    let obj2 = {code:coursename2, date:coursecode2};
    courseList.push(obj2)

    let coursename3 = document.querySelectorAll(".subone3 a")[0];
    let coursecode3 = document.getElementsByClassName('subthree3')[0]
    coursename3 = (coursename3.innerHTML)
    coursecode3 = (coursecode3.innerHTML)
    let obj3 = {code:coursename3, date:coursecode3};
    courseList.push(obj3)
    return courseList

}
console.log(createCourseArray())

function findCourse(courseList){
    createCourseArray()
    let course = prompt("Enter four digit course number", );
    while (course.length != 4 || (isNaN(course))) {
        course = prompt("Please re-enter a correct course number" , );
        
    let courseExist = false;

    for(let courseitem of courseList){
        if (courseitem.courseList.includes(course)){
            document.course.style.backgroundColor = "green";
        courseExist = true;
        break;
}
 }
}
}
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