
# 📅 Day 01 – Introduction to JavaScript & Variables

## 1. What is JavaScript?

JavaScript (JS) is a high-level programming language used to make web pages interactive and dynamic.

**Simple Explanation:**

- HTML – Structure of a webpage.
- CSS – Styling of a webpage.
- JavaScript – Functionality and interactivity of a webpage.

## 2. Why was JavaScript introduced?

JavaScript was developed by Brendan Eich in 1995.

It was introduced to make websites interactive and dynamic.

Before JavaScript, websites were mostly static. JavaScript helped developers create interactive features without reloading the entire webpage.

## 3. Why do we use JavaScript?

1. To make web pages interactive.
2. To validate user input and forms.
3. To handle button clicks and events.
4. To update webpage content dynamically.
5. To communicate with servers using APIs.
6. To develop frontend applications.
7. To develop backend applications using Node.js.
8. To build web and mobile applications.

## 4. Applications of JavaScript

| Area | Technologies |
|---|---|
| Frontend Development | React, Angular, Vue |
| Backend Development | Node.js, Express.js |
| Mobile Development | React Native |
| Desktop Applications | Electron.js |

## 5. HTML vs CSS vs JavaScript

| HTML | CSS | JavaScript |
|---|---|---|
| Structure | Styling | Functionality |
| Creates elements | Adds design | Adds interactivity |
| Building blocks | Decoration | Behaviour |

## 6. JavaScript Variables

A variable is a container used to store data.

JavaScript provides three keywords to declare variables:

- var
- let
- const

### A. var

- Old way of declaring variables.
- Allows redeclaration.
- Allows reassignment.
- Has function scope.

**Example:**

```javascript
var name = "Krishnaveni";
console.log(name);

var name = "Veni";
console.log(name);
```

**Output:**

```text
Krishnaveni
Veni
```

### B. let

- Introduced in ES6 (2015).
- Does not allow redeclaration in the same scope.
- Allows reassignment.
- Has block scope.

**Example:**

```javascript
let trainer;
trainer = "Krishnaveni";

console.log(trainer);

trainer = "Veni";
console.log(trainer);
```

**Output:**

```text
Krishnaveni
Veni
```

### C. const

- Introduced in ES6 (2015).
- Does not allow redeclaration in the same scope.
- Does not allow reassignment.
- Must be initialized during declaration.
- Has block scope.

**Example:**

```javascript
const birthday = "22/11/2000";
console.log(birthday);
```

**Output:**

```text
22/11/2000
```

## 7. Declaration, Initialization and Assignment

**Declaration:** Creating a variable.

```javascript
let age;
```

**Initialization:** Assigning the first value to a variable.

```javascript
let age = 25;
```

**Assignment:** Giving a value to a variable.

```javascript
let age;
age = 25;
```

**Reassignment:** Changing an existing variable value.

```javascript
let age = 25;
age = 26;
```

## 8. Difference Between var, let and const

| Feature | var | let | const |
|---|---|---|---|
| Declaration | Yes | Yes | Yes |
| Initialization | Optional | Optional | Mandatory |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Scope | Function | Block | Block |

## 9. Important Interview Questions

**Q1. What is JavaScript?**

JavaScript is a programming language used to create interactive and dynamic web applications.

**Q2. Who developed JavaScript?**

Brendan Eich developed JavaScript in 1995.

**Q3. Why do we use JavaScript?**

We use JavaScript to make websites interactive, validate forms, handle events and develop web applications.

**Q4. What are the three variable declaration keywords?**

var, let and const.

**Q5. What is the difference between let and const?**

let allows reassignment, whereas const does not allow reassignment.

**Q6. What is ES6?**

ES6 stands for ECMAScript 2015. It introduced features such as let, const, arrow functions, classes and template literals.

## 10. My Learning Summary

Today I learned:

- Introduction to JavaScript.
- Why JavaScript was introduced.
- Uses and applications of JavaScript.
- Difference between HTML, CSS and JavaScript.
- Variables in JavaScript.
- var, let and const.
- Declaration, initialization and assignment.
- Difference between var, let and const.

## 📌 Next Topic

**Day 02 – JavaScript Data Types**

#JavaScript #DailyLearning #PythonFullStack #WebDevelopment #LearningJourney