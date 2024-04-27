// QUESTION 61:
enum vehiclesCategories{
    car,
    trucks,
    motorcycles
}
console.log(vehiclesCategories.motorcycles)


// QUESTION 62:
interface students{
   name:string
   age:number
   courses:string[]
}
let studentsData:students={
   name:"hooriya",
   age:17,
   courses:["english","physics","chemistry","computer"]
}
console.log(studentsData)


// QUESTION 63:
type shapesProperties={
  kind:"circle"|"rectangle";
  radius?:number //only for circle
  diameter?:number //only for circle
  height?:number   //only for rectangule
  widht?:number     //only for rectangule
}
let circle:shapesProperties={
    kind:"circle",
    diameter:24,
    radius: 12
}
let rectangle:shapesProperties={
    kind:"rectangle",
    height:7,
    widht:4,
}
console.log(circle)
console.log(rectangle)