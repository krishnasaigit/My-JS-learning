// document.getElementById("demo")
let employee={
    id:143,
    email:"143@gmail.com",
    personalInfo:{
        name:"Nani",
        mobile:1234567890,
        address:{
            line1:"near big bazar",
            city:"Hyderabad",
            state:"Telangana"
        }
    }
}
console.log(employee.personalInfo?.address?.pincode?.one)// it indicates the after checking the personalINfo print line1 in address if it is present (but "one" is not present in pincode so it shows the undefined).
// console.log(employee.personalInfo?.address?.pincode.one)
console.log("Hello")
console.log(employee.personalInfo?.address.line1)// it indicates the first checking the personalINfo if it is not undefind then print line1 in address if it is present.
console.log(employee.personal?.address.line1)// it indicates the first checking the personalINfo if it is not undefind then print line1 in address if it is present.(it is undefined)
let p=document.getElementById("two")?.innerText.console.log("Hello")
console.log(p)