 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const heros = ["Shakitiman","Naagraj","Doga"];
let myObj ={
    name: "Hitesh",
    age: 22,
}

const myFunction = function(){
 console.log("Hello World");
}

console.log(typeof anotherId);

//---------------------------------------------------------------------------------------------------------
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "ShubhamYT"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherName)

let userOne = {
    email: 'subham@gmail.com',
    upi: "user@sbiok"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)