# Design Patterns & SOLID (Typescript)

## Singleton Pattern

- Ensures only one instance of a class exists.
- Sharing the same object across project components.
- Useful for logging, configuration, or shared resources.

### Example

Check the code: [Singleton Logger](./src/singleton/Logger.ts)
Check the code: [Singleton Database Connection](./src/singleton/DatabaseEx.ts)

Run with:

```bash
npx ts-node src/singleton/src/singleton/executeLogger.ts
npx ts-node src/singleton/src/singleton/DatabaseEx.ts
```

## Factory Method Pattern

### 📖 Definition

- Factory Method is a **Creation Pattern**.
- Goal: Move the logic of **object creation** to a single location (Factory) instead of repeating it everywhere in the code.
- This makes the code:
- Clean
- Easier to maintain and extend (Open/Closed Principle of SOLID)

---

### 🎯 When do we use it?

- When we have **families of objects** that share the same behavior (Interface) but **the construction method is different**.
- Common examples:
- 💳 Payment systems (Visa, PayPal, Stripe)
- 📩 Notification systems (SMS, Email, Push)
- 🗄️ Database connections (MySQL, MongoDB, PostgreSQL)

---

### 🛠️ Code

[Go to Factory Code](./src/factory/)

Run example:

```bash
npx ts-node src/factory/executePayment.ts
```

# SOLID Principles

SOLID is an acronym for five fundamental OOP principles that help us write clean, maintainable, and extensible code.

- **S** → Single Responsibility Principle (SRP)
- **O** → Open/Closed Principle (OCP)
- **L** → Liskov Substitution Principle (LSP)
- **I** → Interface Segregation Principle (ISP)
- **D** → Dependency Inversion Principle (DIP)

---

- Write clean code (organized and easy to read).

- Maintainable code (easy to maintain and modify).

- Extensible code (extensible).

- Reduce coupling (dependencies between classes).

---

# Coupling Example – SOLID Principles (Problem & Solution)

This example illustrates the concept of **Coupling** (dependencies between classes) as part of the **SOLID** principles in object-oriented programming (OOP).

---

## 📌 What is Coupling?

- **High Coupling**: When a particular class is directly linked to another class (any change to one class breaks the other).
- **Low Coupling**: When classes rely on **Abstraction (Interfaces)** rather than details, making the code more flexible and maintainable.

```

D:\Projects After graduation\design-patterns-typescript\src\SOLID\problemAndSolution\Coupling
│ Database.ts
│ MongoDatabase.ts
│ MySQLDatabase.ts
│
├───HighCoupling
│ UserService.ts
│ index.ts
│
└───LowCoupling
UserService.ts
index.ts

```

### 📄 Files:

- **Database.ts** → Contains the interface (abstraction) for the Database.
- **MongoDatabase.ts** → Implementation for MongoDB.
- **MySQLDatabase.ts** → Implementation for MySQL.
- **HighCoupling/** → High coupling problem example (UserService depends directly on MySQLDatabase).
- **LowCoupling/** → Solution using abstraction (UserService depends on Interface Database).

---

## ⚡ Running the Code

1. Make sure you're inside the project folder:

```bash
cd "D:\Projects After graduation\design-patterns-typescript"
```

2. Run the High Coupling example:

```bash
npx ts-node src/SOLID/problemAndSolution/Coupling/HighCoupling/index.ts
```

**Expected Output:**

```
Connected to MySQL
Fetching users...
```

3. Run the Low Coupling example:

```bash
npx ts-node src/SOLID/problemAndSolution/Coupling/LowCoupling/index.ts
```

**Expected Output:**

```
Connected to MySQL
Fetching users...

Connected to MongoDB
Fetching users...
```

---

---

## 1. Single Responsibility Principle (SRP)

### 📖 Definition

"A class should have only one reason to change."
This means the class should have only one responsibility.

### ✅ Why is it important?

If a class does many things:
It will be complex and difficult to test.
Any modification could break other things.
When a class has only one responsibility:
The code is clearer and easier to understand.
It's easier to perform unit testing.
Any change to one part of the project won't affect other parts.

### 🎯 Benefit

- Simpler and clearer code.
- Easier to test (unit testing).
- Any change won't affect anything else.

### ❌ Bad Example

The `User` class contains:

- Data storage
- Saving in a DB
- Sending email

### ✅ Good Example

- `User` → Responsible for data.
- `UserRepository` → Responsible for the database.
- `EmailService` → Responsible for emails

### 🛠️ Code

[Go to SRP Code](./src/SOLID/single-responsibility/)

Run the example:

```bash
npx ts-node src/solid/single-responsibility/BadUser.ts
npx ts-node src/solid/single-responsibility/User.ts
```
