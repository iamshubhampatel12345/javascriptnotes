interface Section {
  subtitle?: string;
  content?: string;
  points?: string[];
  code?: string;
  language?: string;
  example?: string;
}

interface Topic {
  title: string;
  phase?: string;
  sections: Section[];
}

interface TopicsData {
  [key: string]: Topic;
}

export const topicsData: TopicsData = {
  'intro-to-js': {
    title: 'Introduction to JavaScript',
    phase: '1',
    sections: [
      {
        subtitle: 'What is JavaScript?',
        content:
          'JavaScript is a programming language that makes websites interactive and alive. Think of HTML as the skeleton of a webpage, CSS as the skin and clothes, and JavaScript as the brain and muscles that make it move and respond to you.\n\nJavaScript runs inside your web browser (like Chrome, Firefox, Safari) and can also run on servers using Node.js. It\'s one of the most popular programming languages in the world because almost every website uses it.',
        points: [
          'Makes web pages interactive - buttons work, animations play, forms validate',
          'Runs in browsers (Chrome, Firefox, Safari) and on servers (Node.js)',
          'Used everywhere - websites, mobile apps, desktop apps, games, even robots',
          'Easy to start learning - you can write your first code in minutes',
        ],
      },
      {
        subtitle: 'History & Evolution',
        content:
          'JavaScript was created by Brendan Eich in just 10 days back in 1995! It was originally called Mocha, then renamed to LiveScript, and finally became JavaScript. The name "JavaScript" was chosen for marketing reasons (Java was popular then), but JavaScript and Java are completely different languages.\n\nThe language has grown tremendously. ES6 (released in 2015) was a huge update that added many modern features we use today.',
        points: [
          '1995 - Created in 10 days by Brendan Eich at Netscape',
          'ES5 (2009) - Added strict mode and better JSON support',
          'ES6/ES2015 - Big update! Added arrow functions, classes, promises, let/const',
          'ES2016 onwards - Yearly updates with new features',
          'TypeScript - A version of JavaScript with type checking (like a safety net)',
        ],
      },
      {
        subtitle: 'JavaScript vs Other Languages',
        content: 'People often confuse JavaScript with other languages. Here\'s how it\'s different:',
        points: [
          'JavaScript ≠ Java - They are completely different! JavaScript runs in browsers, Java runs on servers/apps',
          'JavaScript is dynamically typed - You don\'t declare types, Java needs types (int, String, etc.)',
          'Python - Similar ease of use, both are beginner-friendly',
          'C++ - Much harder to learn, gives you more control but more complexity',
          'JavaScript advantage - Works in every browser, no installation needed',
        ],
      },
      {
        subtitle: 'How JavaScript Runs',
        content:
          'When you write JavaScript code, it goes through several steps before it actually runs:\n\n1. **Parsing** - The JavaScript engine reads your code like reading a book\n2. **Compilation** - It converts your code into machine language (0s and 1s)\n3. **Execution** - The computer actually runs the instructions\n\nThe most popular JavaScript engine is V8, created by Google. It powers Chrome browser and Node.js.',
      },
      {
        subtitle: 'Your First JavaScript Code',
        code: `// Browser Console Example
console.log('Hello, JavaScript!');

// This simple line goes through:
// 1. Parsing (reading the code)
// 2. Compilation (converting to machine code)
// 3. Execution (running the code)
// 4. Output: "Hello, JavaScript!"

// Try this in your browser console (F12)
alert('Welcome to JavaScript!'); // Shows a popup
console.log(2 + 2); // Shows 4 in the console`,
        example:
          'Real-world use: When you visit Facebook, JavaScript updates your news feed without refreshing the page, validates your login form as you type, shows notifications in real-time, and makes everything interactive. Without JavaScript, websites would just be static pages like a printed magazine!',
      },
    ],
  },

  'js-basics': {
    title: 'JavaScript Basics',
    phase: '1',
    sections: [
      {
        subtitle: 'Variables: var, let, const',
        content:
          'Variables are like labeled boxes where you store information. Just like you might have a box labeled "toys" or "books", in JavaScript you have variables with names that hold data.\n\nJavaScript has three ways to create variables:\n• **var** - The old way (avoid using it)\n• **let** - Modern way, value can change\n• **const** - Modern way, value cannot change (constant)',
        code: `// var - function scoped, can be redeclared (old, avoid this)
var name = 'John';
var name = 'Jane'; // OK but confusing!

// let - block scoped, cannot be redeclared (RECOMMENDED)
let age = 25;
age = 26; // OK - you can change it
// let age = 27; // Error! Can't redeclare

// const - block scoped, cannot be reassigned (RECOMMENDED)
const PI = 3.14159;
// PI = 3.14; // Error! Constants can't change

// Important: const objects/arrays can have their contents changed
const user = { name: 'Alice' };
user.name = 'Bob'; // OK - changing property
user.age = 30; // OK - adding property
// user = {}; // Error - can't reassign the whole object`,
        example:
          'In real apps: Use const by default. Only use let when you know the value will change (like a counter). Never use var in modern JavaScript.',
      },
      {
        subtitle: 'Naming Conventions',
        points: [
          'Use camelCase: firstName, lastName, userAge',
          'Constants in UPPERCASE: MAX_SIZE, API_KEY',
          'Must start with letter, $, or _',
          'Cannot use reserved keywords: let, class, function',
          'Be descriptive: use "userName" not "un"',
        ],
      },
      {
        subtitle: 'Data Types',
        content: 'JavaScript has different types of data, just like in real life we have different types of things (numbers, words, yes/no answers).\n\n**Primitive Types** (Simple, basic values):\n• String - Text like "hello"\n• Number - Numbers like 42 or 3.14\n• Boolean - true or false\n• undefined - Variable exists but has no value\n• null - Intentionally empty\n• BigInt - Really huge numbers\n• Symbol - Unique identifiers\n\n**Non-Primitive** (Complex, can hold multiple values):\n• Object - Collections of key-value pairs\n• Array - Ordered lists\n• Function - Reusable code blocks',
        code: `// Primitive Types (simple values)
let str = 'Hello';           // String - text in quotes
let num = 42;                // Number - any number
let bigNum = 123n;           // BigInt - huge numbers (notice the 'n')
let isActive = true;         // Boolean - true or false only
let notDefined;              // undefined - no value assigned yet
let empty = null;            // null - intentionally empty
let sym = Symbol('id');      // Symbol - unique identifier

// Non-Primitive (complex values)
let person = {               // Object - stores related data
  name: 'John',
  age: 30,
  isStudent: false
};
let colors = ['red', 'blue', 'green']; // Array - ordered list
let greet = function() {     // Function - reusable code
  console.log('Hi!');
};`,
        example:
          'Think of primitives like atoms (can\'t be broken down) and objects like molecules (made of multiple atoms). A person object might contain name (string), age (number), and isStudent (boolean).',
      },
      {
        subtitle: 'typeof Operator',
        code: `console.log(typeof 'hello');      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug in JS!)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"`,
      },
      {
        subtitle: 'Type Conversion & Coercion',
        code: `// Explicit Conversion (you do it)
let num = Number('123');      // 123
let str = String(456);        // "456"
let bool = Boolean(0);        // false

// Implicit Coercion (JavaScript does it)
console.log('5' + 3);         // "53" (number to string)
console.log('5' - 3);         // 2 (string to number)
console.log('5' * '2');       // 10 (both to numbers)
console.log(true + 1);        // 2 (true becomes 1)
console.log(false + 1);       // 1 (false becomes 0)`,
        example:
          'In a shopping cart, if a user enters "5" (string) in a quantity field, you need to convert it to a number before calculating the total: Number("5") * price',
      },
      {
        subtitle: 'Truthy & Falsy Values',
        code: `// Falsy values (become false in boolean context)
// false, 0, -0, 0n, "", null, undefined, NaN

if (0) {
  console.log('This will not run');
}

if ('Hello') {
  console.log('This will run!'); // non-empty string is truthy
}

// Common use case
let username = '';
if (username) {
  console.log(\`Welcome, \${username}\`);
} else {
  console.log('Please enter a username'); // This runs
}`,
        example:
          'When checking if a user is logged in: if (user) { showDashboard(); } - if user is null or undefined, it won\'t show the dashboard.',
      },
    ],
  },

  'operators': {
    title: 'Operators',
    phase: '1',
    sections: [
      {
        subtitle: 'What are Operators?',
        content:
          'Operators are symbols that tell JavaScript to perform specific operations on values. Think of them as the buttons on a calculator!\n\n**Types of Operators:**\n• **Arithmetic** - Math operations (+, -, *, /)\n• **Assignment** - Storing values (=, +=, -=)\n• **Comparison** - Comparing values (==, ===, >, <)\n• **Logical** - Combining conditions (&&, ||, !)\n• **Ternary** - Shortcut for if/else (?:)\n\nJust like in math class where + means "add" and - means "subtract", JavaScript operators tell the computer what to do with your data.',
      },
      {
        subtitle: 'Arithmetic Operators (Math)',
        content: 'These operators perform mathematical calculations, just like a calculator.',
        code: `let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation - 10³)

// Increment & Decrement
let x = 5;
console.log(x++);    // 5 (post-increment: use then increase)
console.log(x);      // 6
console.log(++x);    // 7 (pre-increment: increase then use)`,
        example:
          'Calculating a restaurant bill tip: const tip = billAmount * 0.15; const total = billAmount + tip;',
      },
      {
        subtitle: 'Assignment Operators',
        code: `let num = 10;

num += 5;  // num = num + 5  → 15
num -= 3;  // num = num - 3  → 12
num *= 2;  // num = num * 2  → 24
num /= 4;  // num = num / 4  → 6
num %= 4;  // num = num % 4  → 2
num **= 3; // num = num ** 3 → 8`,
      },
      {
        subtitle: 'Comparison Operators',
        code: `// Equality
console.log(5 == '5');   // true  (loose equality - type coercion)
console.log(5 === '5');  // false (strict equality - no coercion)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true

// Relational
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// Best Practice: Always use === and !== to avoid bugs`,
        example:
          'Checking user age for access: if (userAge >= 18) { allowAccess(); } else { showAgeRestrictionMessage(); }',
      },
      {
        subtitle: 'Logical Operators',
        code: `// AND (&&) - all must be true
console.log(true && true);   // true
console.log(true && false);  // false

// OR (||) - at least one must be true
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - inverts boolean
console.log(!true);          // false
console.log(!false);         // true

// Real example
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log('Can drive');
}

// Short-circuit evaluation
let username = userInput || 'Guest'; // Use 'Guest' if userInput is falsy`,
        example:
          'Form validation: if (email && password && agreedToTerms) { submitForm(); } - all fields must be filled.',
      },
      {
        subtitle: 'Ternary Operator',
        code: `// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // "Yes"

// Instead of:
let status;
if (isLoggedIn) {
  status = 'Welcome back!';
} else {
  status = 'Please log in';
}

// Use:
let status = isLoggedIn ? 'Welcome back!' : 'Please log in';

// Nested ternary (avoid if too complex)
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';`,
        example:
          'Displaying user role: const badge = isAdmin ? "👑 Admin" : "👤 User";',
      },
      {
        subtitle: 'Operator Precedence',
        code: `// Higher precedence executes first
console.log(2 + 3 * 4);        // 14 (not 20)
console.log((2 + 3) * 4);      // 20 (parentheses first)

console.log(10 > 5 && 20 > 15); // true
console.log(true || false && false); // true (AND before OR)

// Common precedences (high to low):
// 1. Parentheses ()
// 2. Exponentiation **
// 3. Multiplication *, Division /, Modulus %
// 4. Addition +, Subtraction -
// 5. Comparison >, <, >=, <=
// 6. Equality ==, ===, !=, !==
// 7. Logical AND &&
// 8. Logical OR ||
// 9. Assignment =, +=, etc.`,
      },
    ],
  },

  'control-flow': {
    title: 'Control Flow',
    phase: '1',
    sections: [
      {
        subtitle: 'What is Control Flow?',
        content:
          'Control Flow is like a GPS for your code - it determines which path your program takes!\n\nImagine you\'re driving:\n• **if/else** - "If road is closed, take detour, else continue straight"\n• **switch** - "At roundabout, take 1st, 2nd, or 3rd exit based on destination"\n• **loops** - "Keep driving until you reach your destination"\n\n**Without control flow:** Code runs line by line, top to bottom (boring!)\n**With control flow:** Code can make decisions, repeat tasks, and skip sections (powerful!)\n\nControl flow makes your programs smart - they can respond differently based on conditions.',
      },
      {
        subtitle: 'if, else if, else (Making Decisions)',
        content:
          'The if statement lets your code make decisions, like choosing what to wear based on the weather.\n\n**How it works:**\n1. Check a condition (is it true or false?)\n2. If true → run this code block\n3. If false → check next condition or run else block',
        code: `let temperature = 25;

if (temperature > 30) {
  console.log('It\\'s hot!');
} else if (temperature > 20) {
  console.log('It\\'s warm');
} else if (temperature > 10) {
  console.log('It\\'s cool');
} else {
  console.log('It\\'s cold');
}

// Only one block executes
// Checks from top to bottom, stops at first true condition`,
        example:
          'E-commerce discount: if (totalAmount > 1000) { discount = 20%; } else if (totalAmount > 500) { discount = 10%; }',
      },
      {
        subtitle: 'switch Statement',
        code: `let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Start of work week');
    break;
  case 'Friday':
    console.log('TGIF!');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend!');
    break;
  default:
    console.log('Midweek day');
}

// Without break, it "falls through" to next case
let grade = 'B';
switch (grade) {
  case 'A':
  case 'B':
    console.log('Great job!');
    break;
  case 'C':
    console.log('Good');
    break;
  default:
    console.log('Keep trying');
}`,
        example:
          'Payment method handling: switch(paymentType) { case "card": processCardPayment(); break; case "paypal": processPayPal(); break; }',
      },
      {
        subtitle: 'for Loop',
        code: `// Classic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Loop through array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of (modern way for arrays)
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in (for object properties)
let person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(key, person[key]); // name John, age 30
}`,
        example:
          'Generating a multiplication table: for (let i = 1; i <= 10; i++) { console.log(`5 x ${i} = ${5 * i}`); }',
      },
      {
        subtitle: 'while Loop',
        code: `// while - checks condition first
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Common use: user input validation
let password = '';
while (password.length < 8) {
  password = prompt('Enter password (min 8 chars):');
}

// Infinite loop (avoid!)
// while (true) {
//   console.log('This runs forever!');
// }`,
        example:
          'Game loop: while (playerHealth > 0 && enemyHealth > 0) { playTurn(); }',
      },
      {
        subtitle: 'do...while Loop',
        code: `// Executes at least once, then checks condition
let num = 0;

do {
  console.log(num);
  num++;
} while (num < 5); // 0, 1, 2, 3, 4

// Difference from while:
let x = 10;
do {
  console.log('Runs once'); // This executes even though x >= 10
} while (x < 5);

// while version wouldn't execute at all
while (x < 5) {
  console.log('Never runs');
}`,
        example:
          'Menu system: do { showMenu(); choice = getUserChoice(); processChoice(choice); } while (choice !== "exit");',
      },
      {
        subtitle: 'break & continue',
        code: `// break - exits loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4 (stops at 5)
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4 (skips 2)
}

// Real example: finding first match
let numbers = [1, 3, 5, 8, 9];
let firstEven;

for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break; // Found it, no need to continue
  }
}
console.log(firstEven); // 8`,
        example:
          'Search function: for (let product of products) { if (product.id === searchId) { return product; break; } }',
      },
    ],
  },

  'functions': {
    title: 'Functions',
    phase: '1',
    sections: [
      {
        subtitle: 'What are Functions?',
        content:
          'Functions are like recipes in cooking. Instead of writing the same code over and over, you write it once in a function and use it whenever needed.\n\nThink of a function as a machine: you put something in (input), it does some work, and gives you something back (output).\n\n**Why use functions?**\n• Avoid repeating code\n• Make code organized and easier to read\n• Easier to fix bugs (fix once, works everywhere)\n• Break big problems into smaller pieces',
      },
      {
        subtitle: 'Function Declaration',
        content: 'The traditional way to create functions. These can be called even before they\'re defined in your code (called "hoisting").',
        code: `// Basic function - like a recipe
function greet(name) {
  return 'Hello, ' + name;
}

console.log(greet('Alice')); // "Hello, Alice"
console.log(greet('Bob'));   // "Hello, Bob"

// Function with multiple inputs (parameters)
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// Function without return (just does something)
function logMessage(msg) {
  console.log(msg);
  // no return statement = returns undefined
}

// Can be called before it's written (hoisting)
sayHello(); // Works!
function sayHello() {
  console.log('Hello!');
}`,
        example:
          'Real example - E-commerce: function calculateTotal(price, quantity, taxRate) { const subtotal = price * quantity; const tax = subtotal * taxRate; return subtotal + tax; }',
      },
      {
        subtitle: 'Function Expression',
        code: `// Function stored in a variable (not hoisted)
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // 15

// Cannot be called before definition
// sayHi(); // Error!
const sayHi = function() {
  return 'Hi!';
};`,
      },
      {
        subtitle: 'Arrow Functions (Modern Way)',
        content:
          'Arrow functions are a shorter, modern way to write functions. They were introduced in ES6 (2015) and are now the most popular way to write functions.\n\n**Benefits:**\n• Shorter syntax\n• Cleaner code\n• Different "this" behavior (explained in advanced sections)',
        code: `// Traditional function
const square = (num) => {
  return num * num;
};
console.log(square(5)); // 25

// Super short - for one line
const square2 = num => num * num;
console.log(square2(5)); // 25

// Multiple parameters - need parentheses
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

// No parameters - need empty parentheses
const getRandom = () => Math.random();
console.log(getRandom()); // random number

// Returning an object - wrap in parentheses
const makePerson = (name, age) => ({ name: name, age: age });
// Even shorter with ES6 shorthand:
const makePerson2 = (name, age) => ({ name, age });

console.log(makePerson('John', 30)); 
// Output: {name: 'John', age: 30}`,
        example:
          'Real use - Doubling prices: const prices = [10, 20, 30]; const doubled = prices.map(price => price * 2); // [20, 40, 60]',
      },
      {
        subtitle: 'Parameters & Arguments',
        code: `// Parameters are variables in function definition
// Arguments are actual values passed when calling

function introduce(name, age, city) {
  // name, age, city are parameters
  return \`I'm \${name}, \${age} years old, from \${city}\`;
}

// 'John', 25, 'NYC' are arguments
console.log(introduce('John', 25, 'NYC'));

// Missing arguments become undefined
console.log(introduce('Jane', 28));
// "I'm Jane, 28 years old, from undefined"`,
      },
      {
        subtitle: 'Default Parameters',
        code: `// Old way
function greet(name) {
  name = name || 'Guest';
  return 'Hello, ' + name;
}

// Modern way (ES6+)
function greet2(name = 'Guest') {
  return \`Hello, \${name}\`;
}

console.log(greet2());        // "Hello, Guest"
console.log(greet2('Alice')); // "Hello, Alice"

// Multiple defaults
function createUser(name, role = 'user', active = true) {
  return { name, role, active };
}

console.log(createUser('Bob'));
// {name: 'Bob', role: 'user', active: true}`,
        example:
          'API request with defaults: function fetchData(url, method = "GET", timeout = 5000) { /* ... */ }',
      },
      {
        subtitle: 'Return Statement',
        code: `// Returns value and exits function
function getMax(a, b) {
  if (a > b) {
    return a;
  }
  return b; // This line won't run if a > b
}

// Multiple return points
function checkAge(age) {
  if (age < 0) return 'Invalid age';
  if (age < 18) return 'Minor';
  if (age < 65) return 'Adult';
  return 'Senior';
}

// No return = undefined
function doNothing() {
  let x = 5;
}
console.log(doNothing()); // undefined`,
        example:
          'Validation: function validateEmail(email) { if (!email.includes("@")) return false; return true; }',
      },
      {
        subtitle: 'Nested Functions & Closures Preview',
        code: `// Function inside function
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    return count;
  }
  
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Inner function has access to outer's variables
// This is a closure (covered in detail later)`,
        example:
          'Creating a private counter: const bankAccount = createAccount(); bankAccount.deposit(100); bankAccount.withdraw(50);',
      },
      {
        subtitle: 'Anonymous Functions',
        code: `// Function without a name
setTimeout(function() {
  console.log('Executed after 1 second');
}, 1000);

// Arrow function version
setTimeout(() => {
  console.log('This also works!');
}, 1000);

// As callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});

// Arrow version
const tripled = numbers.map(num => num * 3);`,
        example:
          'Event listener: button.addEventListener("click", function() { alert("Clicked!"); });',
      },
    ],
  },

  'execution-context': {
    title: 'Execution Context & Memory',
    phase: '2',
    sections: [
      {
        subtitle: 'What is Execution Context? (Simple Explanation)',
        content:
          'Execution Context is like a workspace where JavaScript does its work. Imagine you\'re cooking:\n\n**Your Kitchen = Execution Context**\n• **Ingredients** = Variables\n• **Recipe** = Your code\n• **Cooking tools** = Functions\n• **Kitchen counter** = Memory space\n\nEvery time you run JavaScript code, it creates a workspace (execution context) with:\n1. **Memory** - Where variables and functions are stored\n2. **Code** - The actual code to execute\n3. **this** - Reference to the current object\n\n**Types of Execution Contexts:**\n• **Global** - The main kitchen (created when page loads)\n• **Function** - A prep station (created when function runs)\n• **Eval** - Special context (rarely used)\n\nUnderstanding this helps you understand how JavaScript runs your code step by step!',
      },
      {
        subtitle: 'Global Execution Context',
        code: `// This code runs in Global Execution Context
let globalVar = 'I am global';

function sayHello() {
  console.log('Hello');
}

// Global Context has:
// 1. Memory for globalVar and sayHello
// 2. this points to window (in browser)
// 3. Only ONE global context exists`,
        example:
          'When your HTML file loads, everything at the top level (not inside functions) runs in the global context.',
      },
      {
        subtitle: 'Function Execution Context',
        code: `function multiply(a, b) {
  let result = a * b;
  return result;
}

multiply(5, 3);

// When multiply() is called:
// 1. New Function Execution Context is created
// 2. Parameters a, b get values 5, 3
// 3. Memory allocated for 'result'
// 4. Code executes
// 5. Context is destroyed after return`,
      },
      {
        subtitle: 'The Call Stack',
        code: `function first() {
  console.log('First function');
  second();
  console.log('First function again');
}

function second() {
  console.log('Second function');
  third();
}

function third() {
  console.log('Third function');
}

first();

// Call Stack visualization:
// Step 1: [Global]
// Step 2: [Global, first]
// Step 3: [Global, first, second]
// Step 4: [Global, first, second, third]
// Step 5: [Global, first, second] (third removed)
// Step 6: [Global, first] (second removed)
// Step 7: [Global] (first removed)

// Output:
// First function
// Second function
// Third function
// First function again`,
        example:
          'When you call function A, which calls function B, which calls function C - they stack up. C finishes first, then B, then A (Last In, First Out).',
      },
      {
        subtitle: 'Memory Creation & Execution Phases',
        code: `// Code example:
var x = 10;
function square(num) {
  var result = num * num;
  return result;
}
var squared = square(x);

// PHASE 1: Memory Creation
// - x: undefined
// - square: function code
// - squared: undefined

// PHASE 2: Execution
// - x = 10
// - square stays as function
// - square(x) is called:
//   - New context created
//   - Memory: num = undefined, result = undefined
//   - Execution: num = 10, result = 100
//   - Return 100
// - squared = 100`,
      },
      {
        subtitle: 'How JavaScript Code Runs',
        code: `let name = 'Alice';

function greet() {
  let message = 'Hello';
  console.log(message + ' ' + name);
}

greet();

// Step-by-step execution:
// 1. Global Execution Context created
// 2. Memory phase: name = undefined, greet = function
// 3. Execution phase: name = 'Alice'
// 4. greet() called → New Function Context
// 5. Memory: message = undefined
// 6. Execution: message = 'Hello'
// 7. Logs: "Hello Alice"
// 8. Function context destroyed
// 9. Back to global context`,
        example:
          'Understanding this helps you debug: if you get "undefined", the variable might be accessed before it is assigned in the execution phase.',
      },
    ],
  },

  'scope-hoisting': {
    title: 'Scope & Hoisting',
    phase: '2',
    sections: [
      {
        subtitle: 'What is Scope? (Simple Explanation)',
        content:
          'Scope is like the visibility rules for variables - it determines where in your code you can access a variable.\n\nThink of it like rooms in a house:\n\n**🏠 Global Scope (Living Room)**\n• Everyone in the house can access it\n• Variables declared outside any function\n\n**🚪 Function Scope (Bedroom)**\n• Only people in that room can access it\n• Variables declared with var, let, or const inside functions\n\n**📦 Block Scope (Closet in bedroom)**\n• Only accessible inside that block { }\n• Variables declared with let or const in if, for, while blocks\n\n**Why does this matter?**\n• Prevents variable naming conflicts\n• Protects data (encapsulation)\n• Helps avoid bugs\n• Makes code more organized',
      },
      {
        subtitle: 'Global Scope (Accessible Everywhere)',
        content: 'Variables declared outside any function or block. They can be accessed from anywhere in your code.',
        code: `// Variables declared outside functions
let globalVar = 'Accessible everywhere';

function showGlobal() {
  console.log(globalVar); // Can access
}

if (true) {
  console.log(globalVar); // Can access
}

showGlobal(); // "Accessible everywhere"

// Warning: Global variables can be modified anywhere
globalVar = 'Changed!';`,
        example:
          'Global variables: const API_URL = "https://api.example.com"; - can be used in any function.',
      },
      {
        subtitle: 'Function Scope',
        code: `function myFunction() {
  var functionVar = 'Only inside function';
  let alsoFunctionScoped = 'Same here';
  
  console.log(functionVar); // Works
}

myFunction();
// console.log(functionVar); // Error! Not accessible outside

// Parameters are also function-scoped
function greet(name) {
  console.log(name); // OK
}
// console.log(name); // Error!`,
        example:
          'Function variables are private: function processPayment() { let cardNumber = "..."; } - cardNumber cannot be accessed outside.',
      },
      {
        subtitle: 'Block Scope',
        code: `// let and const are block-scoped
if (true) {
  let blockVar = 'Only in this block';
  const alsoBlock = 'Me too';
  console.log(blockVar); // Works
}
// console.log(blockVar); // Error!

// var is NOT block-scoped
if (true) {
  var notBlock = 'I leak out!';
}
console.log(notBlock); // "I leak out!" (works!)

// for loop example
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Logs: 0, 1, 2

for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}
// Logs: 3, 3, 3 (var is not block-scoped!)`,
        example:
          'Using let in loops: for (let i = 0; i < items.length; i++) { ... } - i is only accessible inside the loop.',
      },
      {
        subtitle: 'Scope Chain',
        code: `let global = 'global';

function outer() {
  let outerVar = 'outer';
  
  function inner() {
    let innerVar = 'inner';
    
    // Can access all three
    console.log(innerVar);  // "inner"
    console.log(outerVar);  // "outer"
    console.log(global);    // "global"
  }
  
  inner();
  // console.log(innerVar); // Error! Can't access inner's variables
}

outer();

// Lookup order: inner → outer → global
// If not found, ReferenceError`,
        example:
          'Nested functions in React: component → useEffect → event handler - inner can access outer variables.',
      },
      {
        subtitle: 'Hoisting',
        code: `// Function declarations are hoisted
sayHello(); // Works!

function sayHello() {
  console.log('Hello!');
}

// var is hoisted but initialized as undefined
console.log(x); // undefined (not error!)
var x = 5;
console.log(x); // 5

// Equivalent to:
// var x;
// console.log(x);
// x = 5;

// let and const are hoisted but in "Temporal Dead Zone"
// console.log(y); // ReferenceError!
let y = 10;`,
      },
      {
        subtitle: 'Hoisting: let, const, function',
        code: `// Function declarations - fully hoisted
greet(); // "Hello" - works!
function greet() {
  console.log('Hello');
}

// Function expressions - not hoisted
// sayHi(); // Error!
const sayHi = function() {
  console.log('Hi');
};

// var hoisting
console.log(a); // undefined
var a = 1;

// let/const hoisting - Temporal Dead Zone
// console.log(b); // ReferenceError!
let b = 2;

// console.log(c); // ReferenceError!
const c = 3;`,
        example:
          'Why use let/const: They prevent bugs from using variables before declaration. var lets you access before definition (gives undefined).',
      },
      {
        subtitle: 'Temporal Dead Zone (TDZ)',
        code: `// TDZ = Time between entering scope and declaration

{
  // TDZ starts for 'x'
  // console.log(x); // ReferenceError
  // Still in TDZ
  let x = 5; // TDZ ends
  console.log(x); // 5 - OK
}

// Why TDZ exists:
// Prevents using variables before initialization
// Catches errors early

// Example with function parameter
function test(x = y, y = 2) {
  // Error! y is in TDZ when x is evaluated
}

function testCorrect(y = 2, x = y) {
  // OK! y is defined before x uses it
  console.log(x, y); // 2, 2
}`,
        example:
          'TDZ catches bugs: if (condition) { console.log(data); let data = fetchData(); } - Error! Must declare before use.',
      },
    ],
  },

  'this-keyword': {
    title: 'this Keyword',
    phase: '2',
    sections: [
      {
        subtitle: 'What is "this"?',
        content:
          'The "this" keyword refers to the object that is executing the current function. Its value depends on HOW a function is called, not where it is defined.',
      },
      {
        subtitle: 'this in Global Scope',
        code: `console.log(this); // Window object (in browser)

function showThis() {
  console.log(this); // Window object (non-strict mode)
}

showThis();

// In strict mode:
'use strict';
function showThisStrict() {
  console.log(this); // undefined
}`,
      },
      {
        subtitle: 'this in Object Methods',
        code: `const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(this); // person object
    console.log(\`Hi, I'm \${this.name}\`);
  }
};

person.greet(); // "Hi, I'm Alice"

// Problem: losing context
const greetFunc = person.greet;
greetFunc(); // this = undefined (strict) or Window`,
        example:
          'Button click: const button = { text: "Click me", click() { alert(this.text); } }; button.click(); - this refers to button object.',
      },
      {
        subtitle: 'this in Arrow Functions',
        code: `const person = {
  name: 'Bob',
  regularFunc: function() {
    console.log(this.name); // "Bob"
  },
  arrowFunc: () => {
    console.log(this.name); // undefined (this = Window/global)
  },
  nested: function() {
    const inner = () => {
      console.log(this.name); // "Bob" (inherits from nested)
    };
    inner();
  }
};

person.regularFunc(); // "Bob"
person.arrowFunc();   // undefined
person.nested();      // "Bob"

// Arrow functions don't have their own 'this'
// They inherit from parent scope`,
        example:
          'React class component: setTimeout(() => { this.setState(...); }, 1000); - arrow function keeps component this.',
      },
      {
        subtitle: 'this in Event Handlers',
        code: `// HTML: <button id="btn">Click me</button>

const button = document.getElementById('btn');

// Regular function - this = button element
button.addEventListener('click', function() {
  console.log(this); // <button> element
  this.style.background = 'red';
});

// Arrow function - this = Window (or parent scope)
button.addEventListener('click', () => {
  console.log(this); // Window (not button!)
  // this.style.background = 'red'; // Error!
});

// Solution: use event parameter
button.addEventListener('click', (e) => {
  e.target.style.background = 'blue';
});`,
        example:
          'Form submission: form.addEventListener("submit", function(e) { e.preventDefault(); console.log(this.elements.email.value); });',
      },
      {
        subtitle: 'Interview Edge Cases',
        code: `// Case 1: Nested functions
const obj = {
  value: 10,
  method: function() {
    function inner() {
      console.log(this.value); // undefined!
    }
    inner();
  }
};
obj.method();

// Case 2: setTimeout
const obj2 = {
  value: 20,
  method: function() {
    setTimeout(function() {
      console.log(this.value); // undefined
    }, 100);
  }
};
obj2.method();

// Solution: Arrow function or bind
const obj3 = {
  value: 30,
  method: function() {
    setTimeout(() => {
      console.log(this.value); // 30
    }, 100);
  }
};
obj3.method();

// Case 3: Method extracted
const person = {
  name: 'Charlie',
  greet() { return \`Hi, \${this.name}\`; }
};

const greetFn = person.greet;
console.log(greetFn()); // "Hi, undefined"

// Solution:
const greetBound = person.greet.bind(person);
console.log(greetBound()); // "Hi, Charlie"`,
        example:
          'Common React mistake: <button onClick={this.handleClick}>Click</button> - need to bind or use arrow function in class component.',
      },
    ],
  },

  'closures': {
    title: 'Closures',
    phase: '2',
    sections: [
      {
        subtitle: 'What is a Closure? (Simple Explanation)',
        content:
          'A closure is like a backpack that a function carries around. This backpack contains all the variables that were available when the function was created.\n\nEven if the function is used somewhere else later, it still has access to everything in its backpack!\n\n**Think of it like this:**\nImagine you pack a lunch box (variables) in the morning. Later at school (different scope), you can still open that lunch box and eat what you packed. The lunch box "closed" around your food and kept it safe.\n\n**In simple terms:** A closure lets a function remember and access variables from where it was created, even after that place is gone.',
      },
      {
        subtitle: 'Simple Closure Example',
        content:
          'Let\'s see a closure in action. The inner function "closes over" the outer variable, keeping it alive even after the outer function is done.',
        code: `function outer() {
  let outerVar = 'I am outside';  // This variable is in outer function
  
  function inner() {
    console.log(outerVar);  // Inner can "see" outerVar
  }
  
  return inner;  // Return the inner function
}

const myFunc = outer();  // outer() runs and finishes
myFunc();  // "I am outside"

// MAGIC! Even though outer() finished and is gone,
// inner() still remembers outerVar!
// This is a CLOSURE - inner "closed over" outerVar

// Think of it as:
// outer() gave inner() a backpack with outerVar inside
// Even when outer() is gone, inner() still has that backpack`,
      },
      {
        subtitle: 'Classic Closure Example',
        code: `function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1

// count is private, cannot access directly
// console.log(counter.count); // undefined`,
        example:
          'Private variables in modules: const calculator = createCalculator(); calculator.add(5); - internal state is protected.',
      },
      {
        subtitle: 'Practical Use Cases',
        code: `// 1. Data Privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return 'Insufficient funds';
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);  // 1500
account.withdraw(200); // 1300
// Cannot access balance directly!

// 2. Function Factories
function createGreeting(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeting('Hello');
const sayHola = createGreeting('Hola');

console.log(sayHello('Alice')); // "Hello, Alice!"
console.log(sayHola('Bob'));    // "Hola, Bob!"`,
        example:
          'Creating specialized functions: const taxCalculator = createTaxCalculator(0.15); taxCalculator(100); // 115',
      },
      {
        subtitle: 'Closures in Loops (Interview Favorite)',
        code: `// Problem: var is not block-scoped
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3 (NOT 0, 1, 2!)
  }, 1000);
}

// Solution 1: Use let (block-scoped)
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2
  }, 1000);
}

// Solution 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 0, 1, 2
    }, 1000);
  })(i);
}

// Solution 3: Pass parameter to setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(function(j) {
    console.log(j); // 0, 1, 2
  }, 1000, i);
}`,
        example:
          'Adding event listeners in a loop: buttons.forEach((btn, i) => { btn.addEventListener("click", () => console.log(i)); });',
      },
      {
        subtitle: 'Memory Implications',
        code: `// Closures keep references to outer variables
// Can cause memory leaks if not careful

function heavyOperation() {
  const bigArray = new Array(1000000).fill('data');
  
  return function() {
    // As long as this function exists,
    // bigArray stays in memory!
    console.log(bigArray[0]);
  };
}

const fn = heavyOperation();
// bigArray is still in memory

// Solution: Remove reference when done
fn = null; // Now bigArray can be garbage collected

// Good practice: only close over what you need
function betterOperation() {
  const bigArray = new Array(1000000).fill('data');
  const firstElement = bigArray[0];
  
  return function() {
    console.log(firstElement); // Only keeps firstElement
  };
}`,
        example:
          'Event listeners: Always remove listeners when component unmounts to avoid memory leaks: button.removeEventListener("click", handler);',
      },
      {
        subtitle: 'Common Interview Questions',
        code: `// Q: What will this output?
function createFunctions() {
  const arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      return i;
    });
  }
  return arr;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3
// All return 3 because they share same 'i'

// Q: Fix it to return 0, 1, 2
function createFunctionsFix() {
  const arr = [];
  for (let i = 0; i < 3; i++) { // Use let
    arr.push(function() {
      return i;
    });
  }
  return arr;
}`,
      },
    ],
  },

  'call-apply-bind': {
    title: 'Call, Apply, Bind',
    phase: '2',
    sections: [
      {
        subtitle: 'Function Borrowing',
        content:
          'call(), apply(), and bind() are methods that allow you to set the value of "this" explicitly and borrow methods from other objects.',
      },
      {
        subtitle: 'call() Method',
        code: `const person1 = {
  name: 'Alice',
  greet: function(greeting, punctuation) {
    return \`\${greeting}, I'm \${this.name}\${punctuation}\`;
  }
};

const person2 = {
  name: 'Bob'
};

// Normal call
console.log(person1.greet('Hello', '!')); 
// "Hello, I'm Alice!"

// Using call() to borrow method
console.log(person1.greet.call(person2, 'Hi', '.'));
// "Hi, I'm Bob."

// Syntax: func.call(thisArg, arg1, arg2, ...)`,
        example:
          'Array method on array-like: Array.prototype.slice.call(arguments) - borrow slice for array-like objects.',
      },
      {
        subtitle: 'apply() Method',
        code: `const person = {
  name: 'Charlie',
  introduce: function(age, city) {
    return \`I'm \${this.name}, \${age} years old, from \${city}\`;
  }
};

const anotherPerson = { name: 'Diana' };

// apply takes array of arguments
console.log(person.introduce.apply(anotherPerson, [25, 'NYC']));
// "I'm Diana, 25 years old, from NYC"

// vs call (takes separate arguments)
console.log(person.introduce.call(anotherPerson, 25, 'NYC'));

// Useful with Math functions
const numbers = [5, 2, 8, 1, 9];
console.log(Math.max.apply(null, numbers)); // 9

// Modern alternative (spread operator)
console.log(Math.max(...numbers)); // 9`,
        example:
          'Merging arrays: Array.prototype.push.apply(arr1, arr2) - or use arr1.push(...arr2) in modern JS.',
      },
      {
        subtitle: 'bind() Method',
        code: `const person = {
  name: 'Eve',
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// bind() returns a NEW function with 'this' bound
const greetEve = person.greet.bind(person);

console.log(greetEve()); // "Hello, I'm Eve"

// Use case: callbacks
setTimeout(person.greet, 1000); 
// "Hello, I'm undefined" - loses context!

setTimeout(person.greet.bind(person), 1000);
// "Hello, I'm Eve" - context preserved!

// Partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5)); // 10 (2 * 5)
console.log(double(3)); // 6  (2 * 3)`,
        example:
          'React class components: <button onClick={this.handleClick.bind(this)}>Click</button> - bind this to component.',
      },
      {
        subtitle: 'Comparison: call vs apply vs bind',
        code: `const obj = { value: 42 };

function showValue(a, b) {
  console.log(this.value, a, b);
}

// call - executes immediately, args separate
showValue.call(obj, 1, 2); // 42 1 2

// apply - executes immediately, args as array
showValue.apply(obj, [1, 2]); // 42 1 2

// bind - returns new function, doesn't execute
const boundFunc = showValue.bind(obj, 1, 2);
boundFunc(); // 42 1 2

// When to use which:
// call: When you know arguments in advance
// apply: When arguments are in an array
// bind: When you need function for later (callbacks)`,
      },
      {
        subtitle: 'Polyfill Understanding',
        code: `// Simple bind polyfill (not production-ready)
if (!Function.prototype.bind) {
  Function.prototype.bind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}

// Simple call polyfill
if (!Function.prototype.call) {
  Function.prototype.call = function(context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
  };
}

// How it works:
const person = { name: 'Frank' };
function greet() {
  return \`Hi, \${this.name}\`;
}

// greet.call(person) internally does:
// person.greet = greet;
// person.greet();
// delete person.greet;`,
        example:
          'Understanding polyfills helps in interviews: "Implement your own bind() function" - common question.',
      },
      {
        subtitle: 'Real-World Examples',
        code: `// 1. Event handlers
class Button {
  constructor(label) {
    this.label = label;
  }
  
  handleClick() {
    console.log(\`Button "\${this.label}" clicked\`);
  }
  
  render() {
    const btn = document.createElement('button');
    btn.textContent = this.label;
    btn.addEventListener('click', this.handleClick.bind(this));
    return btn;
  }
}

// 2. Borrowing array methods
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

const arr = Array.prototype.slice.call(arrayLike);
console.log(arr); // ['a', 'b', 'c']

// 3. Function currying
function log(level, message) {
  console.log(\`[\${level}] \${message}\`);
}

const logError = log.bind(null, 'ERROR');
const logInfo = log.bind(null, 'INFO');

logError('Something went wrong'); // [ERROR] Something went wrong
logInfo('Process completed');      // [INFO] Process completed`,
        example:
          'Logging utility: const logger = console.log.bind(console, "[APP]"); logger("Started"); // [APP] Started',
      },
    ],
  },

  // Continue with remaining topics...
  // Due to length, I'll add a few more key topics

  'objects': {
    title: 'Objects in JavaScript',
    phase: '3',
    sections: [
    {
      subtitle: 'What are Objects? (Simple Explanation)',
      content:
        'Objects are like containers that hold related information together. Think of a person - they have a name, age, address, etc. Instead of storing these in separate variables, we group them in an object!\n\n**Real-World Analogy:**\nImagine a contact card in your phone:\n• Name: "John Doe"\n• Phone: "555-1234"\n• Email: "john@example.com"\n\nIn JavaScript, this becomes an object with properties!\n\n**Why Use Objects?**\n• Group related data together\n• Easier to organize and manage\n• Can have methods (functions that belong to the object)\n• Represent real-world things in code\n\n**Everything in JavaScript is an object** (except primitives like numbers, strings, booleans). Even arrays and functions are special types of objects!',
    },
    {
      subtitle: 'Creating Objects (Different Ways)',
      content: 'JavaScript gives you multiple ways to create objects. Object literal syntax is the most common and easiest.',
      code: `// 1. Object literal (most common)
const person = {
  name: 'John',
  age: 30,
  city: 'NYC'
};

// 2. new Object()
const person2 = new Object();
person2.name = 'Jane';
person2.age = 25;

// 3. Object.create()
const proto = { species: 'Human' };
const person3 = Object.create(proto);
person3.name = 'Alice';

// 4. Constructor function (covered later)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person4 = new Person('Bob', 35);`,
    },
    {
      subtitle: 'Properties & Methods',
      code: `const car = {
  // Properties (data)
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  
  // Methods (functions)
  start: function() {
    return 'Engine started';
  },
  
  // Shorthand method syntax (ES6)
  stop() {
    return 'Engine stopped';
  },
  
  // Method accessing properties
  getInfo() {
    return \`\${this.brand} \${this.model} (\${this.year})\`;
  }
};

console.log(car.brand);      // "Toyota"
console.log(car.start());    // "Engine started"
console.log(car.getInfo());  // "Toyota Camry (2022)"`,
      example:
        'User profile: const user = { name: "John", avatar: "...", updateProfile() { ... } };',
    },
    {
      subtitle: 'Dot vs Bracket Notation',
      code: `const user = {
  name: 'Alice',
  age: 28,
  'favorite-color': 'blue', // Property with hyphen
  email: 'alice@example.com'
};

// Dot notation (preferred when possible)
console.log(user.name);  // "Alice"
user.age = 29;

// Bracket notation (required for special cases)
console.log(user['favorite-color']); // "blue"

// Dynamic property access
const prop = 'email';
console.log(user[prop]); // "alice@example.com"

// Computed property names
const key = 'score';
const value = 100;
const game = {
  [key]: value,           // score: 100
  [\`\${key}_max\`]: 1000  // score_max: 1000
};`,
      example:
        'Form data: const field = "username"; formData[field] = input.value; - dynamic key access.',
    },
    {
      subtitle: 'Object Iteration',
      code: `const product = {
  name: 'Laptop',
  price: 999,
  stock: 50,
  category: 'Electronics'
};

// 1. for...in (iterates over keys)
for (let key in product) {
  console.log(\`\${key}: \${product[key]}\`);
}

// 2. Object.keys() - returns array of keys
const keys = Object.keys(product);
console.log(keys); // ['name', 'price', 'stock', 'category']

// 3. Object.values() - returns array of values
const values = Object.values(product);
console.log(values); // ['Laptop', 999, 50, 'Electronics']

// 4. Object.entries() - returns array of [key, value] pairs
const entries = Object.entries(product);
console.log(entries);
// [['name', 'Laptop'], ['price', 999], ...]

// Using with forEach
Object.entries(product).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});`,
      example:
        'Converting object to query string: const params = Object.entries(filters).map(([k,v]) => `${k}=${v}`).join("&");',
    },
    {
      subtitle: 'Object Destructuring',
      code: `const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'NYC',
    zip: '10001'
  }
};

// Basic destructuring
const { name, age } = user;
console.log(name); // "John"
console.log(age);  // 30

// Renaming variables
const { name: userName, email: userEmail } = user;

// Default values
const { phone = 'N/A' } = user;
console.log(phone); // "N/A"

// Nested destructuring
const { address: { city, zip } } = user;
console.log(city); // "NYC"

// Function parameters
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age}\`;
}
console.log(greet(user)); // "Hello John, you are 30"

// Rest operator
const { name: n, ...rest } = user;
console.log(rest); // { age: 30, email: '...', address: {...} }`,
      example:
        'React props: function UserCard({ name, avatar, bio }) { ... } - destructure in parameters.',
    },
  ],
},

  // Add async/await topic (very important)
  'async-await': {
    title: 'Async / Await',
    phase: '4',
    sections: [
    {
      subtitle: 'What is Async/Await? (Simple Explanation)',
      content:
        'Async/Await is a modern, cleaner way to work with Promises. Instead of writing .then().then().then(), you can write code that looks normal and easy to read!\n\n**Think of it like this:**\nPromises with .then() = Getting directions by following signs one by one\nAsync/Await = Having GPS that tells you each step clearly\n\n**Two keywords:**\n• **async** - Put before a function to make it asynchronous (returns a Promise)\n• **await** - Put before a Promise to wait for it to complete (can only use inside async functions)\n\nIntroduced in ES2017 (ES8), it\'s now the preferred way to handle async code!',
    },
    {
      subtitle: 'Basic Syntax',
      content:
        '**Step 1:** Add "async" before function\n**Step 2:** Use "await" before Promises inside the function\n**Result:** Code looks synchronous but runs asynchronously!',
      code: `// 1. Basic async function
// Any function with 'async' keyword automatically returns a Promise
async function greet() {
  return 'Hello';  // Automatically wrapped in Promise
}

greet().then(msg => console.log(msg)); // "Hello"

// 2. Using await to wait for Promises
async function fetchData() {
  // await pauses here until fetch completes
  const response = await fetch('https://api.example.com/data');
  
  // Then pauses here until json() completes
  const data = await response.json();
  
  return data;  // Returns the data
}

// COMPARE: Old way with .then() chains
function fetchDataOld() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => data);
}

// Async/await is much cleaner and easier to read!
// It reads like normal code, top to bottom`,
      example:
        'Real example: Loading user profile. Instead of .then().then(), you write: const user = await fetchUser(); const posts = await fetchPosts(user.id); Much clearer!',
    },
    {
      subtitle: 'Error Handling',
      code: `// Using try/catch
async function getUserData(id) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error('User not found');
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Without try/catch (handle in .catch())
async function getData() {
  const data = await fetch('/api/data');
  return data.json();
}

getData()
  .then(result => console.log(result))
  .catch(error => console.error(error));`,
      example:
        'Login function: async function login(email, password) { try { const response = await fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) }); if (response.ok) { return await response.json(); } } catch (e) { showError(e); } }',
    },
    {
      subtitle: 'Sequential vs Parallel Execution',
      code: `// Sequential (slow - waits for each)
async function sequential() {
  const user = await fetchUser();      // Wait 1s
  const posts = await fetchPosts();    // Wait 1s
  const comments = await fetchComments(); // Wait 1s
  return { user, posts, comments };
  // Total: 3 seconds
}

// Parallel (fast - all at once)
async function parallel() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  return { user, posts, comments };
  // Total: 1 second (all run together)
}

// Parallel with individual access
async function parallelIndividual() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  
  const user = await userPromise;
  const posts = await postsPromise;
  
  return { user, posts };
}`,
      example:
        'Loading dashboard: await Promise.all([loadUser(), loadStats(), loadNotifications()]) - load all data simultaneously.',
    },
    {
      subtitle: 'Best Practices',
      code: `// ✅ Good: Always handle errors
async function goodExample() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw if needed
  }
}

// ❌ Bad: Unhandled promise rejection
async function badExample() {
  const data = await fetchData(); // No error handling!
  return data;
}

// ✅ Good: Use Promise.all for parallel operations
async function loadPage() {
  const [user, settings, posts] = await Promise.all([
    fetchUser(),
    fetchSettings(),
    fetchPosts()
  ]);
  return { user, settings, posts };
}

// ❌ Bad: Sequential when not needed
async function loadPageSlow() {
  const user = await fetchUser();
  const settings = await fetchSettings();
  const posts = await fetchPosts();
  return { user, settings, posts };
}

// ✅ Good: Don't await if you don't need the result immediately
async function smartExample() {
  const promise1 = longOperation1();
  const promise2 = longOperation2();
  
  // Do other work here...
  
  const result1 = await promise1;
  const result2 = await promise2;
  
  return { result1, result2 };
}`,
      example:
        'API calls in React: useEffect(() => { async function load() { const data = await fetchData(); setData(data); } load(); }, []);',
    },
  ],
},

  // Add event loop (interview favorite)
  'event-loop': {
    title: 'Event Loop',
    phase: '4',
    sections: [
    {
      subtitle: 'Understanding the Event Loop (Simple Explanation)',
      content:
        'The Event Loop is like a restaurant manager who makes sure everything runs smoothly!\n\n**The Problem:** JavaScript can only do ONE thing at a time (single-threaded). But websites need to do many things at once - load images, handle clicks, fetch data, etc.\n\n**The Solution:** The Event Loop!\n\nThink of it like this:\n🍽️ **Call Stack** = Kitchen where chef cooks (current task being done)\n📋 **Callback Queue** = Orders waiting to be cooked (tasks waiting)\n👨‍💼 **Event Loop** = Manager who checks: "Is kitchen free? Get next order!"\n\n**How it works:**\n1. JavaScript executes code on the Call Stack\n2. When async task (setTimeout, fetch) is done, it goes to Queue\n3. Event Loop constantly checks: "Is Call Stack empty?"\n4. If yes, it moves task from Queue to Call Stack\n5. Repeat forever!\n\nThis is why JavaScript can handle multiple things even though it can only do one thing at a time!',
    },
    {
      subtitle: 'Call Stack',
      code: `console.log('1');

function first() {
  console.log('2');
  second();
  console.log('4');
}

function second() {
  console.log('3');
}

first();
console.log('5');

// Output: 1, 2, 3, 4, 5

// Call Stack visualization:
// [global]
// [global, first]
// [global, first, second]
// [global, first]
// [global]`,
    },
    {
      subtitle: 'Callback Queue & Microtask Queue',
      content:
        'Not all tasks are equal! JavaScript has TWO queues:\n\n**Microtask Queue** (VIP lane):\n• Promises (.then, .catch)\n• Gets priority!\n\n**Callback Queue** (Regular lane):\n• setTimeout, setInterval\n• DOM events (clicks, etc.)\n• Waits for microtasks first\n\n**Order of execution:**\n1. Run all code in Call Stack\n2. Run ALL microtasks (Promises)\n3. Run ONE callback (setTimeout, etc.)\n4. Repeat',
      code: `console.log('1'); // Synchronous - runs immediately

setTimeout(() => {
  console.log('2'); // Macrotask (goes to Callback Queue)
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Microtask (goes to Microtask Queue - PRIORITY!)
});

console.log('4'); // Synchronous

// Output: 1, 4, 3, 2

// Execution order:
// 1. Synchronous code (1, 4)
// 2. Microtasks (3)
// 3. Macrotasks (2)`,
      example:
        'Understanding order: fetch().then(data => console.log(data)); setTimeout(() => console.log("timeout"), 0); - fetch callback runs before setTimeout.',
    },
    {
      subtitle: 'Microtasks vs Macrotasks',
      code: `// Microtasks (higher priority):
// - Promise callbacks (.then, .catch, .finally)
// - queueMicrotask()
// - MutationObserver

// Macrotasks (lower priority):
// - setTimeout
// - setInterval
// - setImmediate (Node.js)
// - I/O operations

console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => console.log('Promise 3'));

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// Promise 3
// Timeout 1
// Timeout 2`,
    },
    {
      subtitle: 'Event Loop Flow',
      code: `// The Event Loop:
// 1. Execute all synchronous code (until call stack is empty)
// 2. Execute ALL microtasks (until microtask queue is empty)
// 3. Execute ONE macrotask
// 4. Execute ALL microtasks again
// 5. Repeat from step 3

console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('Promise 1');
  })
  .then(() => {
    console.log('Promise 2');
  });

console.log('Script end');

// Execution:
// 1. "Script start" (sync)
// 2. "Script end" (sync)
// 3. "Promise 1" (microtask)
// 4. "Promise 2" (microtask)
// 5. "setTimeout" (macrotask)`,
    },
    {
      subtitle: 'Complex Interview Question',
      code: `console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => console.log('3'));
}, 0);

Promise.resolve()
  .then(() => {
    console.log('4');
    setTimeout(() => console.log('5'), 0);
  })
  .then(() => console.log('6'));

console.log('7');

// Output: 1, 7, 4, 6, 2, 3, 5

// Step by step:
// Sync: 1, 7
// Microtasks: 4, 6
// Macrotask 1: 2
// Microtasks: 3
// Macrotask 2: 5`,
      example:
        'React rendering: setState() → microtask → DOM update → useEffect cleanup → useEffect callback',
    },
  ],
},

  // Add arrays deep dive
  'arrays': {
    title: 'Arrays (Deep Dive)',
    phase: '5',
    sections: [
    {
      subtitle: 'What are Arrays? (Simple Explanation)',
      content:
        'Arrays are ordered lists of values - like a shopping list or a playlist. Each item has a position (index) starting from 0.\n\n**Real-World Analogy:**\nThink of an array like a row of mailboxes:\n• Each mailbox has a number (index): 0, 1, 2, 3...\n• Each mailbox contains something (value)\n• They\'re in order, so you can find things easily\n\n**Why Use Arrays?**\n• Store multiple related values in one variable\n• Keep things in order\n• Loop through items easily\n• Use powerful methods (map, filter, reduce)\n\n**Array Power:**\nArrays have built-in methods that make working with lists SUPER easy. Instead of writing loops for everything, you can use methods like map() to transform data, filter() to find items, and reduce() to calculate totals!',
    },
    {
      subtitle: 'map() - Transform Each Item',
      content: 'map() creates a NEW array by transforming each element. Think of it as a factory assembly line - each item goes in, gets transformed, comes out new!',
      code: `const numbers = [1, 2, 3, 4, 5];

// map() creates a new array with transformed elements
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']

// map() with index
const withIndex = numbers.map((num, index) => ({
  value: num,
  index: index
}));`,
      example:
        'Rendering list in React: {users.map(user => <UserCard key={user.id} {...user} />)}',
    },
    {
      subtitle: 'filter()',
      code: `const numbers = [1, 2, 3, 4, 5, 6];

// filter() creates new array with elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]

const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true }
];

const available = products.filter(p => p.inStock);
const affordable = products.filter(p => p.price < 100);

// Combining conditions
const cheapAndAvailable = products.filter(
  p => p.price < 100 && p.inStock
);`,
      example:
        'Search: const results = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));',
    },
    {
      subtitle: 'reduce()',
      code: `const numbers = [1, 2, 3, 4, 5];

// reduce() reduces array to single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Shopping cart total
const cart = [
  { name: 'Item 1', price: 10, quantity: 2 },
  { name: 'Item 2', price: 15, quantity: 1 }
];
const total = cart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);
console.log(total); // 35`,
      example:
        'Calculating average: const avg = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;',
    },
    {
      subtitle: 'find() & findIndex()',
      code: `const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 }
];

// find() returns first element that matches
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob', age: 30 }

// Returns undefined if not found
const notFound = users.find(u => u.id === 99);
console.log(notFound); // undefined

// findIndex() returns index, or -1 if not found
const index = users.findIndex(u => u.name === 'Bob');
console.log(index); // 1`,
      example:
        'Finding selected item: const selected = items.find(item => item.id === selectedId);',
    },
    {
      subtitle: 'some() & every()',
      code: `const numbers = [1, 2, 3, 4, 5];

// some() - returns true if at least one element passes test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

// every() - returns true if ALL elements pass test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

// Form validation
const fields = [
  { name: 'email', value: 'test@test.com', valid: true },
  { name: 'password', value: '12345', valid: false }
];

const formValid = fields.every(field => field.valid);
console.log(formValid); // false

const hasErrors = fields.some(field => !field.valid);
console.log(hasErrors); // true`,
      example:
        'Checking permissions: const canAccess = user.roles.some(role => allowedRoles.includes(role));',
    },
    {
      subtitle: 'sort()',
      code: `// Numbers (ascending)
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9]

// Numbers (descending)
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 6, 5, 4, 3, 2, 1, 1]

// Strings (alphabetically)
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// Objects
const users = [
  { name: 'Charlie', age: 35 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));

// Note: sort() mutates the original array!
// To avoid mutation:
const sorted = [...numbers].sort((a, b) => a - b);`,
      example:
        'Sorting products: products.sort((a, b) => sortBy === "price" ? a.price - b.price : a.name.localeCompare(b.name));',
    },
  ],
},

// Add more essential topics...
// (For brevity, I'll add a few more key ones)

  'promises': {
    title: 'Promises',
    phase: '4',
    sections: [
    {
      subtitle: 'What is a Promise? (Simple Explanation)',
      content:
        'A Promise is like ordering a pizza:\n\n1. **Pending** - You ordered the pizza, waiting for it to arrive\n2. **Fulfilled** - Pizza arrived! Success! 🍕\n3. **Rejected** - Pizza shop called, they\'re closed. Failure! ❌\n\nIn JavaScript, a Promise represents something that will happen in the future. It might succeed (resolve) or fail (reject).\n\n**Why Promises?**\n• Better than callbacks (avoids "callback hell")\n• Easier to read and understand\n• Can chain multiple async operations\n• Better error handling',
    },
    {
      subtitle: 'Creating Promises',
      content:
        'To create a Promise, use the new Promise() constructor. It takes a function with two parameters: resolve (for success) and reject (for failure).',
      code: `// Basic Promise structure
const myPromise = new Promise((resolve, reject) => {
  // Do something asynchronous
  setTimeout(() => {
    const success = true;  // Imagine this is the result of an operation
    
    if (success) {
      resolve('Operation successful!');  // Success!
    } else {
      reject('Operation failed!');  // Failure!
    }
  }, 1000);
});

// Using the promise with .then() and .catch()
myPromise
  .then(result => {
    console.log(result);  // Runs if promise resolves
  })
  .catch(error => {
    console.error(error);  // Runs if promise rejects
  });

// Real example: Simulating fetching user data
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John Doe', email: 'john@example.com' });
      } else {
        reject('Invalid user ID');
      }
    }, 1000);
  });
}

fetchUser(1)
  .then(user => console.log(user))
  .catch(err => console.error(err));`,
      example:
        'Database query: return new Promise((resolve, reject) => { db.query(sql, (err, results) => { if (err) reject(err); else resolve(results); }); });',
    },
    {
      subtitle: 'Promise Chaining',
      code: `// Chaining .then() calls
fetch('https://api.example.com/user/1')
  .then(response => response.json())
  .then(user => {
    console.log(user);
    return fetch(\`https://api.example.com/posts?userId=\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error))
  .finally(() => console.log('Cleanup'));

// Each .then() receives the return value of previous
getUserById(1)
  .then(user => user.email)
  .then(email => sendEmail(email))
  .then(() => console.log('Email sent'))
  .catch(handleError);`,
    },
    {
      subtitle: 'Promise.all()',
      code: `// Wait for all promises to resolve
const promise1 = fetch('/api/user');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([userRes, postsRes, commentsRes]) => {
    return Promise.all([
      userRes.json(),
      postsRes.json(),
      commentsRes.json()
    ]);
  })
  .then(([user, posts, comments]) => {
    console.log({ user, posts, comments });
  })
  .catch(error => {
    // If ANY promise rejects, entire Promise.all rejects
    console.error('One of the requests failed:', error);
  });

// Shorter version
Promise.all([
  fetch('/api/user').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json())
]).then(([user, posts, comments]) => {
  console.log({ user, posts, comments });
});`,
      example:
        'Loading multiple resources: Promise.all([loadCSS(), loadJS(), loadImages()]).then(() => { showPage(); });',
    },
    {
      subtitle: 'Promise.race(), any(), allSettled()',
      code: `// Promise.race() - resolves/rejects with first completed promise
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 100));
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 500));

Promise.race([fast, slow])
  .then(result => console.log(result)); // "fast"

// Promise.any() - resolves with first fulfilled (ignores rejections)
const p1 = Promise.reject('Error 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('Success'), 100));
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3])
  .then(result => console.log(result)); // "Success"

// Promise.allSettled() - waits for all, never rejects
const promises = [
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success')
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Value:', result.value);
      } else {
        console.log('Reason:', result.reason);
      }
    });
  });`,
      example:
        'Timeout race: Promise.race([fetchData(), timeout(5000)]).then(data => { ... });',
    },
  ],
},

  'debounce-throttle': {
    title: 'Debouncing & Throttling',
    phase: '5',
    sections: [
    {
      subtitle: 'What is Debouncing?',
      content:
        'Debouncing delays execution until after a certain time has passed since the last call. Perfect for search boxes, resize events, etc.',
      code: `// Debounce implementation
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    // Clear previous timer
    clearTimeout(timeoutId);
    
    // Set new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: Search input
const searchInput = document.getElementById('search');

const performSearch = (query) => {
  console.log('Searching for:', query);
  // API call here
};

const debouncedSearch = debounce(performSearch, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});

// User types "hello"
// h -> timer starts (300ms)
// e -> timer reset (300ms)
// l -> timer reset (300ms)
// l -> timer reset (300ms)
// o -> timer reset (300ms)
// ... 300ms later -> performSearch("hello")`,
      example:
        'Auto-save: const debouncedSave = debounce(saveDocument, 1000); - saves 1 second after user stops typing.',
    },
    {
      subtitle: 'What is Throttling?',
      content:
        'Throttling limits execution to once per specified time period. Perfect for scroll events, button clicks, etc.',
      code: `// Throttle implementation
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Usage: Scroll event
const handleScroll = () => {
  console.log('Scroll position:', window.scrollY);
  // Update navbar, lazy load images, etc.
};

const throttledScroll = throttle(handleScroll, 100);

window.addEventListener('scroll', throttledScroll);

// User scrolls continuously
// Time 0ms: handleScroll() executes
// Time 50ms: ignored (in throttle)
// Time 100ms: ignored (in throttle)
// Time 101ms: handleScroll() executes
// Time 150ms: ignored (in throttle)
// ...`,
      example:
        'Button click prevention: const throttledSubmit = throttle(submitForm, 2000); - prevents double submission.',
    },
    {
      subtitle: 'Debounce vs Throttle',
      code: `// DEBOUNCE: Waits for pause in events
// Good for: Search, auto-save, window resize
const debouncedResize = debounce(() => {
  console.log('Window resized!');
}, 500);

window.addEventListener('resize', debouncedResize);

// THROTTLE: Ensures regular execution
// Good for: Scroll, mousemove, game loops
const throttledMouseMove = throttle((e) => {
  console.log('Mouse at:', e.clientX, e.clientY);
}, 100);

document.addEventListener('mousemove', throttledMouseMove);

// COMPARISON:
// Event fires: | | | | | | | | | | (10 times)
// Debounce:                       | (1 time - after pause)
// Throttle:    |     |     |     | (3 times - every interval)`,
    },
    {
      subtitle: 'Advanced: Debounce with Immediate',
      code: `function debounce(func, delay, immediate = false) {
  let timeoutId;
  
  return function(...args) {
    const callNow = immediate && !timeoutId;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, args);
      }
    }, delay);
    
    if (callNow) {
      func.apply(this, args);
    }
  };
}

// Execute immediately on first call, then debounce
const immediateDebounce = debounce(handleClick, 1000, true);

// First click: executes immediately
// Subsequent clicks within 1s: ignored
// After 1s: ready for next immediate execution`,
      example:
        'Form submission: const handleSubmit = debounce(submitForm, 300, true); - submit immediately, block rapid clicks.',
    },
  ],
},

// Continue adding remaining topics from all phases

  'prototypes': {
    title: 'Prototypes & Inheritance',
    phase: '3',
    sections: [
    {
      subtitle: 'What is a Prototype?',
      content:
        'Every JavaScript object has an internal property called [[Prototype]] (accessible via __proto__). Prototypes allow objects to inherit properties and methods from other objects.',
      code: `const person = {
  greet() {
    return 'Hello!';
  }
};

const john = Object.create(person);
john.name = 'John';

console.log(john.name);    // "John" (own property)
console.log(john.greet()); // "Hello!" (inherited from person)
console.log(john.__proto__ === person); // true`,
    },
    {
      subtitle: 'Prototype Chain',
      code: `const animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  }
};

const dog = Object.create(animal);
dog.barks = true;

const myDog = Object.create(dog);
myDog.name = 'Rex';

// Prototype chain: myDog -> dog -> animal -> Object.prototype -> null

console.log(myDog.name);   // "Rex" (own)
console.log(myDog.barks);  // true (from dog)
console.log(myDog.eats);   // true (from animal)
myDog.walk();              // "Animal walks" (from animal)

// Checking prototype chain
console.log(myDog.__proto__ === dog);           // true
console.log(dog.__proto__ === animal);          // true
console.log(animal.__proto__ === Object.prototype); // true`,
      example:
        'Array methods: [1,2,3].map(...) - map exists on Array.prototype, inherited by all arrays.',
    },
    {
      subtitle: 'Constructor Functions & Prototypes',
      code: `function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add methods to prototype (shared across all instances)
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

Person.prototype.species = 'Human';

const alice = new Person('Alice', 25);
const bob = new Person('Bob', 30);

console.log(alice.greet()); // "Hi, I'm Alice"
console.log(bob.greet());   // "Hi, I'm Bob"

// Both share the same method (memory efficient)
console.log(alice.greet === bob.greet); // true`,
      example:
        'Creating custom array methods: Array.prototype.last = function() { return this[this.length - 1]; }; [1,2,3].last(); // 3',
    },
  ],
},

  'constructors': {
    title: 'Constructor Functions',
    phase: '3',
    sections: [
    {
      subtitle: 'What are Constructor Functions?',
      content:
        'Constructor functions are regular functions used with the "new" keyword to create objects. Convention: capitalize first letter.',
      code: `function User(name, email) {
  this.name = name;
  this.email = email;
  this.isActive = true;
}

const user1 = new User('Alice', 'alice@example.com');
console.log(user1); // User { name: 'Alice', email: '...', isActive: true }

// Without 'new' - wrong way!
const user2 = User('Bob', 'bob@example.com'); // undefined`,
    },
    {
      subtitle: 'The "new" Keyword',
      code: `function Product(name, price) {
  this.name = name;
  this.price = price;
}

const laptop = new Product('Laptop', 999);

// What 'new' does:
// 1. Creates an empty object: {}
// 2. Sets 'this' to that object
// 3. Sets object's __proto__ to Product.prototype
// 4. Executes the constructor function
// 5. Returns the object`,
    },
  ],
},

  'es6-classes': {
    title: 'ES6 Classes',
    phase: '3',
    sections: [
    {
      subtitle: 'Class Syntax',
      code: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}

const alice = new Person('Alice', 25);
console.log(alice.greet()); // "Hello, I'm Alice"`,
    },
    {
      subtitle: 'Inheritance with extends',
      code: `class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Must call super first!
    this.breed = breed;
  }
  
  speak() {
    return \`\${this.name} barks\`;
  }
}

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());  // "Rex barks"`,
    },
  ],
},

  'oop-concepts': {
    title: 'OOP Concepts',
    phase: '3',
    sections: [
    {
      subtitle: 'Encapsulation',
      content:
        'Bundling data and methods together, hiding internal details.',
      code: `class BankAccount {
  #balance; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500`,
    },
  ],
},

  'sync-async': {
    title: 'Synchronous vs Asynchronous',
    phase: '4',
    sections: [
    {
      subtitle: 'Understanding Sync vs Async',
      content:
        '**Synchronous (Sync)** = Like waiting in line at a coffee shop. You wait for the person in front to finish before you order. Everything happens one at a time, in order.\n\n**Asynchronous (Async)** = Like ordering food at a restaurant. You place your order and sit down. While the chef cooks, you can talk, check your phone, etc. When food is ready, they bring it to you. You don\'t just sit there frozen waiting!\n\n**Why is this important?** Websites need to do things that take time (loading images, fetching data from servers, waiting for user clicks). If we used only sync code, the entire page would freeze while waiting!',
    },
    {
      subtitle: 'Synchronous Code',
      content:
        'Synchronous code runs line by line, top to bottom. Each line waits for the previous line to finish. This is the default behavior.',
      code: `console.log('First');
console.log('Second');
console.log('Third');

// Output (in order):
// First
// Second
// Third

// Each line waits for the previous one to finish
// Like standing in a queue - one person at a time`,
    },
    {
      subtitle: 'Asynchronous Code',
      content:
        'Asynchronous code doesn\'t wait! It starts a task and moves on. When the task finishes later, it runs a callback function.\n\nCommon async operations:\n• Fetching data from a server\n• Reading files\n• Timers (setTimeout, setInterval)\n• User interactions (clicks, keyboard)',
      code: `console.log('First');

setTimeout(() => {
  console.log('Second (after 1s)');
}, 1000);

console.log('Third');

// Output:
// First
// Third
// (1 second pause)
// Second (after 1s)

// setTimeout is async - doesn't wait!
// Code continues while timer runs in background`,
      example:
        'Real world: Loading a YouTube video. The page doesn\'t freeze while loading - you can scroll comments, read description, etc. When video loads, it starts playing. That\'s async!',
    },
  ],
},

  'callbacks': {
    title: 'Callbacks',
    phase: '4',
    sections: [
    {
      subtitle: 'What is a Callback?',
      content:
        'A function passed as an argument to another function, to be executed later.',
      code: `function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function afterGreeting() {
  console.log('Nice to meet you!');
}

greet('Alice', afterGreeting);`,
    },
    {
      subtitle: 'Callback Hell',
      code: `// ❌ Callback Hell (Pyramid of Doom)
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        console.log('Finally got likes:', likes);
      });
    });
  });
});

// ✅ Solution: Use Promises or async/await
async function getData() {
  const user = await getUser(userId);
  const posts = await getPosts(user.id);
  const comments = await getComments(posts[0].id);
  const likes = await getLikes(comments[0].id);
  console.log('Likes:', likes);
}`,
    },
  ],
},

  'strings': {
    title: 'Strings',
    phase: '5',
    sections: [
    {
      subtitle: 'String Methods',
      code: `const str = 'Hello, World!';

console.log(str.length); // 13
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.includes('World')); // true
console.log(str.slice(0, 5)); // "Hello"
console.log(str.replace('World', 'JavaScript')); // "Hello, JavaScript!"`,
    },
    {
      subtitle: 'Template Literals',
      code: `const name = 'Alice';
const age = 25;

const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line
const message = \`
  Dear \${name},
  You are \${age} years old.
\`;`,
      example:
        'HTML generation: const html = `<div class="${className}">${content}</div>`;',
    },
  ],
},

  'functional-programming': {
    title: 'Functional Programming',
    phase: '5',
    sections: [
    {
      subtitle: 'Pure Functions',
      content:
        'Functions that always return the same output for the same input and have no side effects.',
      code: `// ✅ Pure function
function add(a, b) {
  return a + b;
}

// ❌ Impure function (side effect)
let count = 0;
function increment() {
  count++; // Modifies external variable
  return count;
}`,
    },
    {
      subtitle: 'Higher-Order Functions',
      code: `function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10`,
    },
  ],
},

  // Phase 6: DOM & Browser
  'dom-basics': {
    title: 'DOM Basics',
    phase: '6',
    sections: [
    {
      subtitle: 'What is the DOM? (Simple Explanation)',
      content:
        'The DOM (Document Object Model) is like a family tree of your webpage. Every element in your HTML becomes an object that JavaScript can talk to and change.\n\n**Think of it like this:**\nYour HTML is a house blueprint. The DOM is the actual house that gets built. JavaScript can then rearrange furniture (elements), paint walls (change styles), add rooms (create elements), etc.\n\n**The DOM is a tree structure:**\n```\nDocument\n  └── html\n      ├── head\n      │   └── title\n      └── body\n          ├── div (id="header")\n          │   └── h1\n          └── div (class="content")\n              └── p\n```\n\nEach box (element) is called a **node**. JavaScript can access, modify, add, or remove any node!',
    },
    {
      subtitle: 'Selecting Elements (Finding Elements on the Page)',
      content:
        'Before you can change an element, you need to find it first! JavaScript gives you several ways to grab elements from your HTML.\n\n**Most Common (Modern):**\n• querySelector() - Finds first match (uses CSS selectors)\n• querySelectorAll() - Finds all matches\n\n**Older Methods (still work):**\n• getElementById() - Find by ID\n• getElementsByClassName() - Find by class\n• getElementsByTagName() - Find by tag name',
      code: `// MODERN WAY (Recommended) - querySelector
// Use CSS selectors just like in CSS!
const header = document.querySelector('#header');  // ID
const firstItem = document.querySelector('.item');  // Class (first one)
const button = document.querySelector('button');    // Tag

// querySelectorAll - gets ALL matches (returns NodeList)
const allItems = document.querySelectorAll('.item');
const allButtons = document.querySelectorAll('button');

// You can use any CSS selector!
const firstParagraph = document.querySelector('div.content p:first-child');

// OLD WAY (still works, but querySelector is better)
const headerOld = document.getElementById('header');
const itemsOld = document.getElementsByClassName('item');
const paragraphsOld = document.getElementsByTagName('p');

// Query selector (CSS selector)
const firstItem = document.querySelector('.item');
const allItems = document.querySelectorAll('.item'); // NodeList

// Modern approach (use querySelector/All)
const button = document.querySelector('#submit-btn');
const cards = document.querySelectorAll('.card');`,
      example:
        'Getting form input: const emailInput = document.querySelector("#email"); const value = emailInput.value;',
    },
    {
      subtitle: 'Modifying Elements',
      code: `const element = document.querySelector('#myElement');

// Change content
element.textContent = 'New text';
element.innerHTML = '<strong>Bold text</strong>';

// Change styles
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';

// Change attributes
element.setAttribute('data-id', '123');
const id = element.getAttribute('data-id');

// Add/remove classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('highlight');
element.classList.contains('active'); // true/false`,
      example:
        'Toggle dark mode: document.body.classList.toggle("dark-mode");',
    },
    {
      subtitle: 'Creating & Removing Elements',
      code: `// Create element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'box';

// Append to DOM
document.body.appendChild(newDiv);

// Insert at specific position
const container = document.querySelector('#container');
container.insertBefore(newDiv, container.firstChild);

// Remove element
newDiv.remove();

// Or using parent
container.removeChild(newDiv);

// Replace element
const newElement = document.createElement('span');
oldElement.replaceWith(newElement);`,
      example:
        'Adding list item: const li = document.createElement("li"); li.textContent = "New item"; list.appendChild(li);',
    },
  ],
},

  'events': {
    title: 'Events',
    phase: '6',
    sections: [
    {
      subtitle: 'What are Events? (Simple Explanation)',
      content:
        'Events are things that happen on your webpage - clicks, mouse movements, key presses, form submissions, etc. JavaScript can "listen" for these events and respond to them!\n\n**Real-World Analogy:**\nThink of events like a doorbell:\n• **Event** = Someone pressing the doorbell\n• **Event Listener** = You listening for the doorbell\n• **Event Handler** = What you do when you hear it (go answer the door)\n\n**Common Events:**\n• **Click** - User clicks an element\n• **Submit** - Form is submitted\n• **Keypress** - User types on keyboard\n• **Mouseover** - Mouse hovers over element\n• **Load** - Page or image finishes loading\n• **Scroll** - User scrolls the page\n\n**Why Events Matter:**\nEvents make websites interactive! Without events, websites would just sit there - no clicking buttons, no forms, no interactivity. Events are what make the web ALIVE!',
    },
    {
      subtitle: 'Event Handling (Listening & Responding)',
      content: 'To handle events, you need to: 1) Select an element, 2) Add an event listener, 3) Define what to do when event happens.',
      code: `const button = document.querySelector('#myButton');

// Method 1: addEventListener (best practice)
button.addEventListener('click', function() {
  console.log('Button clicked!');
});

// Method 2: onclick property
button.onclick = function() {
  console.log('Clicked');
};

// Arrow function
button.addEventListener('click', () => {
  console.log('Clicked!');
});

// Named function
function handleClick() {
  console.log('Clicked');
}
button.addEventListener('click', handleClick);

// Remove event listener
button.removeEventListener('click', handleClick);`,
    },
    {
      subtitle: 'Event Object',
      code: `button.addEventListener('click', function(event) {
  console.log('Event type:', event.type); // "click"
  console.log('Target element:', event.target);
  console.log('Mouse position:', event.clientX, event.clientY);
  console.log('Key pressed:', event.key); // For keyboard events
});

// Common properties
// event.target - element that triggered event
// event.currentTarget - element with listener attached
// event.preventDefault() - prevent default behavior
// event.stopPropagation() - stop bubbling`,
    },
    {
      subtitle: 'Event Bubbling & Capturing',
      code: `// HTML: <div id="outer"><div id="inner"><button>Click</button></div></div>

// Bubbling (default) - from target to root
document.querySelector('#outer').addEventListener('click', () => {
  console.log('Outer clicked');
});

document.querySelector('#inner').addEventListener('click', () => {
  console.log('Inner clicked');
});

document.querySelector('button').addEventListener('click', () => {
  console.log('Button clicked');
});

// Click button → Output:
// Button clicked
// Inner clicked
// Outer clicked

// Stop propagation
document.querySelector('button').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button clicked');
});
// Now only "Button clicked" will log`,
      example:
        'Modal close: overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });',
    },
    {
      subtitle: 'Event Delegation',
      code: `// Instead of adding listener to each item
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', handleClick); // Inefficient for many items
});

// Use event delegation (add listener to parent)
const list = document.querySelector('#itemList');
list.addEventListener('click', function(e) {
  if (e.target.classList.contains('item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});

// Works for dynamically added items too!
const newItem = document.createElement('li');
newItem.className = 'item';
newItem.textContent = 'New item';
list.appendChild(newItem); // Listener works automatically!`,
      example:
        'Todo list: todoList.addEventListener("click", (e) => { if (e.target.matches(".delete-btn")) { deleteItem(e.target.closest("li")); } });',
    },
  ],
},

  'forms-validation': {
    title: 'Forms & Validation',
    phase: '6',
    sections: [
    {
      subtitle: 'Form Events',
      code: `const form = document.querySelector('#myForm');
const input = document.querySelector('#email');

// Submit event
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload
  console.log('Form submitted');
});

// Input events
input.addEventListener('input', (e) => {
  console.log('Value:', e.target.value); // Fires on every keystroke
});

input.addEventListener('change', (e) => {
  console.log('Changed:', e.target.value); // Fires when input loses focus
});

input.addEventListener('focus', () => {
  console.log('Input focused');
});

input.addEventListener('blur', () => {
  console.log('Input lost focus');
});`,
    },
    {
      subtitle: 'Client-Side Validation',
      code: `const form = document.querySelector('#registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const errors = [];
  
  // Email validation
  if (!email) {
    errors.push('Email is required');
  } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    errors.push('Invalid email format');
  }
  
  // Password validation
  if (!password) {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    submitForm();
  }
});

function displayErrors(errors) {
  const errorDiv = document.querySelector('#errors');
  errorDiv.innerHTML = errors.map(err => \`<p>\${err}</p>\`).join('');
}`,
      example:
        'Real-time validation: input.addEventListener("input", () => { const isValid = validateEmail(input.value); showFeedback(isValid); });',
    },
  ],
},

  'browser-apis': {
    title: 'Browser APIs',
    phase: '6',
    sections: [
    {
      subtitle: 'localStorage & sessionStorage',
      code: `// localStorage (persists after browser close)
localStorage.setItem('username', 'Alice');
const username = localStorage.getItem('username');
localStorage.removeItem('username');
localStorage.clear(); // Clear all

// Store objects (must stringify)
const user = { name: 'Bob', age: 30 };
localStorage.setItem('user', JSON.stringify(user));
const storedUser = JSON.parse(localStorage.getItem('user'));

// sessionStorage (cleared when tab closes)
sessionStorage.setItem('sessionId', '12345');
const sessionId = sessionStorage.getItem('sessionId');`,
      example:
        'Remember user preference: const theme = localStorage.getItem("theme") || "light"; applyTheme(theme);',
    },
    {
      subtitle: 'Cookies',
      code: `// Set cookie
document.cookie = "username=Alice; max-age=3600; path=/";

// Read cookies
const cookies = document.cookie.split('; ');
const cookieObj = {};
cookies.forEach(cookie => {
  const [key, value] = cookie.split('=');
  cookieObj[key] = value;
});

// Delete cookie (set expiration to past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`,
    },
  ],
},

  'fetch-ajax': {
    title: 'Fetch API & AJAX',
    phase: '6',
    sections: [
    {
      subtitle: 'What is Fetch/AJAX? (Simple Explanation)',
      content:
        'Fetch is how your website talks to servers to get or send data - without reloading the page!\n\n**Before AJAX:**\n• Click link → Whole page reloads → Slow!\n• Like tearing down your house to change a light bulb\n\n**With AJAX/Fetch:**\n• Click button → Fetch new data → Update just that part → Fast!\n• Like changing a light bulb without touching anything else\n\n**Real Examples:**\n• **Twitter** - New tweets appear without page reload\n• **Google Maps** - Scroll to load new areas\n• **Instagram** - Infinite scroll loading more posts\n• **YouTube** - Comments load without leaving video\n\n**AJAX = Asynchronous JavaScript And XML** (old term)\n**Fetch = Modern way to do AJAX** (better, cleaner)\n\n**What Can You Do?**\n• Get data from APIs (weather, user info, products)\n• Send data to servers (forms, comments, likes)\n• Update parts of page without reload (smooth UX)',
    },
    {
      subtitle: 'Basic Fetch (Getting Data)',
      content: 'Fetch returns a Promise, so you can use .then() or async/await to handle the response.',
      code: `// GET request
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/await version
async function getUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`,
    },
    {
      subtitle: 'POST Request',
      code: `// POST with JSON data
async function createUser(userData) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser({ name: 'Alice', email: 'alice@example.com' });`,
    },
  ],
},

  // Phase 7-11
  'es6-features': {
    title: 'ES6+ Features',
    phase: '7',
    sections: [
    {
      subtitle: 'Modern JavaScript Features (ES6+)',
      content:
        'ES6 (ECMAScript 2015) brought HUGE improvements to JavaScript, making it cleaner and more powerful!\n\n**What is ES6?**\nES6 = Big update to JavaScript in 2015. Since then, we get yearly updates (ES2016, ES2017, etc.)\n\n**Key Features:**\n• **Destructuring** - Extract values easily\n• **Spread/Rest operators** - Work with arrays/objects better\n• **Arrow functions** - Shorter function syntax\n• **Template literals** - Better string formatting\n• **let/const** - Better variable declarations\n• **Classes** - Object-oriented programming\n• **Modules** - Import/export code\n• **Promises** - Better async handling\n\n**Why Learn These?**\nModern JavaScript code uses these features everywhere! If you want to read React, Vue, or modern JS code, you MUST know ES6+.',
    },
    {
      subtitle: 'Destructuring (Unpacking Values)',
      content: 'Destructuring extracts values from arrays or objects into variables. It\'s like unpacking a suitcase!',
      code: `// Array destructuring
const [a, b, c] = [1, 2, 3];

// Object destructuring
const { name, age } = { name: 'Alice', age: 25 };

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]`,
    },
    {
      subtitle: 'Optional Chaining & Nullish Coalescing',
      code: `// Optional chaining
const user = { name: 'Alice' };
console.log(user.address?.city); // undefined (no error)

// Nullish coalescing
const count = 0;
console.log(count ?? 10); // 0 (0 is not null/undefined)
console.log(count || 10); // 10 (0 is falsy)`,
    },
  ],
},

  'performance': {
    title: 'Performance Concepts',
    phase: '8',
    sections: [
    {
      subtitle: 'Why Performance Matters',
      content:
        'Slow websites lose users! People expect websites to load instantly.\n\n**Statistics:**\n• 53% of users leave if page takes >3 seconds to load\n• Amazon loses $1.6 BILLION per year for every second of delay\n• Google uses page speed as ranking factor\n\n**Performance Affects:**\n• User experience (happy vs frustrated users)\n• SEO rankings (Google prefers fast sites)\n• Conversion rates (slow = lost sales)\n• Mobile users (often on slow connections)\n\n**What Makes Sites Slow?**\n• Too much JavaScript\n• Large images\n• Inefficient code (nested loops)\n• Too many network requests\n• Memory leaks',
    },
    {
      subtitle: 'Time & Space Complexity (Big O Notation)',
      content:
        'Big O notation tells you how fast your code is as data grows. It\'s like a speedometer for algorithms!\n\n**Common Complexities:**\n• **O(1)** - Constant: Same speed regardless of size (FAST!)\n• **O(log n)** - Logarithmic: Doubles data, tiny speed increase (FAST)\n• **O(n)** - Linear: Double data, double time (OK)\n• **O(n²)** - Quadratic: Double data, 4x slower (SLOW!)\n• **O(2ⁿ)** - Exponential: Add 1 item, double time (VERY SLOW!)',
      code: `// O(1) - Constant time
function getFirst(arr) {
  return arr[0];
}

// O(n) - Linear time
function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n²) - Quadratic time
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}`,
    },
  ],
},

  'optimization': {
    title: 'Optimization Techniques',
    phase: '8',
    sections: [
    {
      subtitle: 'Memoization',
      code: `// Without memoization
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// With memoization
function fibonacciMemo() {
  const cache = {};
  
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = fibonacciMemo();
console.log(fib(40)); // Much faster!`,
    },
  ],
},

  'debugging': {
    title: 'Debugging',
    phase: '9',
    sections: [
    {
      subtitle: 'What is Debugging?',
      content:
        'Debugging is finding and fixing errors (bugs) in your code. Every developer spends LOTS of time debugging - it\'s a crucial skill!\n\n**Why "Bug"?**\nIn 1947, a real moth was found in a computer! Engineers had to "debug" it. The term stuck.\n\n**Common Bugs:**\n• **Syntax errors** - Typos, missing brackets\n• **Logic errors** - Code runs but does wrong thing\n• **Runtime errors** - Code crashes while running\n• **Async errors** - Promises, timing issues\n\n**Debugging Tools:**\n• **console.log()** - Print values to see what\'s happening\n• **Breakpoints** - Pause code at specific lines\n• **DevTools** - Browser\'s built-in debugger\n• **Error messages** - Read them carefully!\n\n**Pro Tip:**\nDebugging is like being a detective. Follow the clues (error messages), check the evidence (variable values), and solve the mystery!',
    },
    {
      subtitle: 'Browser DevTools (Your Best Friend)',
      content: 'Browser DevTools let you inspect, pause, and step through your code. Press F12 to open them!',
      code: `// Console methods
console.log('Normal log');
console.warn('Warning');
console.error('Error');
console.table([{ name: 'Alice' }, { name: 'Bob' }]);

// Debugger statement
function calculate(x, y) {
  debugger; // Execution pauses here
  return x + y;
}

// Console assertions
console.assert(2 + 2 === 4, 'Math still works!');
console.assert(2 + 2 === 5, 'Math is broken!'); // Logs error`,
    },
  ],
},

  'testing': {
    title: 'Testing Basics',
    phase: '9',
    sections: [
    {
      subtitle: 'Why Write Tests?',
      content:
        'Tests are like insurance for your code - they catch bugs before users do!\n\n**Without Tests:**\n• Change code → Hope it works → Users find bugs → Oops!\n• Fear of refactoring (might break things)\n• Hard to know if everything still works\n\n**With Tests:**\n• Change code → Run tests → Know if you broke something\n• Confidence to refactor\n• Living documentation (tests show how code should work)\n\n**Types of Tests:**\n• **Unit Tests** - Test individual functions (like testing a single lego brick)\n• **Integration Tests** - Test multiple parts together (like testing connected lego pieces)\n• **E2E Tests** - Test whole app (like testing the entire lego castle)\n\n**When to Test:**\n• Critical business logic\n• Complex functions\n• Bug fixes (prevent regression)\n• Public APIs\n\n**Reality Check:**\nNot everything needs tests. Start with important functions. Testing takes time but saves more time later!',
    },
    {
      subtitle: 'Writing Testable Code',
      content: 'Good tests need good code. Pure functions (same input = same output) are easiest to test.',
      code: `// ✅ Good: Pure function, easy to test
function add(a, b) {
  return a + b;
}

// Test
console.assert(add(2, 3) === 5, 'add function works');

// ❌ Bad: Side effects, hard to test
let total = 0;
function addToTotal(num) {
  total += num;
}`,
    },
  ],
},

  'nodejs': {
    title: 'Node.js Fundamentals',
    phase: '10',
    sections: [
    {
      subtitle: 'What is Node.js? (Simple Explanation)',
      content:
        'Node.js lets you run JavaScript outside the browser - on servers, computers, even robots!\n\n**Before Node.js:**\n• JavaScript only ran in browsers\n• Backend = PHP, Python, Ruby, Java\n• Frontend developers couldn\'t build servers\n\n**After Node.js (2009):**\n• JavaScript runs ANYWHERE\n• One language for frontend AND backend\n• JavaScript developers can build full applications!\n\n**Think of it like:**\n• Browser JavaScript = JavaScript in a sandbox (limited)\n• Node.js = JavaScript with superpowers (file access, database connections, servers)\n\n**Why Use Node.js?**\n• Use JavaScript everywhere (full-stack)\n• Fast and efficient (non-blocking I/O)\n• Huge ecosystem (NPM - millions of packages)\n• Great for real-time apps (chat, live updates)',
    },
    {
      subtitle: 'Creating a Simple Server',
      content: 'Node.js makes it easy to create a web server that responds to HTTP requests.',
      code: `// File: server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Run: node server.js`,
    },
  ],
},

  'rest-api': {
    title: 'REST API Basics',
    phase: '10',
    sections: [
    {
      subtitle: 'What is a REST API? (Simple Explanation)',
      content:
        'A REST API is like a waiter at a restaurant:\n\n**You (Frontend)** → **Waiter (API)** → **Kitchen (Server/Database)**\n\n1. You tell the waiter what you want (API request)\n2. Waiter goes to the kitchen (server processes)\n3. Kitchen prepares your order (database query)\n4. Waiter brings it back (API response)\n\n**REST = Representational State Transfer**\nFancy words for: "A standardized way for apps to talk to each other over the internet"\n\n**HTTP Methods (What you want to do):**\n• **GET** - "Give me data" (like viewing a menu)\n• **POST** - "Create something new" (placing an order)\n• **PUT** - "Update existing data" (change your order)\n• **DELETE** - "Remove data" (cancel order)\n\n**Why REST?**\n• Standard way of building APIs\n• Works over HTTP (the web\'s protocol)\n• Easy to understand and use\n• Language-agnostic (works with any programming language)',
    },
    {
      subtitle: 'HTTP Methods in Action',
      content: 'Each HTTP method corresponds to a CRUD operation: Create, Read, Update, Delete.',
      code: `// Express.js example
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
});

app.listen(3000);`,
    },
  ],
},

  'security': {
    title: 'Security',
    phase: '11',
    sections: [
    {
      subtitle: 'Why Security Matters',
      content:
        'Web security is like locking your house - you need it to protect yourself and your users!\n\n**What Can Go Wrong?**\n• **Data Theft** - Hackers steal user passwords, credit cards\n• **Site Defacement** - Attackers change your website\n• **Privacy Violation** - User data leaked to public\n• **Financial Loss** - Company loses money and reputation\n\n**Your Responsibility:**\nAs a developer, YOU are responsible for keeping users safe. Even small mistakes can lead to huge security breaches.\n\n**Common Attacks:**\n• XSS (Cross-Site Scripting) - Injecting malicious scripts\n• SQL Injection - Attacking databases\n• CSRF (Cross-Site Request Forgery) - Tricking users into unwanted actions\n\n**Golden Rules:**\n1. NEVER trust user input\n2. Always validate and sanitize\n3. Use HTTPS\n4. Keep libraries updated\n5. Don\'t store passwords in plain text',
    },
    {
      subtitle: 'XSS (Cross-Site Scripting) Prevention',
      content:
        'XSS is when attackers inject malicious JavaScript into your website. It\'s like letting a stranger write on your walls!\n\n**How it happens:**\nUser inputs: `<script>alert("Hacked!")</script>`\nIf you display this without sanitizing → script runs!\n\n**Prevention:**\n• Use textContent instead of innerHTML\n• Sanitize user input\n• Use Content Security Policy (CSP)',
      code: `// ❌ Vulnerable to XSS
const userInput = '<script>alert("XSS")</script>';
element.innerHTML = userInput; // Script will execute!

// ✅ Safe
element.textContent = userInput; // Treated as text

// Or use sanitization library
import DOMPurify from 'dompurify';
const clean = DOMPurify.sanitize(userInput);
element.innerHTML = clean;`,
    },
    {
      subtitle: 'Input Validation',
      code: `// Always validate on both client AND server
function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

function sanitizeInput(input) {
  return input.trim().replace(/<[^>]*>/g, '');
}`,
    },
  ],
},
};
