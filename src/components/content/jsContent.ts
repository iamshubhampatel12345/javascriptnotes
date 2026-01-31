export interface ContentSection {
  heading?: string;
  description?: string | string[];
  points?: string[];
  code?: string;
  language?: string;
  codeTitle?: string;
  subSections?: ContentSection[];
}

export interface Topic {
  id: string;
  title: string;
  importance?: string;
  content: ContentSection[];
}

export interface Phase {
  id: string;
  title: string;
  subtitle: string;
  topics: Topic[];
}

export const jsContent: Phase[] = [
  {
    id: 'phase-1',
    title: 'PHASE 1',
    subtitle: 'JavaScript Foundations',
    topics: [
      {
        id: 'intro-to-js',
        title: 'Introduction to JavaScript',
        content: [
          {
            heading: 'What is JavaScript?',
            description: 'JavaScript is a high-level, interpreted programming language that makes websites interactive. It runs in web browsers and on servers (Node.js), allowing you to create dynamic content, control multimedia, animate images, and much more.',
            points: [
              'Lightweight and easy to learn',
              'Runs on both client-side (browser) and server-side (Node.js)',
              'Most popular programming language for web development',
              'Single-threaded but handles asynchronous operations'
            ]
          },
          {
            heading: 'History & Evolution',
            points: [
              'Created by Brendan Eich in 1995 in just 10 days',
              'Originally called Mocha, then LiveScript, finally JavaScript',
              'ES6 (2015) was a major update with modern features',
              'Annual updates since 2015 (ES2016, ES2017, etc.)'
            ]
          },
          {
            heading: 'JavaScript vs Other Languages',
            subSections: [
              {
                heading: 'JavaScript vs Java',
                points: [
                  'Different languages despite similar names',
                  'JS is interpreted, Java is compiled',
                  'JS is dynamically typed, Java is statically typed',
                  'JS runs in browsers, Java runs on JVM'
                ]
              },
              {
                heading: 'How JavaScript Runs',
                description: 'JavaScript is executed by JavaScript engines like V8 (Chrome, Node.js), SpiderMonkey (Firefox), or JavaScriptCore (Safari). The engine reads your code, converts it to machine code, and executes it.',
                code: `// Your JavaScript Code
console.log("Hello World");

// V8 Engine Process:
// 1. Parser reads the code
// 2. Creates Abstract Syntax Tree (AST)
// 3. Interpreter converts to bytecode
// 4. Compiler optimizes hot code
// 5. Machine code executes

// Real-world example: Button click
document.querySelector('#myButton').addEventListener('click', function() {
  alert('Button clicked! JS is running in the browser!');
});`,
                codeTitle: 'How JS Executes'
              }
            ]
          }
        ]
      },
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        content: [
          {
            heading: 'Variables: var, let, const',
            description: 'Variables are containers that store data values. JavaScript has three ways to declare variables.',
            subSections: [
              {
                heading: 'var (Old way - avoid using)',
                description: 'Function-scoped and can be redeclared. Has hoisting issues.',
                code: `var name = "John";
var name = "Jane"; // ✅ Can redeclare
console.log(name); // Jane

function test() {
  var x = 10;
  console.log(x); // 10
}
// console.log(x); // ❌ Error: x is not defined (function scoped)`,
                codeTitle: 'var example'
              },
              {
                heading: 'let (Modern way)',
                description: 'Block-scoped and cannot be redeclared in the same scope.',
                code: `let age = 25;
age = 26; // ✅ Can reassign
// let age = 27; // ❌ Error: Cannot redeclare

if (true) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // ✅ Works
}
// console.log(blockVar); // ❌ Error: not defined (block scoped)

// Real-world example: Loop counter
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Prints: 0, 1, 2 (each 'i' is separate)`,
                codeTitle: 'let example'
              },
              {
                heading: 'const (Cannot reassign)',
                description: 'Block-scoped and value cannot be reassigned (but objects/arrays can be modified).',
                code: `const PI = 3.14159;
// PI = 3.14; // ❌ Error: Cannot reassign

const user = { name: "Alice" };
user.name = "Bob"; // ✅ Can modify object properties
user.age = 30;     // ✅ Can add properties
// user = {}; // ❌ Error: Cannot reassign the variable

const colors = ["red", "blue"];
colors.push("green"); // ✅ Can modify array
console.log(colors); // ["red", "blue", "green"]
// colors = []; // ❌ Error: Cannot reassign

// Real-world example: API endpoint
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;`,
                codeTitle: 'const example'
              }
            ]
          },
          {
            heading: 'Data Types',
            subSections: [
              {
                heading: 'Primitive Types',
                description: 'Simple data types that store a single value.',
                code: `// 1. String - text data
let firstName = "Alice";
let lastName = 'Smith';
let message = \`Hello \${firstName}\`; // Template literal

// 2. Number - integers and decimals
let age = 25;
let price = 99.99;
let negative = -10;
let infinity = Infinity;

// 3. Boolean - true or false
let isLoggedIn = true;
let hasPermission = false;

// 4. Undefined - variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// 5. Null - intentional absence of value
let emptyValue = null;

// 6. Symbol - unique identifier (ES6)
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false (always unique)

// 7. BigInt - large integers (ES2020)
let bigNumber = 1234567890123456789012345678901234567890n;

// Real-world example: User data
const userData = {
  username: "john_doe",      // string
  age: 28,                   // number
  isActive: true,            // boolean
  lastLogin: null,           // null (never logged in)
  profilePicture: undefined  // undefined (not uploaded yet)
};`,
                codeTitle: 'Primitive Data Types'
              },
              {
                heading: 'Non-Primitive (Reference) Types',
                description: 'Complex data types that can store collections of values.',
                code: `// 1. Object - key-value pairs
const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  greet: function() {
    return "Hello!";
  }
};

// 2. Array - ordered collection
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null, { key: "value" }];

// 3. Function - reusable code block
function calculateTotal(price, tax) {
  return price + (price * tax);
}

// 4. Date
const today = new Date();

// Real-world example: Shopping cart
const shoppingCart = {
  items: [
    { id: 1, name: "Laptop", price: 999, quantity: 1 },
    { id: 2, name: "Mouse", price: 25, quantity: 2 }
  ],
  calculateTotal: function() {
    return this.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }
};

console.log(shoppingCart.calculateTotal()); // 1049`,
                codeTitle: 'Non-Primitive Types'
              },
              {
                heading: 'typeof Operator',
                description: 'Check the type of a value.',
                code: `console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" ⚠️ (known bug in JS)
console.log(typeof Symbol());       // "symbol"
console.log(typeof 123n);           // "bigint"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object" ⚠️ (arrays are objects)
console.log(typeof function(){});   // "function"

// Real-world use case: Type checking
function processData(data) {
  if (typeof data === 'string') {
    return data.toUpperCase();
  } else if (typeof data === 'number') {
    return data * 2;
  } else if (Array.isArray(data)) {
    return data.length;
  } else {
    return "Unknown type";
  }
}

console.log(processData("hello"));  // "HELLO"
console.log(processData(10));       // 20
console.log(processData([1,2,3])); // 3`,
                codeTitle: 'typeof Examples'
              }
            ]
          },
          {
            heading: 'Type Conversion & Coercion',
            subSections: [
              {
                heading: 'Type Conversion (Explicit)',
                description: 'Manually converting one type to another.',
                code: `// String to Number
let str = "123";
let num1 = Number(str);        // 123
let num2 = parseInt(str);      // 123
let num3 = parseFloat("12.5"); // 12.5
let num4 = +str;               // 123 (unary plus)

console.log(Number("hello"));  // NaN (Not a Number)

// Number to String
let age = 25;
let str1 = String(age);     // "25"
let str2 = age.toString();  // "25"
let str3 = age + "";        // "25"

// To Boolean
Boolean(1);           // true
Boolean(0);           // false
Boolean("hello");     // true
Boolean("");          // false
Boolean(null);        // false
Boolean(undefined);   // false

// Real-world example: Form input
const ageInput = document.querySelector('#age').value; // "25" (string)
const userAge = Number(ageInput); // 25 (number)

if (userAge >= 18) {
  console.log("Access granted");
}`,
                codeTitle: 'Type Conversion'
              },
              {
                heading: 'Type Coercion (Implicit)',
                description: 'JavaScript automatically converts types during operations.',
                code: `// String + Number = String concatenation
console.log("5" + 3);        // "53"
console.log("Hello" + 123);  // "Hello123"

// Number + Boolean
console.log(5 + true);       // 6 (true becomes 1)
console.log(5 + false);      // 5 (false becomes 0)

// String to Number in math operations
console.log("10" - 5);       // 5
console.log("10" * "2");     // 20
console.log("10" / "2");     // 5
console.log("10" + 5);       // "105" (+ does concatenation!)

// Comparison coercion
console.log(5 == "5");       // true (coerces types)
console.log(5 === "5");      // false (strict, no coercion)
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Real-world pitfall: User input
const quantity = "5";
const price = 10;
const total = quantity * price;  // 50 (works due to coercion)
const message = "Total: " + total; // "Total: 50"

// But watch out:
const badTotal = quantity + price; // "510" ⚠️ (concatenation!)`,
                codeTitle: 'Type Coercion'
              }
            ]
          },
          {
            heading: 'Truthy and Falsy Values',
            description: 'In JavaScript, values are considered either "truthy" or "falsy" when evaluated in a boolean context.',
            code: `// FALSY VALUES (only 6 in JavaScript):
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN

// Everything else is TRUTHY, including:
// - "0" (string)
// - "false" (string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

// Testing truthy/falsy
if (false) console.log("Won't run");
if (0) console.log("Won't run");
if ("") console.log("Won't run");
if (null) console.log("Won't run");
if (undefined) console.log("Won't run");
if (NaN) console.log("Won't run");

if (true) console.log("Will run");
if (1) console.log("Will run");
if ("hello") console.log("Will run");
if ([]) console.log("Will run");
if ({}) console.log("Will run");

// Real-world example: Default values
function greet(name) {
  name = name || "Guest"; // If name is falsy, use "Guest"
  return \`Hello, \${name}!\`;
}

console.log(greet("Alice"));  // "Hello, Alice!"
console.log(greet(""));       // "Hello, Guest!"
console.log(greet(null));     // "Hello, Guest!"

// Modern way with nullish coalescing
function greetModern(name) {
  name = name ?? "Guest"; // Only null/undefined trigger default
  return \`Hello, \${name}!\`;
}

console.log(greetModern(""));   // "Hello, !" (empty string is valid)
console.log(greetModern(null)); // "Hello, Guest!"

// Practical use: Form validation
function validateForm(email, password) {
  if (!email) {
    return "Email is required";
  }
  if (!password) {
    return "Password is required";
  }
  return "Valid";
}`,
            codeTitle: 'Truthy & Falsy'
          }
        ]
      },
      {
        id: 'operators',
        title: 'Operators',
        content: [
          {
            heading: 'Arithmetic Operators',
            description: 'Used to perform mathematical calculations.',
            code: `let a = 10;
let b = 3;

// Basic arithmetic
console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus/Remainder)
console.log(a ** b); // 1000 (Exponentiation - ES7)

// Increment/Decrement
let x = 5;
console.log(x++);    // 5 (post-increment: return then add)
console.log(x);      // 6
console.log(++x);    // 7 (pre-increment: add then return)

let y = 5;
console.log(y--);    // 5 (post-decrement)
console.log(y);      // 4
console.log(--y);    // 3 (pre-decrement)

// Real-world example: Shopping cart
const itemPrice = 29.99;
const quantity = 3;
const taxRate = 0.08;

const subtotal = itemPrice * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log(\`Subtotal: $\${subtotal.toFixed(2)}\`);
console.log(\`Tax: $\${tax.toFixed(2)}\`);
console.log(\`Total: $\${total.toFixed(2)}\`);

// Pagination calculation
const totalItems = 100;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage); // 10`,
            codeTitle: 'Arithmetic Operators'
          },
          {
            heading: 'Assignment Operators',
            code: `let x = 10;  // Simple assignment

// Compound assignment operators
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8

// Real-world example: Game score
let score = 0;
score += 10;  // Player got a coin
score += 50;  // Player completed level
score *= 2;   // Bonus multiplier
console.log(\`Final Score: \${score}\`); // 120

// Inventory management
let inventory = 100;
inventory -= 5;  // 5 items sold
inventory -= 3;  // 3 items sold
inventory += 20; // Restocked
console.log(\`Items in stock: \${inventory}\`); // 112`,
            codeTitle: 'Assignment Operators'
          },
          {
            heading: 'Comparison Operators',
            description: 'Compare values and return true or false.',
            code: `// Loose equality (with type coercion)
console.log(5 == "5");     // true ⚠️
console.log(0 == false);   // true ⚠️
console.log(null == undefined); // true ⚠️

// Strict equality (no type coercion) - ALWAYS USE THIS
console.log(5 === "5");    // false ✅
console.log(5 === 5);      // true ✅
console.log(0 === false);  // false ✅

// Inequality
console.log(5 != "5");     // false (loose)
console.log(5 !== "5");    // true (strict) ✅

// Greater/Less than
console.log(10 > 5);       // true
console.log(10 >= 10);     // true
console.log(5 < 10);       // true
console.log(5 <= 5);       // true

// Real-world example: Age verification
const userAge = 20;
const legalAge = 18;

if (userAge >= legalAge) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Login validation
const enteredPassword = "secret123";
const correctPassword = "secret123";

if (enteredPassword === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Incorrect password");
}

// Price comparison
const productPrice = 99.99;
const budget = 100;

if (productPrice <= budget) {
  console.log("Can afford this product");
}`,
            codeTitle: 'Comparison Operators'
          },
          {
            heading: 'Logical Operators',
            code: `// AND (&&) - both must be true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// OR (||) - at least one must be true
console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - reverses boolean
console.log(!true);           // false
console.log(!false);          // true
console.log(!0);              // true
console.log(!"");             // true

// Real-world example: Form validation
const email = "user@example.com";
const password = "pass123";
const agreeTerms = true;

if (email && password && agreeTerms) {
  console.log("Registration successful");
} else {
  console.log("Please fill all fields and agree to terms");
}

// User permissions
const isLoggedIn = true;
const isAdmin = false;
const isPremium = true;

if (isLoggedIn && (isAdmin || isPremium)) {
  console.log("Access to premium features");
}

// Short-circuit evaluation
const username = null;
const displayName = username || "Guest"; // "Guest"
console.log(\`Welcome, \${displayName}\`);

// Nullish coalescing (??) - only null/undefined
const count = 0;
const display1 = count || 10;  // 10 (0 is falsy)
const display2 = count ?? 10;  // 0 (0 is not null/undefined)`,
            codeTitle: 'Logical Operators'
          },
          {
            heading: 'Ternary Operator',
            description: 'Shorthand for if-else statements.',
            code: `// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Multiple ternaries (careful, can get messy)
const score = 85;
const grade = score >= 90 ? "A" 
            : score >= 80 ? "B"
            : score >= 70 ? "C"
            : score >= 60 ? "D"
            : "F";
console.log(grade); // "B"

// Real-world example: Button text
const isLoggedIn = false;
const buttonText = isLoggedIn ? "Logout" : "Login";

// Theme toggle
const isDarkMode = true;
const backgroundColor = isDarkMode ? "#1a1a1a" : "#ffffff";
const textColor = isDarkMode ? "#ffffff" : "#000000";

// Discount calculation
const isMember = true;
const price = 100;
const finalPrice = isMember ? price * 0.9 : price;
console.log(\`Price: $\${finalPrice}\`); // $90

// Conditional rendering (React-style)
const hasData = true;
const content = hasData ? "Display data" : "No data available";

// Greeting based on time
const hour = new Date().getHours();
const greeting = hour < 12 ? "Good morning" 
               : hour < 18 ? "Good afternoon" 
               : "Good evening";`,
            codeTitle: 'Ternary Operator'
          },
          {
            heading: 'Operator Precedence',
            description: 'The order in which operators are evaluated.',
            code: `// Multiplication before addition
console.log(2 + 3 * 4);     // 14 (not 20)
console.log((2 + 3) * 4);   // 20 (parentheses first)

// Precedence order (high to low):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -
// 5. Comparison <, >, <=, >=
// 6. Equality ==, ===, !=, !==
// 7. Logical AND &&
// 8. Logical OR ||
// 9. Ternary ?:
// 10. Assignment =, +=, -=, etc.

// Examples
console.log(10 + 5 * 2);         // 20
console.log((10 + 5) * 2);       // 30
console.log(2 ** 3 ** 2);        // 512 (right-to-left: 3**2=9, then 2**9)
console.log((2 ** 3) ** 2);      // 64

// Real-world example: Complex calculation
const price = 100;
const quantity = 3;
const discount = 0.1;
const taxRate = 0.08;

// Without proper precedence understanding
const wrong = price * quantity - discount + taxRate; // WRONG

// Correct calculation
const subtotal = price * quantity;              // Step 1: 300
const afterDiscount = subtotal * (1 - discount); // Step 2: 270
const total = afterDiscount * (1 + taxRate);    // Step 3: 291.6

console.log(\`Total: $\${total.toFixed(2)}\`);

// Using parentheses for clarity
const totalOneLine = price * quantity * (1 - discount) * (1 + taxRate);`,
            codeTitle: 'Operator Precedence'
          }
        ]
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        content: [
          {
            heading: 'if, else if, else',
            description: 'Execute code based on conditions.',
            code: `// Basic if statement
const temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
}

// if-else
const age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote yet");
}

// if-else if-else
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Real-world example: Authentication
const username = "john";
const password = "secret";

if (!username) {
  console.log("Please enter username");
} else if (!password) {
  console.log("Please enter password");
} else if (username === "john" && password === "secret") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

// Nested conditions: Shipping cost
const orderTotal = 75;
const isPremiumMember = true;

if (orderTotal >= 50) {
  console.log("Free shipping!");
} else {
  if (isPremiumMember) {
    console.log("Shipping: $5 (Premium member discount)");
  } else {
    console.log("Shipping: $10");
  }
}

// Multiple conditions
const hour = 14;
const isWeekend = false;

if (hour >= 9 && hour < 17 && !isWeekend) {
  console.log("Office is open");
} else {
  console.log("Office is closed");
}`,
            codeTitle: 'if-else Statements'
          },
          {
            heading: 'switch Statement',
            description: 'Execute different code based on different values.',
            code: `// Basic switch
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Middle of work week");
    break;
  case "Friday":
    console.log("Last work day!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Invalid day");
}

// Real-world example: Menu navigation
function handleMenuClick(menuItem) {
  switch (menuItem) {
    case "home":
      console.log("Navigating to home page");
      break;
    case "products":
      console.log("Loading products");
      break;
    case "cart":
      console.log("Opening shopping cart");
      break;
    case "profile":
      console.log("Loading user profile");
      break;
    case "logout":
      console.log("Logging out...");
      break;
    default:
      console.log("Page not found");
  }
}

// Traffic light system
const lightColor = "yellow";

switch (lightColor) {
  case "green":
    console.log("GO");
    break;
  case "yellow":
    console.log("SLOW DOWN");
    break;
  case "red":
    console.log("STOP");
    break;
  default:
    console.log("Light malfunction");
}

// Calculator
function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "*", 5));  // 50`,
            codeTitle: 'switch Statement'
          },
          {
            heading: 'for Loop',
            description: 'Repeat code a specific number of times.',
            code: `// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}
// Output: 0, 1, 2, 3, 4

// Loop through array
const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(\`\${i + 1}. \${fruits[i]}\`);
}

// Reverse loop
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Blast off!");

// Step by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i); // 0, 2, 4, 6, 8, 10
}

// Real-world example: Generate table rows
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

let tableHTML = "<table>";
for (let i = 0; i < products.length; i++) {
  tableHTML += \`
    <tr>
      <td>\${products[i].name}</td>
      <td>$\${products[i].price}</td>
    </tr>
  \`;
}
tableHTML += "</table>";

// Nested loops: Multiplication table
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j) + "\\t";
  }
  console.log(row);
}

// Sum of numbers
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(\`Sum of 1 to 100: \${sum}\`); // 5050`,
            codeTitle: 'for Loop'
          },
          {
            heading: 'while Loop',
            description: 'Repeat code while condition is true.',
            code: `// Basic while loop
let count = 0;
while (count < 5) {
  console.log(\`Count: \${count}\`);
  count++;
}

// Real-world example: User input validation
let password = "";
let attempts = 0;
const maxAttempts = 3;

// Simulated password input
const inputs = ["123", "abc", "correct"];
let inputIndex = 0;

while (password !== "correct" && attempts < maxAttempts) {
  password = inputs[inputIndex++]; // Simulating user input
  attempts++;
  
  if (password === "correct") {
    console.log("Access granted!");
  } else if (attempts >= maxAttempts) {
    console.log("Too many failed attempts");
  } else {
    console.log(\`Incorrect. \${maxAttempts - attempts} attempts remaining\`);
  }
}

// Game loop simulation
let playerHealth = 100;
let enemyHealth = 80;

while (playerHealth > 0 && enemyHealth > 0) {
  // Player attacks
  const playerDamage = Math.floor(Math.random() * 20) + 10;
  enemyHealth -= playerDamage;
  console.log(\`Player deals \${playerDamage} damage. Enemy health: \${enemyHealth}\`);
  
  if (enemyHealth <= 0) {
    console.log("You won!");
    break;
  }
  
  // Enemy attacks
  const enemyDamage = Math.floor(Math.random() * 15) + 5;
  playerHealth -= enemyDamage;
  console.log(\`Enemy deals \${enemyDamage} damage. Player health: \${playerHealth}\`);
  
  if (playerHealth <= 0) {
    console.log("Game Over!");
    break;
  }
}

// Infinite loop (be careful!)
// while (true) {
//   console.log("This will run forever!");
//   break; // Use break to exit
// }`,
            codeTitle: 'while Loop'
          },
          {
            heading: 'do-while Loop',
            description: 'Execute code at least once, then repeat while condition is true.',
            code: `// Basic do-while (runs at least once)
let num = 10;

do {
  console.log(\`Number: \${num}\`);
  num++;
} while (num < 5);
// Prints once even though condition is false

// Compare with while
let num2 = 10;
while (num2 < 5) {
  console.log(\`This won't print\`);
  num2++;
}

// Real-world example: Menu system
let choice;
let menuIndex = 0;
const menuChoices = ["1", "2", "3", "4"];

do {
  console.log(\`
    Menu:
    1. View Profile
    2. Settings
    3. Help
    4. Exit
  \`);
  
  choice = menuChoices[menuIndex++]; // Simulating user input
  
  switch (choice) {
    case "1":
      console.log("Viewing profile...");
      break;
    case "2":
      console.log("Opening settings...");
      break;
    case "3":
      console.log("Help documentation...");
      break;
    case "4":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid choice");
  }
} while (choice !== "4");

// ATM withdrawal
let balance = 1000;
let continuTransaction;
const transactions = ["y", "y", "n"];
let transactionIndex = 0;

do {
  const amount = 100;
  
  if (amount <= balance) {
    balance -= amount;
    console.log(\`Withdrew $\${amount}. Balance: $\${balance}\`);
  } else {
    console.log("Insufficient funds");
  }
  
  continuTransaction = transactions[transactionIndex++];
  console.log("Continue? (y/n)");
  
} while (continuTransaction === "y" && balance > 0);`,
            codeTitle: 'do-while Loop'
          },
          {
            heading: 'break and continue',
            description: 'Control loop execution flow.',
            code: `// break - exit loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop loop when i is 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - skip current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip when i is 2
  }
  console.log(i); // 0, 1, 3, 4
}

// Real-world example: Search for item
const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Webcam"];
const searchTerm = "Keyboard";
let found = false;

for (let i = 0; i < products.length; i++) {
  if (products[i] === searchTerm) {
    console.log(\`Found \${searchTerm} at index \${i}\`);
    found = true;
    break; // Stop searching once found
  }
}

if (!found) {
  console.log("Product not found");
}

// Skip invalid data
const numbers = [1, -2, 3, -4, 5, -6, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    continue; // Skip negative numbers
  }
  sum += numbers[i];
}
console.log(\`Sum of positive numbers: \${sum}\`); // 16

// Process orders
const orders = [
  { id: 1, status: "pending", amount: 100 },
  { id: 2, status: "cancelled", amount: 50 },
  { id: 3, status: "pending", amount: 200 },
  { id: 4, status: "completed", amount: 150 },
  { id: 5, status: "pending", amount: 300 }
];

let totalPending = 0;
let processedCount = 0;

for (let i = 0; i < orders.length; i++) {
  // Skip cancelled orders
  if (orders[i].status === "cancelled") {
    continue;
  }
  
  // Only process first 2 pending orders
  if (orders[i].status === "pending") {
    totalPending += orders[i].amount;
    processedCount++;
    
    if (processedCount === 2) {
      break; // Stop after processing 2
    }
  }
}

console.log(\`Processed \${processedCount} orders. Total: $\${totalPending}\`);`,
            codeTitle: 'break and continue'
          }
        ]
      },
      {
        id: 'functions',
        title: 'Functions',
        importance: 'Very Important',
        content: [
          {
            heading: 'Function Declaration',
            description: 'Traditional way to create reusable code blocks.',
            code: `// Basic function declaration
function greet() {
  console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
function greetUser(name) {
  console.log(\`Hello, \${name}!\`);
}

greetUser("Alice"); // "Hello, Alice!"
greetUser("Bob");   // "Hello, Bob!"

// Multiple parameters
function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result); // 8

// Function with return value
function calculateTax(price, taxRate) {
  const tax = price * taxRate;
  return tax;
}

const tax = calculateTax(100, 0.08);
console.log(\`Tax: $\${tax}\`); // $8

// Real-world example: Calculate discount
function applyDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  return finalPrice;
}

const originalPrice = 200;
const discountedPrice = applyDiscount(originalPrice, 20);
console.log(\`Original: $\${originalPrice}, Final: $\${discountedPrice}\`);
// Original: $200, Final: $160

// Multiple return values (using object)
function getUserInfo() {
  return {
    name: "John",
    age: 30,
    email: "john@example.com"
  };
}

const user = getUserInfo();
console.log(user.name); // "John"

// Validation function
function validateEmail(email) {
  if (!email.includes("@")) {
    return false;
  }
  if (!email.includes(".")) {
    return false;
  }
  return true;
}

console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email"));     // false`,
            codeTitle: 'Function Declaration'
          },
          {
            heading: 'Function Expression',
            description: 'Assign a function to a variable.',
            code: `// Function expression
const greet = function() {
  console.log("Hello!");
};

greet(); // Call the function

// With parameters
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// Named function expression (useful for debugging)
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can call itself using 'fact'
};

console.log(factorial(5)); // 120

// Difference from declaration: Hoisting
// This works:
sayHello(); // "Hello"
function sayHello() {
  console.log("Hello");
}

// This doesn't work:
// sayHi(); // ❌ Error: Cannot access before initialization
const sayHi = function() {
  console.log("Hi");
};
sayHi(); // ✅ Must call after declaration

// Real-world example: Event handler
const handleClick = function(event) {
  console.log("Button clicked!");
  console.log("Event:", event);
};

// button.addEventListener('click', handleClick);

// Calculator using function expressions
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return b !== 0 ? a / b : "Error: Division by zero";
  }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.multiply(10, 5)); // 50`,
            codeTitle: 'Function Expression'
          },
          {
            heading: 'Arrow Functions',
            description: 'Modern, concise function syntax (ES6).',
            code: `// Basic arrow function
const greet = () => {
  console.log("Hello!");
};

// With one parameter (parentheses optional)
const square = num => {
  return num * num;
};

console.log(square(5)); // 25

// Implicit return (one-liner)
const double = num => num * 2;
console.log(double(4)); // 8

// Multiple parameters
const add = (a, b) => a + b;
console.log(add(3, 7)); // 10

// Returning object (wrap in parentheses)
const createUser = (name, age) => ({
  name: name,
  age: age,
  active: true
});

const user = createUser("Alice", 25);
console.log(user); // { name: "Alice", age: 25, active: true }

// Real-world examples: Array methods
const numbers = [1, 2, 3, 4, 5];

// Map: Transform each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Keep elements that match condition
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Find: Get first matching element
const found = numbers.find(num => num > 3);
console.log(found); // 4

// Sort products by price
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

const sorted = products.sort((a, b) => a.price - b.price);
console.log(sorted);
// [{ name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 }, ...]

// Reduce: Calculate total
const total = products.reduce((sum, product) => sum + product.price, 0);
console.log(\`Total: $\${total}\`); // $1099

// Important: Arrow functions don't have their own 'this'
const person = {
  name: "John",
  regularFunction: function() {
    console.log(this.name); // "John"
  },
  arrowFunction: () => {
    // console.log(this.name); // undefined (this refers to global)
  }
};`,
            codeTitle: 'Arrow Functions'
          },
          {
            heading: 'Default Parameters',
            description: 'Set default values for function parameters.',
            code: `// Without default parameters (old way)
function greetOld(name) {
  name = name || "Guest";
  console.log(\`Hello, \${name}!\`);
}

// With default parameters (ES6)
function greet(name = "Guest") {
  console.log(\`Hello, \${name}!\`);
}

greet("Alice");  // "Hello, Alice!"
greet();         // "Hello, Guest!"

// Multiple default parameters
function createUser(name = "Anonymous", age = 18, country = "Unknown") {
  return {
    name,
    age,
    country
  };
}

console.log(createUser());
// { name: "Anonymous", age: 18, country: "Unknown" }

console.log(createUser("Bob", 25));
// { name: "Bob", age: 25, country: "Unknown" }

console.log(createUser("Alice", 30, "USA"));
// { name: "Alice", age: 30, country: "USA" }

// Default parameter can use previous parameter
function greetWithTitle(name = "Guest", title = \`Mr./Ms. \${name}\`) {
  console.log(\`Hello, \${title}!\`);
}

greetWithTitle();           // "Hello, Mr./Ms. Guest!"
greetWithTitle("Smith");    // "Hello, Mr./Ms. Smith!"

// Real-world example: API request
function fetchData(
  url, 
  method = "GET", 
  headers = { "Content-Type": "application/json" },
  timeout = 5000
) {
  console.log(\`
    Fetching: \${url}
    Method: \${method}
    Headers: \${JSON.stringify(headers)}
    Timeout: \${timeout}ms
  \`);
  // Actual fetch logic would go here
}

fetchData("https://api.example.com/users");
// Uses all default values

fetchData("https://api.example.com/users", "POST", { "Auth": "token" });
// Custom method and headers

// Calculate price with optional tax and discount
function calculatePrice(
  basePrice,
  taxRate = 0.08,
  discount = 0,
  shipping = 0
) {
  const afterDiscount = basePrice * (1 - discount);
  const withTax = afterDiscount * (1 + taxRate);
  const total = withTax + shipping;
  return total.toFixed(2);
}

console.log(calculatePrice(100));
// Uses default tax, no discount, no shipping

console.log(calculatePrice(100, 0.1, 0.2, 10));
// Custom values for all parameters`,
            codeTitle: 'Default Parameters'
          },
          {
            heading: 'Rest Parameters and Arguments',
            code: `// Rest parameters (...) - collect remaining arguments into array
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5));     // 15
console.log(sum(10, 20));            // 30

// Rest parameter must be last
function greetUsers(greeting, ...names) {
  return names.map(name => \`\${greeting}, \${name}!\`);
}

console.log(greetUsers("Hello", "Alice", "Bob", "Charlie"));
// ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]

// Arguments object (old way, works in regular functions only)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(oldSum(1, 2, 3, 4)); // 10

// Real-world example: Shopping cart
function addToCart(userId, ...items) {
  console.log(\`User \${userId} adding items:\`);
  items.forEach((item, index) => {
    console.log(\`  \${index + 1}. \${item}\`);
  });
  return {
    userId,
    items,
    itemCount: items.length
  };
}

const cart = addToCart("user123", "Laptop", "Mouse", "Keyboard");
console.log(cart);
// { userId: "user123", items: [...], itemCount: 3 }

// Create tag function (like template literals)
function createTag(tagName, ...attributes) {
  const attrs = attributes.join(" ");
  return \`<\${tagName} \${attrs}>\`;
}

console.log(createTag("div", 'class="container"', 'id="main"'));
// <div class="container" id="main">

// Max of any number of values
function max(...numbers) {
  return Math.max(...numbers);
}

console.log(max(5, 10, 3, 8, 15, 2)); // 15`,
            codeTitle: 'Rest Parameters'
          },
          {
            heading: 'Anonymous Functions',
            description: 'Functions without names, often used as callbacks.',
            code: `// Anonymous function in setTimeout
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// Anonymous function as event handler
// document.querySelector('#button').addEventListener('click', function() {
//   console.log("Button clicked!");
// });

// Anonymous arrow function
setTimeout(() => {
  console.log("Arrow function after 1 second");
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This runs immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("Alice");

// Real-world example: Array operations
const numbers = [1, 2, 3, 4, 5];

// Map with anonymous function
const doubled = numbers.map(function(num) {
  return num * 2;
});

// Filter with anonymous arrow function
const evens = numbers.filter(num => num % 2 === 0);

// forEach with anonymous function
numbers.forEach(function(num, index) {
  console.log(\`Index \${index}: \${num}\`);
});

// Real-world: Module pattern with IIFE
const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Return public methods
  return {
    add: function(num) {
      result += num;
      return this;
    },
    subtract: function(num) {
      result -= num;
      return this;
    },
    getResult: function() {
      return result;
    },
    reset: function() {
      result = 0;
      return this;
    }
  };
})();

calculator.add(10).subtract(3).add(5);
console.log(calculator.getResult()); // 12

// Data processing pipeline
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = data
  .filter(num => num % 2 === 0)  // Get even numbers
  .map(num => num * 2)           // Double them
  .reduce((sum, num) => sum + num, 0); // Sum them

console.log(result); // 60`,
            codeTitle: 'Anonymous Functions'
          },
          {
            heading: 'Nested Functions',
            description: 'Functions defined inside other functions.',
            code: `// Basic nested function
function outer() {
  console.log("Outer function");
  
  function inner() {
    console.log("Inner function");
  }
  
  inner(); // Call inner function
}

outer();
// Output:
// Outer function
// Inner function

// Inner function has access to outer variables
function greet(firstName) {
  const greeting = "Hello";
  
  function makeGreeting(lastName) {
    // Can access both parameters
    return \`\${greeting}, \${firstName} \${lastName}!\`;
  }
  
  return makeGreeting("Smith");
}

console.log(greet("John")); // "Hello, John Smith!"

// Real-world example: Counter with private state
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable
  
  function increment() {
    count++;
    return count;
  }
  
  function decrement() {
    count--;
    return count;
  }
  
  function getCount() {
    return count;
  }
  
  function reset() {
    count = initialValue;
    return count;
  }
  
  // Return object with nested functions
  return {
    increment,
    decrement,
    getCount,
    reset
  };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.getCount());  // 11
console.log(counter.reset());     // 10
// console.log(count); // ❌ Error: count is private

// Calculator with helper functions
function calculator(a, b) {
  // Helper nested functions
  function add() {
    return a + b;
  }
  
  function subtract() {
    return a - b;
  }
  
  function multiply() {
    return a * b;
  }
  
  function divide() {
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
  
  // Return all operations
  return {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
    divide: divide()
  };
}

const calc = calculator(10, 5);
console.log(calc);
// { add: 15, subtract: 5, multiply: 50, divide: 2 }

// User authentication with nested validation
function authenticateUser(username, password) {
  // Nested validation functions
  function validateUsername() {
    return username && username.length >= 3;
  }
  
  function validatePassword() {
    return password && password.length >= 6;
  }
  
  function checkCredentials() {
    // Simulated check
    return username === "admin" && password === "password123";
  }
  
  // Use nested functions
  if (!validateUsername()) {
    return "Invalid username";
  }
  
  if (!validatePassword()) {
    return "Invalid password";
  }
  
  if (checkCredentials()) {
    return "Login successful";
  }
  
  return "Invalid credentials";
}

console.log(authenticateUser("admin", "password123"));
// "Login successful"`,
            codeTitle: 'Nested Functions'
          }
        ]
      }
    ]
  },
  {
    id: 'phase-2',
    title: 'PHASE 2',
    subtitle: 'Core JavaScript',
    topics: [
      {
        id: 'execution-context',
        title: 'Execution Context & Memory',
        importance: 'Interview Critical',
        content: [
          {
            heading: 'What is Execution Context?',
            description: [
              'Execution Context is an environment where JavaScript code is executed. It contains information about the code being executed, variables, functions, and the scope chain.',
              'Every time you run JavaScript code, an execution context is created.'
            ]
          },
          {
            heading: 'Types of Execution Context',
            subSections: [
              {
                heading: '1. Global Execution Context (GEC)',
                description: 'Created when JavaScript file starts executing. There is only one global context.',
                points: [
                  'Creates global object (window in browser)',
                  'Sets up "this" keyword to point to global object',
                  'All global variables and functions are stored here'
                ]
              },
              {
                heading: '2. Function Execution Context',
                description: 'Created whenever a function is invoked. Each function call gets its own context.',
                points: [
                  'Creates "arguments" object',
                  'Sets up local variables',
                  'Creates reference to outer environment (scope chain)'
                ]
              }
            ]
          },
          {
            heading: 'How JavaScript Code Executes',
            description: 'Execution happens in TWO phases:',
            subSections: [
              {
                heading: 'Phase 1: Memory Creation Phase (Creation Phase)',
                points: [
                  'Allocate memory for variables and functions',
                  'Variables are assigned "undefined"',
                  'Functions are stored entirely in memory',
                  'This is why hoisting happens!'
                ],
                code: `// Code
var x = 10;
function greet() {
  console.log("Hello");
}

// Memory Creation Phase:
// x: undefined
// greet: function { ... }`,
                codeTitle: 'Memory Creation Phase'
              },
              {
                heading: 'Phase 2: Code Execution Phase',
                points: [
                  'Execute code line by line',
                  'Assign actual values to variables',
                  'Execute function calls'
                ],
                code: `// Code Execution Phase:
// Line 1: x = 10 (replaces undefined with 10)
// Line 2: greet function is already in memory
// When greet() is called, new execution context is created`,
                codeTitle: 'Code Execution Phase'
              }
            ]
          },
          {
            heading: 'Call Stack',
            description: [
              'The Call Stack is a data structure that keeps track of function calls. It follows Last-In-First-Out (LIFO) principle.',
              'When a function is called, it\'s pushed to the stack. When it returns, it\'s popped off.'
            ],
            code: `function first() {
  console.log("Inside first");
  second();
  console.log("Back to first");
}

function second() {
  console.log("Inside second");
  third();
  console.log("Back to second");
}

function third() {
  console.log("Inside third");
}

first();

// Call Stack visualization:
// 
// Step 1: [Global]
// Step 2: [Global, first]
// Step 3: [Global, first, second]
// Step 4: [Global, first, second, third]
// Step 5: [Global, first, second] - third done
// Step 6: [Global, first] - second done
// Step 7: [Global] - first done

// Output:
// Inside first
// Inside second
// Inside third
// Back to second
// Back to first`,
            codeTitle: 'Call Stack Example'
          },
          {
            heading: 'Real-World Example: Complete Flow',
            code: `var name = "John";

function sayHello() {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHello();

/*
STEP 1: Global Execution Context Creation
Memory Phase:
- name: undefined
- sayHello: function {...}

STEP 2: Global Execution Context Execution
- name = "John"
- sayHello() is called

STEP 3: Function Execution Context Creation for sayHello()
Memory Phase:
- greeting: undefined

STEP 4: Function Execution Context Execution
- greeting = "Hello"
- console.log() executes → "Hello John"

STEP 5: sayHello() completes, context is removed
- Back to global context

STEP 6: Program ends

Call Stack Throughout:
[Global] → [Global, sayHello] → [Global] → []
*/`,
            codeTitle: 'Complete Execution Flow'
          },
          {
            heading: 'Interview Questions',
            code: `// Question 1: What will this output?
console.log(x);
var x = 5;
// Output: undefined (hoisting - memory phase assigns undefined)

// Question 2: What about this?
console.log(greet);
var greet = function() {
  console.log("Hello");
};
// Output: undefined (function expression, not hoisted like declaration)

// Question 3: What happens here?
function test() {
  console.log(a);
  console.log(b);
  var a = 10;
  let b = 20;
}
test();
// Output: 
// undefined (var is hoisted)
// ReferenceError (let is in Temporal Dead Zone)

// Question 4: Call stack overflow
function recursiveFunction() {
  recursiveFunction(); // Infinite recursion
}
// recursiveFunction(); // RangeError: Maximum call stack size exceeded

// Question 5: Predict the output
var x = 1;

function outer() {
  var x = 2;
  
  function inner() {
    console.log(x);
  }
  
  inner();
}

outer(); // Output: 2 (inner has access to outer's x)`,
            codeTitle: 'Interview Examples'
          }
        ]
      },
      {
        id: 'scope-hoisting',
        title: 'Scope & Hoisting',
        importance: 'Interview Critical',
        content: [
          {
            heading: 'What is Scope?',
            description: 'Scope determines the accessibility (visibility) of variables in your code. It defines where variables and functions can be accessed from.'
          },
          {
            heading: 'Types of Scope',
            subSections: [
              {
                heading: '1. Global Scope',
                description: 'Variables declared outside any function or block. Accessible from anywhere.',
                code: `var globalVar = "I'm global";
let alsoGlobal = "Me too";
const andMe = "Me three";

function test() {
  console.log(globalVar); // ✅ Can access
  console.log(alsoGlobal); // ✅ Can access
}

if (true) {
  console.log(andMe); // ✅ Can access
}

// Real-world example
const API_URL = "https://api.example.com"; // Global constant
let userToken = null; // Global state

function login(username, password) {
  // Can access API_URL from anywhere
  fetch(API_URL + "/login", {
    body: JSON.stringify({ username, password })
  }).then(response => {
    userToken = response.token; // Update global state
  });
}`,
                codeTitle: 'Global Scope'
              },
              {
                heading: '2. Function Scope',
                description: 'Variables declared with var inside a function are only accessible within that function.',
                code: `function myFunction() {
  var functionScoped = "I'm only in this function";
  console.log(functionScoped); // ✅ Works
}

myFunction();
// console.log(functionScoped); // ❌ Error: not defined

// Nested functions
function outer() {
  var outerVar = "Outer";
  
  function inner() {
    var innerVar = "Inner";
    console.log(outerVar); // ✅ Can access outer variable
    console.log(innerVar); // ✅ Can access own variable
  }
  
  inner();
  // console.log(innerVar); // ❌ Error: inner's variable not accessible
}

outer();

// Real-world example: Private variables
function createBankAccount(initialBalance) {
  var balance = initialBalance; // Private to this function
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(balance); // ❌ Error: balance is private`,
                codeTitle: 'Function Scope'
              },
              {
                heading: '3. Block Scope',
                description: 'Variables declared with let and const inside {} are only accessible within that block.',
                code: `// Block scope with let and const
if (true) {
  let blockScoped = "I'm in a block";
  const alsoBlock = "Me too";
  var notBlockScoped = "I escape!";
  
  console.log(blockScoped); // ✅ Works
}

// console.log(blockScoped); // ❌ Error
// console.log(alsoBlock);   // ❌ Error
console.log(notBlockScoped); // ✅ var is not block scoped!

// For loop block scope
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // ❌ Error: i is block scoped

// Compare with var
for (var j = 0; j < 3; j++) {
  console.log(j); // 0, 1, 2
}
console.log(j); // ✅ 3 (var is not block scoped)

// Real-world example: Configuration
function processConfig() {
  if (true) {
    const API_KEY = "secret-key-123"; // Only exists in this block
    
    // Use API_KEY here
    fetch("https://api.example.com", {
      headers: { "Authorization": API_KEY }
    });
  }
  
  // console.log(API_KEY); // ❌ Error: API_KEY not accessible
}

// Switch case block scope
const action = "login";

switch (action) {
  case "login": {
    const message = "Logging in..."; // Block scoped to this case
    console.log(message);
    break;
  }
  case "logout": {
    const message = "Logging out..."; // Different 'message' variable
    console.log(message);
    break;
  }
}`,
                codeTitle: 'Block Scope'
              }
            ]
          },
          {
            heading: 'Scope Chain',
            description: 'When JavaScript looks for a variable, it starts in the current scope and moves outward to parent scopes until it finds it or reaches the global scope.',
            code: `const global = "Global";

function outer() {
  const outerVar = "Outer";
  
  function middle() {
    const middleVar = "Middle";
    
    function inner() {
      const innerVar = "Inner";
      
      // Scope chain: inner → middle → outer → global
      console.log(innerVar);  // ✅ Found in inner scope
      console.log(middleVar); // ✅ Found in middle scope
      console.log(outerVar);  // ✅ Found in outer scope
      console.log(global);    // ✅ Found in global scope
    }
    
    inner();
  }
  
  middle();
}

outer();

// Real-world example: Theme system
const defaultTheme = "light"; // Global

function createApp() {
  const appTheme = "dark"; // App level
  
  function createPage() {
    const pageTheme = appTheme; // Uses app theme
    
    function createWidget() {
      // Looks up the scope chain
      console.log("Widget theme:", pageTheme); // "dark"
    }
    
    createWidget();
  }
  
  createPage();
}

createApp();`,
            codeTitle: 'Scope Chain'
          },
          {
            heading: 'Hoisting',
            description: [
              'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope during the memory creation phase.',
              'Only DECLARATIONS are hoisted, not INITIALIZATIONS.'
            ],
            subSections: [
              {
                heading: 'Variable Hoisting',
                code: `// What you write:
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// How JavaScript sees it:
var x; // Declaration hoisted
console.log(x); // undefined
x = 5; // Initialization stays in place
console.log(x); // 5

// let and const hoisting (Temporal Dead Zone)
// console.log(y); // ❌ ReferenceError: Cannot access before initialization
let y = 10;

// console.log(z); // ❌ ReferenceError: Cannot access before initialization
const z = 20;

// Real-world pitfall
function checkStock() {
  console.log(items); // undefined (hoisted but not initialized)
  
  if (true) {
    var items = 100; // var is function scoped, gets hoisted
  }
  
  console.log(items); // 100
}

checkStock();

// Better approach with let
function checkStockBetter() {
  // console.log(items); // ❌ Error: TDZ
  
  if (true) {
    let items = 100; // Block scoped
    console.log(items); // 100
  }
  
  // console.log(items); // ❌ Error: not defined
}`,
                codeTitle: 'Variable Hoisting'
              },
              {
                heading: 'Function Hoisting',
                code: `// Function declarations are fully hoisted
sayHello(); // ✅ Works! "Hello"

function sayHello() {
  console.log("Hello");
}

// How JavaScript sees it:
// function sayHello() { ... } // Entire function hoisted
// sayHello();

// Function expressions are NOT hoisted
// greet(); // ❌ Error: Cannot access before initialization

const greet = function() {
  console.log("Hi");
};

greet(); // ✅ Now it works

// Arrow functions are also NOT hoisted
// welcome(); // ❌ Error

const welcome = () => {
  console.log("Welcome");
};

// Real-world example: Event handlers
// Setup event handlers before they're defined
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  console.log("App initialized");
}

// But this won't work:
// document.addEventListener('DOMContentLoaded', initAppExpression);
const initAppExpression = function() {
  console.log("App initialized");
};`,
                codeTitle: 'Function Hoisting'
              }
            ]
          },
          {
            heading: 'Temporal Dead Zone (TDZ)',
            description: 'The time between entering scope and variable initialization where let/const variables cannot be accessed.',
            code: `// Example of TDZ
{
  // TDZ starts here for 'x'
  console.log("Before TDZ");
  
  // console.log(x); // ❌ ReferenceError: in TDZ
  
  let x = 10; // TDZ ends here
  console.log(x); // ✅ 10
}

// Why TDZ exists: Catch errors early
function calculatePrice() {
  // Using variable before declaration is usually a mistake
  // console.log(price); // ❌ Error helps catch bug
  
  const taxRate = 0.08;
  let price = 100;
  
  return price * (1 + taxRate);
}

// Real-world: Preventing bugs
function processUser() {
  // This would be hard to debug with var:
  // console.log(userId); // undefined (no error with var)
  
  // With let, error is caught immediately:
  // console.log(userId); // ❌ ReferenceError
  
  let userId = getUserId();
  return userId;
}

// Interview question
var x = 1;

if (true) {
  console.log(x); // What will this print?
  let x = 2;
}
// Answer: ReferenceError! 
// Even though there's global 'x', the let 'x' creates TDZ in block`,
            codeTitle: 'Temporal Dead Zone'
          },
          {
            heading: 'Interview Questions',
            code: `// Question 1: What's the output?
var a = 1;

function test() {
  console.log(a);
  var a = 2;
}

test();
// Answer: undefined (local 'a' is hoisted, shadows global)

// Question 2: Fix this code
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (all see the same 'i')

// Fix: Use let (creates new binding each iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2 ✅

// Question 3: What happens here?
function foo() {
  bar();
  var bar = function() {
    console.log("bar");
  };
}

// foo(); // TypeError: bar is not a function
// (bar is hoisted as undefined, not as function)

// Question 4: Scope chain
var x = 10;

function outer() {
  var x = 20;
  
  function inner() {
    var x = 30;
    console.log(x); // 30 (finds in own scope)
  }
  
  inner();
  console.log(x); // 20 (finds in own scope)
}

outer();
console.log(x); // 10 (global scope)

// Question 5: Closure + scope
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate scope!)`,
            codeTitle: 'Interview Practice'
          }
        ]
      },
      {
        id: 'this-keyword',
        title: 'this Keyword',
        importance: 'Very Important',
        content: [
          {
            heading: 'What is "this"?',
            description: [
              '"this" is a keyword that refers to the context in which a function is executed. Its value depends on HOW the function is called, not WHERE it is defined.',
              'The value of "this" is determined at runtime.'
            ]
          },
          {
            heading: '1. this in Global Scope',
            code: `// In global scope, 'this' refers to the global object
console.log(this); // Window object (in browser)

// Global function
function globalFunction() {
  console.log(this); // Window (in non-strict mode)
}

globalFunction();

// Strict mode
"use strict";
function strictFunction() {
  console.log(this); // undefined (in strict mode)
}

strictFunction();

// Real-world: Avoid using 'this' in global scope
// Bad practice:
this.appName = "MyApp";
console.log(window.appName); // "MyApp" (pollutes global)

// Good practice:
const app = {
  name: "MyApp"
};`,
            codeTitle: 'this in Global Scope'
          },
          {
            heading: '2. this in Object Methods',
            description: 'When a function is called as a method of an object, "this" refers to that object.',
            code: `const person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log(\`Hello, I'm \${this.name}\`);
    console.log(\`I'm \${this.age} years old\`);
  }
};

person.greet();
// Output:
// Hello, I'm Alice
// I'm 30 years old

// Real-world example: User object
const user = {
  username: "john_doe",
  email: "john@example.com",
  posts: 42,
  
  displayProfile: function() {
    return \`
      Username: \${this.username}
      Email: \${this.email}
      Posts: \${this.posts}
    \`;
  },
  
  addPost: function() {
    this.posts++;
    console.log(\`Total posts: \${this.posts}\`);
  }
};

console.log(user.displayProfile());
user.addPost(); // Total posts: 43

// ⚠️ Pitfall: Losing context
const greetFunction = person.greet;
// greetFunction(); // 'this' is undefined! Function lost its context

// Solution: Bind the context
const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ Works!`,
            codeTitle: 'this in Object Methods'
          },
          {
            heading: '3. this in Regular Functions',
            code: `// Regular function: 'this' depends on how it's called

// 1. Called normally: 'this' is global (or undefined in strict mode)
function regularFunction() {
  console.log(this);
}

regularFunction(); // Window (non-strict) or undefined (strict)

// 2. Called as method: 'this' is the object
const obj = {
  method: regularFunction
};

obj.method(); // obj

// 3. Called with new: 'this' is the new instance
function Person(name) {
  this.name = name;
  console.log(this); // The new Person instance
}

const alice = new Person("Alice");
// 'this' refers to the new alice object

// Real-world pitfall: Event handlers
const button = {
  text: "Click me",
  handleClick: function() {
    console.log(\`Button text: \${this.text}\`);
  }
};

// If used directly as event handler:
// document.querySelector('#btn').addEventListener('click', button.handleClick);
// ⚠️ 'this' will be the button element, not our button object!

// Solution 1: Arrow function wrapper
// document.querySelector('#btn').addEventListener('click', () => {
//   button.handleClick();
// });

// Solution 2: Bind
// document.querySelector('#btn').addEventListener('click', button.handleClick.bind(button));`,
            codeTitle: 'this in Regular Functions'
          },
          {
            heading: '4. this in Arrow Functions',
            description: 'Arrow functions DO NOT have their own "this". They inherit "this" from the surrounding (lexical) scope.',
            code: `// Arrow function inherits 'this' from where it's defined
const person = {
  name: "Bob",
  regularGreet: function() {
    console.log(\`Regular: \${this.name}\`); // Works
  },
  arrowGreet: () => {
    console.log(\`Arrow: \${this.name}\`); // Doesn't work!
    // 'this' is not the person object, it's from outer scope
  }
};

person.regularGreet(); // "Regular: Bob" ✅
person.arrowGreet();   // "Arrow: undefined" ❌

// But arrow functions are great for callbacks!
const team = {
  name: "Developers",
  members: ["Alice", "Bob", "Charlie"],
  
  printMembers: function() {
    // Regular function in forEach: 'this' is undefined
    // this.members.forEach(function(member) {
    //   console.log(\`\${this.name}: \${member}\`); // ❌ Error
    // });
    
    // Arrow function in forEach: 'this' is inherited from printMembers
    this.members.forEach((member) => {
      console.log(\`\${this.name}: \${member}\`); // ✅ Works!
    });
  }
};

team.printMembers();
// Developers: Alice
// Developers: Bob
// Developers: Charlie

// Real-world example: Class methods
class Counter {
  constructor() {
    this.count = 0;
    
    // Arrow function property - always has correct 'this'
    this.increment = () => {
      this.count++;
      console.log(this.count);
    };
  }
  
  // Regular method
  decrement() {
    this.count--;
    console.log(this.count);
  }
}

const counter = new Counter();

// Can use increment directly
const incrementFn = counter.increment;
incrementFn(); // 1 ✅ (arrow function keeps 'this')

// But decrement loses context
const decrementFn = counter.decrement;
// decrementFn(); // ❌ Error (regular function loses 'this')`,
            codeTitle: 'this in Arrow Functions'
          },
          {
            heading: '5. this in Event Handlers',
            code: `// In event handlers, 'this' refers to the element that triggered the event

// HTML: <button id="myButton">Click me</button>

// Regular function: 'this' is the button element
document.querySelector('#myButton')?.addEventListener('click', function() {
  console.log(this); // <button id="myButton">
  console.log(this.textContent); // "Click me"
  this.style.backgroundColor = 'blue';
});

// Arrow function: 'this' is from outer scope
document.querySelector('#myButton')?.addEventListener('click', () => {
  console.log(this); // Window or undefined (not the button!)
});

// Real-world example: Toggle button
const toggleButton = {
  isActive: false,
  element: document.querySelector('#toggle'),
  
  init: function() {
    // Problem: Regular function loses context
    // this.element.addEventListener('click', function() {
    //   this.isActive = !this.isActive; // ❌ 'this' is the button
    // });
    
    // Solution 1: Arrow function
    this.element?.addEventListener('click', () => {
      this.isActive = !this.isActive; // ✅ 'this' is toggleButton
      this.updateUI();
    });
    
    // Solution 2: Bind
    // this.element.addEventListener('click', this.handleClick.bind(this));
  },
  
  updateUI: function() {
    if (this.element) {
      this.element.textContent = this.isActive ? 'ON' : 'OFF';
      this.element.className = this.isActive ? 'active' : '';
    }
  },
  
  handleClick: function() {
    this.isActive = !this.isActive;
    this.updateUI();
  }
};

// toggleButton.init();`,
            codeTitle: 'this in Event Handlers'
          },
          {
            heading: 'Interview Edge Cases',
            code: `// Edge Case 1: Nested objects
const obj = {
  name: "Outer",
  inner: {
    name: "Inner",
    getName: function() {
      return this.name;
    }
  }
};

console.log(obj.inner.getName()); // "Inner" (this is obj.inner)

// Edge Case 2: Method in setTimeout
const user = {
  name: "John",
  sayName: function() {
    console.log(this.name);
  }
};

setTimeout(user.sayName, 1000); // undefined (lost context)
setTimeout(() => user.sayName(), 1000); // "John" ✅
setTimeout(user.sayName.bind(user), 1000); // "John" ✅

// Edge Case 3: Constructor function
function Car(brand) {
  this.brand = brand;
  
  this.getBrand = function() {
    return this.brand;
  };
  
  this.getBrandArrow = () => {
    return this.brand;
  };
}

const car = new Car("Toyota");
console.log(car.getBrand()); // "Toyota"

const getBrandFn = car.getBrand;
// console.log(getBrandFn()); // undefined (lost context)

const getArrowFn = car.getBrandArrow;
console.log(getArrowFn()); // "Toyota" ✅ (arrow function)

// Edge Case 4: call, apply, bind
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1, "Hello", "!"); // "Hello, Alice!"
greet.apply(person2, ["Hi", "?"]); // "Hi, Bob?"

const boundGreet = greet.bind(person1, "Hey");
boundGreet("!!!"); // "Hey, Alice!!!"

// Edge Case 5: Class with arrow functions
class Button {
  constructor(label) {
    this.label = label;
    this.clicks = 0;
  }
  
  // Regular method - can lose context
  handleClick() {
    this.clicks++;
  }
  
  // Arrow function property - maintains context
  handleClickArrow = () => {
    this.clicks++;
    console.log(\`\${this.label}: \${this.clicks} clicks\`);
  }
}

const btn = new Button("Submit");
const clickHandler = btn.handleClickArrow;
clickHandler(); // "Submit: 1 clicks" ✅`,
            codeTitle: 'Interview Edge Cases'
          },
          {
            heading: 'Quick Reference: "this" Rules',
            code: `/*
1. GLOBAL CONTEXT
   console.log(this); → Window (browser) or global (Node.js)

2. FUNCTION CALL
   myFunction(); → Window (non-strict) or undefined (strict)

3. METHOD CALL
   obj.method(); → obj

4. CONSTRUCTOR CALL
   new MyClass(); → new instance

5. EXPLICIT BINDING
   func.call(obj); → obj
   func.apply(obj); → obj
   func.bind(obj)(); → obj

6. ARROW FUNCTION
   () => {} → inherits from surrounding scope

7. EVENT HANDLER
   element.addEventListener('click', function() {}); → element
   element.addEventListener('click', () => {}); → surrounding scope

REMEMBER:
- Regular functions: 'this' depends on HOW they're called
- Arrow functions: 'this' depends on WHERE they're defined
- Always use arrow functions for callbacks that need parent 'this'
- Use .bind() when passing methods as callbacks
*/`,
            codeTitle: 'this Rules Summary'
          }
        ]
      },
      {
        id: 'closures',
        title: 'Closures',
        importance: 'Very Important',
        content: [
          {
            heading: 'What is a Closure?',
            description: [
              'A closure is created when a function "remembers" and has access to variables from its outer (parent) function, even after the outer function has finished executing.',
              'In simple terms: A function bundled together with its lexical environment (the variables it has access to).'
            ]
          },
          {
            heading: 'Lexical Environment',
            description: 'Every function has access to variables in its own scope + parent scope. This relationship is called lexical scoping.',
            code: `// Basic example of lexical scoping
function outer() {
  const outerVar = "I'm from outer";
  
  function inner() {
    console.log(outerVar); // ✅ Can access parent variable
  }
  
  inner();
}

outer(); // "I'm from outer"

// The inner function has access to:
// 1. Its own variables
// 2. Variables from outer()
// 3. Global variables

function example() {
  const a = 10;
  
  function level1() {
    const b = 20;
    
    function level2() {
      const c = 30;
      console.log(a, b, c); // ✅ Can access all
    }
    
    level2();
  }
  
  level1();
}

example(); // 10 20 30`,
            codeTitle: 'Lexical Scoping'
          },
          {
            heading: 'Closure Definition & Example',
            code: `// Classic closure example
function makeCounter() {
  let count = 0; // This variable is "closed over"
  
  return function() {
    count++; // Inner function remembers 'count'
    return count;
  };
}

const counter = makeCounter();

// The outer function has finished executing,
// but the inner function still remembers 'count'!

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Each call to makeCounter creates a NEW closure
const counter2 = makeCounter();
console.log(counter2()); // 1 (separate count variable)

// How it works:
// 1. makeCounter() executes and returns inner function
// 2. makeCounter() execution context is removed from call stack
// 3. BUT 'count' variable is still kept in memory!
// 4. The returned function has a reference to 'count'
// 5. This is a closure!`,
            codeTitle: 'Closure Example'
          },
          {
            heading: 'Real-World Use Cases',
            subSections: [
              {
                heading: '1. Data Privacy (Encapsulation)',
                code: `// Creating private variables
function createBankAccount(initialBalance) {
  // Private variables - not accessible from outside
  let balance = initialBalance;
  let transactionHistory = [];
  
  // Private helper function
  function recordTransaction(type, amount) {
    transactionHistory.push({
      type,
      amount,
      date: new Date(),
      balance: balance
    });
  }
  
  // Public methods (returned as object)
  return {
    deposit: function(amount) {
      if (amount > 0) {
        balance += amount;
        recordTransaction('deposit', amount);
        return balance;
      }
      return "Invalid amount";
    },
    
    withdraw: function(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        recordTransaction('withdrawal', amount);
        return balance;
      }
      return "Invalid amount or insufficient funds";
    },
    
    getBalance: function() {
      return balance;
    },
    
    getHistory: function() {
      return [...transactionHistory]; // Return copy
    }
  };
}

const myAccount = createBankAccount(1000);

console.log(myAccount.getBalance());  // 1000
myAccount.deposit(500);               // 1500
myAccount.withdraw(200);              // 1300
console.log(myAccount.getBalance());  // 1300

// Can't access private variables directly!
// console.log(myAccount.balance); // undefined
// console.log(balance); // Error: not defined

// Only through public methods
console.log(myAccount.getHistory());`,
                codeTitle: 'Data Privacy'
              },
              {
                heading: '2. Function Factory',
                code: `// Create customized functions
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20

// Real-world: Create tax calculators for different regions
function createTaxCalculator(taxRate, region) {
  return function(amount) {
    const tax = amount * taxRate;
    return {
      amount,
      tax,
      total: amount + tax,
      region
    };
  };
}

const calculateUSATax = createTaxCalculator(0.08, "USA");
const calculateEUTax = createTaxCalculator(0.20, "EU");

console.log(calculateUSATax(100));
// { amount: 100, tax: 8, total: 108, region: "USA" }

console.log(calculateEUTax(100));
// { amount: 100, tax: 20, total: 120, region: "EU" }

// Discount calculator factory
function createDiscounter(discount) {
  return function(price) {
    return price * (1 - discount);
  };
}

const employee Discount = createDiscounter(0.15); // 15% off
const vipDiscount = createDiscounter(0.30);      // 30% off

console.log(employeeDiscount(100)); // 85
console.log(vipDiscount(100));      // 70`,
                codeTitle: 'Function Factory'
              },
              {
                heading: '3. Event Handlers & Callbacks',
                code: `// Closure in event handlers
function setupButton(buttonId, message) {
  const button = document.querySelector(\`#\${buttonId}\`);
  
  button?.addEventListener('click', function() {
    // This callback forms a closure over 'message'
    alert(message);
  });
}

// setupButton('btn1', 'Button 1 clicked!');
// setupButton('btn2', 'Button 2 clicked!');

// Each button remembers its own message!

// Real-world: Dynamic button creation
function createButtons() {
  const messages = ['First', 'Second', 'Third'];
  
  for (let i = 0; i < messages.length; i++) {
    const button = document.createElement('button');
    button.textContent = \`Button \${i + 1}\`;
    
    // Closure captures current value of 'i' and 'messages[i]'
    button.addEventListener('click', function() {
      console.log(\`\${messages[i]} button clicked!\`);
    });
    
    // document.body.appendChild(button);
  }
}

// Why 'let' is important here:
function buggyButtons() {
  for (var i = 0; i < 3; i++) {
    const button = document.createElement('button');
    
    button.addEventListener('click', function() {
      console.log(i); // ⚠️ Always logs 3! (var is not block-scoped)
    });
  }
}

// setTimeout with closure
function delayedGreetings() {
  const names = ['Alice', 'Bob', 'Charlie'];
  
  names.forEach((name, index) => {
    setTimeout(() => {
      console.log(\`Hello, \${name}!\`);
    }, 1000 * (index + 1));
  });
  
  // Each setTimeout remembers its own 'name'
}

// delayedGreetings();
// After 1s: "Hello, Alice!"
// After 2s: "Hello, Bob!"
// After 3s: "Hello, Charlie!"`,
                codeTitle: 'Event Handlers'
              },
              {
                heading: '4. Memoization (Caching)',
                code: `// Cache expensive calculations
function createMemoizedFunction() {
  const cache = {}; // Cached results
  
  return function(n) {
    if (n in cache) {
      console.log('Returning cached result');
      return cache[n];
    }
    
    console.log('Calculating...');
    const result = n * n; // Expensive calculation
    cache[n] = result;
    return result;
  };
}

const memoizedSquare = createMemoizedFunction();

console.log(memoizedSquare(5)); // Calculating... 25
console.log(memoizedSquare(5)); // Returning cached result 25
console.log(memoizedSquare(10)); // Calculating... 100

// Real-world: Fibonacci with memoization
function createFibonacci() {
  const cache = {
    0: 0,
    1: 1
  };
  
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fibonacci = createFibonacci();
console.log(fibonacci(10)); // 55 (calculated once)
console.log(fibonacci(10)); // 55 (instant from cache)

// API request caching
function createAPICache() {
  const cache = new Map();
  
  return async function fetchData(url) {
    if (cache.has(url)) {
      console.log('Returning cached data');
      return cache.get(url);
    }
    
    console.log('Fetching from API...');
    // const response = await fetch(url);
    // const data = await response.json();
    const data = { mock: 'data' }; // Mocked
    
    cache.set(url, data);
    return data;
  };
}

const cachedFetch = createAPICache();`,
                codeTitle: 'Memoization'
              }
            ]
          },
          {
            heading: 'Memory Implications',
            description: 'Closures keep variables in memory even after the outer function has finished. This can be good (preserving state) or bad (memory leaks).',
            code: `// Memory considerations

// Good: Intentional state preservation
function createCounter() {
  let count = 0; // Kept in memory as long as counter exists
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter();
// 'count' stays in memory - this is intentional ✅

// When counter is no longer referenced, it will be garbage collected
// counter = null; // Now 'count' can be garbage collected

// Bad: Accidental memory leak
function addEventListeners() {
  const largeData = new Array(1000000).fill('data'); // 1M elements
  
  document.querySelector('#button')?.addEventListener('click', function() {
    // This closure keeps 'largeData' in memory!
    console.log(largeData.length);
  });
}

// addEventListeners();
// Even if you navigate away, largeData stays in memory! ⚠️

// Solution: Only keep what you need
function addEventListenersOptimized() {
  const largeData = new Array(1000000).fill('data');
  const dataLength = largeData.length; // Store only what we need
  
  document.querySelector('#button')?.addEventListener('click', function() {
    console.log(dataLength); // Closure over small value, not entire array
  });
}

// Cleaning up closures
function setupComponent() {
  let data = { /* large object */ };
  
  const cleanup = () => {
    data = null; // Release reference
  };
  
  // Return cleanup function
  return cleanup;
}

const cleanup = setupComponent();
// Later, when component is destroyed:
cleanup();`,
            codeTitle: 'Memory Management'
          },
          {
            heading: 'Interview Questions',
            code: `// Question 1: What will this output?
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 3, 3, 3 (all closures share same 'i')

// Fix 1: Use let (creates new binding each iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2 ✅

// Fix 2: Create IIFE to capture each value
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
// Output: 0, 1, 2 ✅

// Question 2: What's the output?
function createFunctions() {
  const result = [];
  
  for (var i = 0; i < 3; i++) {
    result.push(function() {
      return i;
    });
  }
  
  return result;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3 (all share same 'i')
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3

// Question 3: Private counter
function createSecureCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const secureCounter = createSecureCounter();
secureCounter.increment();
secureCounter.increment();
console.log(secureCounter.getValue()); // 2
// console.log(secureCounter.count); // undefined (private!)

// Question 4: Function factory
function outer(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const result = outer(1)(2)(3);
console.log(result); // 6

// Alternative syntax
const add = outer(1);
const addTwo = add(2);
const final = addTwo(3);
console.log(final); // 6

// Question 5: Module pattern
const calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation, value) {
    console.log(\`\${operation}: \${value}, Result: \${result}\`);
  }
  
  // Public API
  return {
    add(n) {
      result += n;
      log('Add', n);
      return this;
    },
    subtract(n) {
      result -= n;
      log('Subtract', n);
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      return this;
    }
  };
})();

calculator.add(5).add(10).subtract(3);
console.log(calculator.getResult()); // 12`,
            codeTitle: 'Interview Questions'
          }
        ]
      },
      {
        id: 'call-apply-bind',
        title: 'Call, Apply, Bind',
        content: [
          {
            heading: 'Function Borrowing',
            description: 'Call, apply, and bind are methods that allow you to control what "this" refers to when calling a function. They enable function borrowing and explicit context setting.'
          },
          {
            heading: 'call() Method',
            description: 'Calls a function with a given "this" value and arguments provided individually.',
            code: `// Syntax: func.call(thisArg, arg1, arg2, ...)

// Basic example
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1, "Hello", "!"); // "Hello, Alice!"
greet.call(person2, "Hi", "?");    // "Hi, Bob?"

// Real-world: Function borrowing
const user1 = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

const user2 = {
  firstName: "Jane",
  lastName: "Smith"
  // Doesn't have getFullName method
};

// Borrow getFullName from user1
const name = user1.getFullName.call(user2);
console.log(name); // "Jane Smith"

// Array-like object example
function printArguments() {
  // 'arguments' is array-like but not an array
  // Borrow Array's slice method
  const args = Array.prototype.slice.call(arguments);
  console.log(args); // Real array now
}

printArguments(1, 2, 3, 4); // [1, 2, 3, 4]

// Real-world: Logging with context
const logger = {
  prefix: "[LOG]",
  log: function(message) {
    console.log(\`\${this.prefix} \${message}\`);
  }
};

const errorLogger = {
  prefix: "[ERROR]"
};

logger.log.call(errorLogger, "Something went wrong!");
// "[ERROR] Something went wrong!"

// Finding max in array
const numbers = [5, 10, 3, 8, 15];
const max = Math.max.call(null, ...numbers);
console.log(max); // 15

// Or directly:
const max2 = Math.max.call(null, 5, 10, 3, 8, 15);
console.log(max2); // 15`,
            codeTitle: 'call() Examples'
          },
          {
            heading: 'apply() Method',
            description: 'Similar to call(), but takes arguments as an array instead of individually.',
            code: `// Syntax: func.apply(thisArg, [arg1, arg2, ...])

// Basic example
function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person = { name: "Charlie" };

greet.apply(person, ["Hello", "!"]); // "Hello, Charlie!"

// Difference between call and apply:
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum.call(null, 1, 2, 3));      // 6 (individual args)
console.log(sum.apply(null, [1, 2, 3]));   // 6 (array of args)

// Real-world: Finding max/min in array
const numbers = [5, 10, 3, 8, 15, 2];

const max = Math.max.apply(null, numbers);
const min = Math.min.apply(null, numbers);

console.log(max); // 15
console.log(min); // 2

// Modern alternative (spread operator):
console.log(Math.max(...numbers)); // 15

// Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Old way with apply:
Array.prototype.push.apply(array1, array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]

// Modern way:
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
array3.push(...array4);

// Real-world: Variable number of arguments
function createUser(name, age, ...interests) {
  return {
    name,
    age,
    interests
  };
}

const userInfo = ["Alice", 25, "coding", "music", "travel"];
const user = createUser.apply(null, userInfo);
console.log(user);
// { name: "Alice", age: 25, interests: ["coding", "music", "travel"] }

// Function with unknown number of args
function logWithTimestamp(message, ...tags) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${message}\`, tags);
}

const logData = ["User logged in", "auth", "success"];
logWithTimestamp.apply(null, logData);`,
            codeTitle: 'apply() Examples'
          },
          {
            heading: 'bind() Method',
            description: 'Creates a NEW function with "this" bound to a specific value. Unlike call/apply, it doesn\'t invoke the function immediately.',
            code: `// Syntax: func.bind(thisArg, arg1, arg2, ...)
// Returns a new function

// Basic example
function greet(greeting) {
  console.log(\`\${greeting}, \${this.name}!\`);
}

const person = { name: "David" };

const boundGreet = greet.bind(person);
boundGreet("Hello"); // "Hello, David!"
boundGreet("Hi");    // "Hi, David!"

// bind() doesn't call the function, it returns a new one
const person2 = { name: "Eve" };
const greetEve = greet.bind(person2, "Hey");
greetEve(); // "Hey, Eve!" (greeting is pre-filled)

// Real-world: Event handlers
const button = {
  label: "Click me",
  clicks: 0,
  
  handleClick: function() {
    this.clicks++;
    console.log(\`\${this.label}: \${this.clicks} clicks\`);
  }
};

// Without bind (wrong 'this'):
// document.querySelector('#btn').addEventListener('click', button.handleClick);
// ❌ 'this' will be the button element, not our object

// With bind (correct 'this'):
// document.querySelector('#btn').addEventListener('click', button.handleClick.bind(button));
// ✅ 'this' is now the button object

// Partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-fill first argument
console.log(double(5));  // 10
console.log(double(10)); // 20

const triple = multiply.bind(null, 3);
console.log(triple(5));  // 15

// Real-world: API call with preset headers
function fetchData(method, url, data) {
  console.log(\`\${method} \${url}\`, data);
  // fetch implementation...
}

const getData = fetchData.bind(null, "GET");
const postData = fetchData.bind(null, "POST");

getData("https://api.example.com/users", null);
postData("https://api.example.com/users", { name: "John" });

// Timer functions
const user = {
  name: "Alice",
  greet: function() {
    console.log(\`Hello, \${this.name}\`);
  }
};

// Without bind:
// setTimeout(user.greet, 1000); // ❌ "Hello, undefined"

// With bind:
setTimeout(user.greet.bind(user), 1000); // ✅ "Hello, Alice"

// Method chaining
const calculator = {
  value: 0,
  
  add: function(n) {
    this.value += n;
    return this;
  },
  
  multiply: function(n) {
    this.value *= n;
    return this;
  },
  
  getValue: function() {
    return this.value;
  }
};

const boundCalc = {
  ...calculator,
  add: calculator.add.bind(calculator),
  multiply: calculator.multiply.bind(calculator)
};`,
            codeTitle: 'bind() Examples'
          },
          {
            heading: 'Comparison: call vs apply vs bind',
            code: `const person = { name: "Alice" };

function greet(greeting, punctuation) {
  return \`\${greeting}, \${this.name}\${punctuation}\`;
}

// call() - invokes immediately with individual arguments
const result1 = greet.call(person, "Hello", "!");
console.log(result1); // "Hello, Alice!"

// apply() - invokes immediately with array of arguments
const result2 = greet.apply(person, ["Hi", "?"]);
console.log(result2); // "Hi, Alice?"

// bind() - returns new function, doesn't invoke
const boundGreet = greet.bind(person, "Hey");
const result3 = boundGreet("!!");
console.log(result3); // "Hey, Alice!!"

/*
SUMMARY:

call()
- Invokes function immediately
- Arguments passed individually
- func.call(thisArg, arg1, arg2, ...)

apply()
- Invokes function immediately
- Arguments passed as array
- func.apply(thisArg, [arg1, arg2, ...])

bind()
- Returns new function (doesn't invoke)
- Can preset arguments (partial application)
- func.bind(thisArg, arg1, arg2, ...)

WHEN TO USE:

call():
- When you know the exact arguments
- When you want immediate execution
- When arguments are not in an array

apply():
- When arguments are in an array
- When working with variable arguments
- When you want immediate execution

bind():
- When you need a reusable function
- Event handlers
- Partial application
- When you want to call the function later
*/`,
            codeTitle: 'call vs apply vs bind'
          },
          {
            heading: 'Polyfill Understanding',
            description: 'Understanding how call, apply, and bind work internally helps in interviews.',
            code: `// Polyfill for call()
Function.prototype.myCall = function(context, ...args) {
  // If context is null/undefined, use global object
  context = context || globalThis;
  
  // Create unique property to avoid conflicts
  const fnSymbol = Symbol();
  
  // Set this function as a property of context
  context[fnSymbol] = this;
  
  // Call the function as a method of context
  const result = context[fnSymbol](...args);
  
  // Clean up
  delete context[fnSymbol];
  
  return result;
};

// Test myCall
function greet(greeting) {
  return \`\${greeting}, \${this.name}!\`;
}

const person = { name: "Bob" };
console.log(greet.myCall(person, "Hello")); // "Hello, Bob!"

// Polyfill for apply()
Function.prototype.myApply = function(context, args = []) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

// Test myApply
console.log(greet.myApply(person, ["Hi"])); // "Hi, Bob!"

// Polyfill for bind()
Function.prototype.myBind = function(context, ...boundArgs) {
  const originalFunction = this;
  
  return function(...newArgs) {
    // Combine preset args with new args
    return originalFunction.apply(context, [...boundArgs, ...newArgs]);
  };
};

// Test myBind
function sum(a, b, c) {
  return a + b + c;
}

const add5 = sum.myBind(null, 5);
console.log(add5(10, 15)); // 30 (5 + 10 + 15)

/*
HOW THEY WORK:

call/apply:
1. Set the function as a temporary property of the context object
2. Call it as a method (so 'this' is the context)
3. Remove the temporary property
4. Return the result

bind:
1. Store reference to original function
2. Return a new function
3. When new function is called, use apply() with stored context
4. Combine preset arguments with new arguments
*/`,
            codeTitle: 'Polyfills'
          },
          {
            heading: 'Interview Questions',
            code: `// Question 1: What's the output?
const obj = {
  name: "Object",
  getName: function() {
    return this.name;
  }
};

const getName = obj.getName;
console.log(getName()); // undefined (lost context)

const boundGetName = obj.getName.bind(obj);
console.log(boundGetName()); // "Object" ✅

// Question 2: Fix this code
function multiply(a, b) {
  return a * b;
}

const nums = [5, 10];
const result = multiply.apply(null, nums);
console.log(result); // 50

// Question 3: Partial application
function greetUser(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

const sayHello = greetUser.bind(null, "Hello");
console.log(sayHello("Alice", "!")); // "Hello, Alice!"

const sayHelloAlice = greetUser.bind(null, "Hello", "Alice");
console.log(sayHelloAlice("?")); // "Hello, Alice?"

// Question 4: Method borrowing
const person1 = {
  name: "John",
  age: 30,
  introduce: function(city, country) {
    return \`I'm \${this.name}, \${this.age} years old from \${city}, \${country}\`;
  }
};

const person2 = {
  name: "Jane",
  age: 25
};

const intro = person1.introduce.call(person2, "Paris", "France");
console.log(intro); // "I'm Jane, 25 years old from Paris, France"

// Question 5: Context in nested functions
const counter = {
  count: 0,
  increment: function() {
    // Regular function - loses 'this'
    setTimeout(function() {
      // this.count++; // ❌ Error
    }, 1000);
    
    // Solution 1: Arrow function
    setTimeout(() => {
      this.count++;
    }, 1000);
    
    // Solution 2: bind
    setTimeout(function() {
      this.count++;
    }.bind(this), 1000);
  }
};

// Question 6: Array method borrowing
const arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

// Convert to real array
const realArray = Array.prototype.slice.call(arrayLike);
console.log(realArray); // ["a", "b", "c"]

// Modern way
const realArray2 = Array.from(arrayLike);
console.log(realArray2); // ["a", "b", "c"]`,
            codeTitle: 'Interview Practice'
          }
        ]
      }
    ]
  }
];
