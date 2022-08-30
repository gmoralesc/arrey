# Arrey

An implementation of JavaScript Array like with objects

## Installation

`npm install arrey`

`yarn add arrey`

## Documentation

Arrey supports ES modules

### Getting started

```js
import Arrey from 'arrey';

const arrey1 = new Arrey();
const arrey2 = new Arrey(1, 2, 3);

arrey1.length; // 0
arrey2.length; // 3
arrey2[0]; // 1
```

### Adding and removing elements

```js
import Arrey from 'arrey';

const arrey = new Arrey();

arrey.push('Hello'); // 1
arrey.push('World'); // 2
arrey.pop(); // World
arrey.length; // 1
```

### Finding elements

```js
import Arrey from 'arrey';

const arrey = new Arrey(2, 4, 6);

arrey.indexOf(2); //  0
arrey.indexOf(3); // -1
arrey.includes(4); // true
arrey.includes(5); // false
```

### Miscellaneous functions

```js
import Arrey from 'arrey';

const arrey = new Arrey('Hello', 'World');

arrey.forEach((item, index) => {
  console.log(`[${index}]: ${item}`);
});

arrey.join(' '); // Hello World
```

### Utility functions

#### Some

```js
import Arrey from 'arrey';

const arrey = new Arrey(1, 2, 3, 4);

const result = arrey.some((value) => {
  return value % 2 === 0;
});

result; // true
```

#### Filter

```js
import Arrey from 'arrey';

const arrey = new Arrey(1, 2, 3, 4, 5);

const result = arrey.filter((value) => {
  return value % 2 === 0;
});

result; // [2, 4]
```

#### Map

```js
import Arrey from 'arrey';

const arrey = new Arrey(1, 2);

const result = arrey.map((value) => {
  return value * 2;
});

result; // [2, 4]
```

#### Reduce

```js
import Arrey from 'arrey';

const arrey = new Arrey(1, 2, 3);

const result = arrey.reduce((sum, value) => {
  return sum + value;
}, 0);

result; // 6
```
