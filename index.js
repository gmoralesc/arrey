export default function Arrey() {
  Object.defineProperty(this, 'length', {
    enumerable: false,
    writable: true,
    value: 0,
  });

  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    this.push(element);
  }
}

Arrey.prototype.push = function () {
  for (let index = 0; index < arguments.length; index++) {
    const value = arguments[index];
    Object.defineProperty(this, this.length, {
      enumerable: true,
      writable: true,
      configurable: true,
      value,
    });
    this.length++;
  }

  return this.length;
};

Arrey.prototype.toString = function () {
  let result = '';
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result += `${element}`;
    if (index < this.length - 1) {
      result += ', ';
    }
  }
  return `[${result}]`;
};

Arrey.prototype.pop = function () {
  if (this.length > 0) {
    const result = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return result;
  }
};

Arrey.prototype.indexOf = function (value, fromIndex = 0) {
  if (fromIndex >= this.length) return -1;
  let position = -1;
  for (let index = fromIndex; index < this.length; index++) {
    const element = this[index];
    if (Object.is(element, value)) {
      position = index;
      break;
    }
  }
  return position;
};

Arrey.prototype.includes = function (value) {
  return this.indexOf(value) !== -1;
};

Arrey.prototype.join = function (separator = '') {
  if (this.length > 1) {
    let result = '';
    for (let index = 0; index < this.length - 1; index++) {
      const element = this[index];
      result += `${element}${separator}`;
    }
    result += this[this.length - 1];
    return result;
  } else if (this.length === 0) {
    return this[0];
  } else {
    return '';
  }
};

Arrey.prototype.forEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index);
  }
};

Arrey.prototype.some = function (callback) {
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index) === true) {
      return true;
    }
  }
};

Arrey.prototype.filter = function (callback) {
  const result = new Arrey();
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index) === true) {
      result.push(this[index]);
    }
  }
  return result;
};

Arrey.prototype.map = function (callback) {
  const result = new Arrey();
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index));
  }
  return result;
};

Arrey.prototype.reduce = function (callback, ac) {
  let result = ac;
  for (let index = 0; index < this.length; index++) {
    result = callback(result, this[index], index);
  }
  return result;
};
