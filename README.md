# atlas-mean-square

Calculates the squared quadratic mean of a set of data points.

[![Travis](https://img.shields.io/travis/atlassubbed/atlas-mean-square.svg)](https://travis-ci.org/atlassubbed/atlas-mean-square)

---

## install

```
npm install --save atlas-mean-square
```

## why

Breaking up [atlas-dataset](https://github.com/atlassubbed/atlas-dataset#readme) into standalone functions. This module calculates the square of the quadratic mean of an array of numbers:

<p align="center">
  <img alt="<V^2> = v_i*v_i/|V|" src="docs/mean_square_einstein.png">
</p>

## examples

```javascript
const meanSquare = require("atlas-mean-square")
console.log(meanSquare([-2, 2]))
// 4
```
