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

// Promise all / race
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved!"), 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved!"), 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 3 rejected!"), 1000);
});

Promise.race([promise1, promise2, promise3])
    .then(result => console.info("Race result:", result))
    .catch(error => console.info("Race error:", error));


//async await -> (Bất đồng bộ nhưng chạy đồng bộ)

const fetchData = (url, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                resolve(`Fetched data from ${url}`);
            } else {
                reject("No URL provided!");
            }
        }, delay);
    });
};

const main = async () => {
    try {
        const data1 = await fetchData("https://api.example.com/1", 1000);
        console.log(data1);
        
        const data2 = await fetchData("https://api.example.com/2", 2000);
        console.log(data2);
        
        const data3 = await fetchData("https://api.example.com/3", 1500);
        console.log(data3);
    } catch (error) {
        console.error("Error occurred:", error);
    }
};

main();
    
