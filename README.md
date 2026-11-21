
# ts-try

A lightweight error-handling utility for TypeScript and JavaScript.

Wrap function calls with _try() to safely handle exceptions without interrupting application execution. Includes global TypeScript declarations for convenient, type-safe usage.

## Installation

```bash
npm install @lvcca/ts-try
```

## Usage

Import the package once in your application entry point:

```typescript
import "@lvcca/ts-try";
```

```typescript
const myFunction = (name: string, age: number) => {
    console.log(`Hello ${name}, age ${age}`);
    return true;
};

const safeFunction = _try(myFunction);

const result = safeFunction("John", 25);
```
