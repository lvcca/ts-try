
# ts-assert

A lightweight global assertion utility for TypeScript and JavaScript.

Install it once, import it into your application, and use `assert()` globally.

## Installation

```bash
npm install @lvcca/ts-assert
```

## Usage

Import the package once in your application entry point:

```typescript
import "@lvcca/ts-assert";
```

You can now use `assert()` globally:

```typescript
assert(true);  // Passes
assert(false); // Throws default Error: '[*] Assertion failed'
assert(user.balance > 0, 'incorrect balance') // Throws error with message 'incorrect balance'

```

## TypeScript Support

This package includes global TypeScript declarations, providing type checking and autocomplete without manually importing the function.

```typescript
assert(id !== '' && task !== '', 'Malformed call to GeneralInsert...');
```

## API

### `assert<T extends boolean>(condition: T, msg?: string): asserts condition is T & true`

Asserts that a given condition is `true`. If the condition evaluates to `false`, an error is thrown with the provided message.

On successful assertion, TypeScript narrows the condition's type to `true`, allowing subsequent code to rely on the asserted condition.

**Parameters**

- `condition` (`T`): The boolean condition to assert.
- `msg` (`string`, optional): Custom error message. Defaults to `[*] Assertion failed`.

**Throws**

- `Error`: If the condition evaluates to `false`.

### Usage

```ts
import '@lvcca/ts-assert';

const isValid: boolean = validateInput();

assert(isValid, 'Input validation failed');

// TypeScript now knows isValid is true.
```

### Type Narrowing

```ts
function getUser(id: string) {
    const user = users.find(user => user.id === id);

    assert(user !== undefined, 'User not found');

    // TypeScript knows user is defined here.
    return user.name;
}
```

### Custom Error Messages

```ts
assert(1 + 1 === 2, 'Math is broken'); // Passes

assert(false, 'Something went wrong');
// Throws: Error: Something went wrong

assert(false);
// Throws: Error: [*] Assertion failed
```

### Global Availability

Importing the package registers `assert` on `globalThis`, making it available globally without requiring individual imports.

```ts
import '@lvcca/ts-assert';

assert(true);

globalThis.assert(true);
```


## License

MIT
