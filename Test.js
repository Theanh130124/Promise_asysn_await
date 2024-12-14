let add = (a,b) => {
    return a + b
}
// console.info(add(3,4))

//  12 == "12" False 12 === "12" True 
let a = [4,545,4, 6, 7, "12" , "13"] 
console.info(a.filter(v => typeof(v)=="number" && v % 2 ==0)) 
console.info(a.map(v=> v+1))

console.info(a.sort((v1,v2) => v2-v1) )

let subtraction  = (a,b) => {
    return a - b 
}


function execute(callback) {
    let a = 100 
    let b = 200 
    return callback(a,b)
}
// Truyền callback
console.info(execute((a,b)=> a+b ))
console.info(execute(subtraction))

function User(fn , ln) {
    this.firstName = fn;
    this.lastName = ln;
    this.hello = function() {
        return `Hello ${this.firstName} ${this.lastName}`
    }
}
let u = new User("The" , "Anh")
console.info(u.hello()) //u.hello() -> is objects not function 

//Prototype
function Student(name, yearOfBirth) {
    this.name = name;
    this.year = yearOfBirth;
    }
    Student.prototype.getAge = function() {
    var d = new Date();
    return d.getFullYear() - this.year;
    }
    var s = new Student("Nguyen Van A", 2004);
    console.log(s.getAge());

//Promise
    console.info("Đồng bộ 1");

    Promise.resolve()
        .then(() => Promise.reject(1)) 
        .catch(k => k) 
        .then(k => k + 10) 
        .catch(k => k + 2) 
        .then(k => k + 3) 
        .catch(k => k + 4) 
        .then(k => console.info(k)); // In ra kết quả cuối cùng (14)
    
    console.info("Đồng bộ 2");
    
