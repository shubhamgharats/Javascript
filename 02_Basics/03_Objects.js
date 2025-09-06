// Singleton 
// Object.create   --> (another way of making objects)

// Object literals

const mySym = Symbol("key1")   // Unique symbol

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudary", // key with space
  [mySym]: "mykey1",             // Symbol as key (must use [])
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggined: false,
  lastLoginDays: ["Monday", "Saturday"]
};

// Accessing properties
console.log(JsUser.email);        // Dot notation
console.log(JsUser["email"]);     // Bracket notation
console.log(JsUser["full name"]); // Works only with bracket
console.log(JsUser.mySym);        // ❌ undefined
console.log(typeof JsUser.mySym); // ❌ undefined

JsUser.greetingOne = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());