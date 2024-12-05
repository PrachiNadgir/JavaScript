const course={
    course_name : "JS",
    course_price : "no_cost"

}
console.log(course.course_name);
const {course_name:name}=course//de-structuring the object
console.log(name);
//react usecase(without using the object directly accessing its value)
//whenever you see {} that is all about de-structuring
//********************API***********************
//jabibi apako apka kaam dusron ke upar dalna hai to usse API kehete hai
//pehele APIs XML structure me the 
//Now a days they Are in JSON structure
//Json is nothing but a object with no name

// {
//     name: "prachi",
//     course_name: "Js",   This is the JSON format
//     price: "Free"

// }

[
    {},
    {},
    {}
]


// {"results":[{"gender":"female","name":{"title":"Mrs","first":"Anđela","last":"Spasojević"},"location":{"street":{"number":1240,"name":"Vragovačka"},"city":"Blace","state":"South Bačka","country":"Serbia","postcode":57489,"coordinates":{"latitude":"64.1812","longitude":"119.1398"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"andela.spasojevic@example.com","login":{"uuid":"0b841f2c-8740-4e0e-86cf-a23ed1431b3c","username":"yellowostrich252","password":"sesame","salt":"Dtd6c3HA","md5":"cb604a300f16a1570f59c76a458be7f8","sha1":"8e26ff57cafe3ca214c53c477da831216afd23f5","sha256":"206a93994bfbb9b4f01f86885ad582a93abf367dd8da30bb501c29d5f4230904"},"dob":{"date":"1958-07-04T00:42:01.011Z","age":66},"registered":{"date":"2020-11-13T03:36:20.454Z","age":4},"phone":"012-2072-895","cell":"068-7800-517","id":{"name":"SID","value":"998827771"},"picture":{"large":"https://randomuser.me/api/portraits/women/80.jpg","medium":"https://randomuser.me/api/portraits/med/women/80.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/80.jpg"},"nat":"RS"}],"info":{"seed":"8a7dcffd2ac9e755","results":1,"page":1,"version":"1.4"}}