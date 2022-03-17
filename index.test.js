const Arrey = require('./index');

describe('Arrey', () => {
  test('Empty arrey', () => {
    const arrey = new Arrey();

    expect(arrey.length).toBe(0);
  });

  test('Add elements', () => {
    const arrey = new Arrey();
    arrey.push(1);
    expect(arrey[0]).toBe(1);

    arrey.push(2, 3);
    expect(arrey[2]).toBe(3);
  });

  test('write elements', () => {
    const arrey = new Arrey();
    arrey.push(1);
    arrey[0] = 2;
    expect(arrey[0]).toBe(2);
  });

  test('remove elements', () => {
    const arrey = new Arrey(1, 2, 3);

    const result = arrey.pop();
    expect(result).toBe(3);
    expect(arrey.length).toBe(2);
  });

  test('find index of the element', () => {
    const arrey = new Arrey(5, 7, 6, NaN, 4, 5);

    expect(arrey.indexOf(7)).toBe(1);
    expect(arrey.indexOf(1)).toBe(-1);
    expect(arrey.indexOf(NaN)).toBe(3);
    expect(arrey.indexOf(5)).toBe(0);
    expect(arrey.indexOf(5, 1)).toBe(5);
  });

  test('includes an element', () => {
    const arrey = new Arrey(5, 7, 6, NaN, 4, 5);

    expect(arrey.includes(7)).toBeTruthy();
    expect(arrey.includes(1)).toBeFalsy();
  });

  test('includes an element', () => {
    const arrey = new Arrey(1, 2, 3);

    expect(arrey.join(',')).toBe('1,2,3');
  });

  test('forEach method', () => {
    const arrey = new Arrey(1, 2);

    let result = '';
    arrey.forEach((value, index) => {
      result += `${index}: ${value}, `;
    });

    expect(result).toBe('0: 1, 1: 2, ');
  });

  test('some method', () => {
    const arrey = new Arrey(1, 2, 3, 4);

    const result = arrey.some((value) => {
      return value % 2 === 0;
    });

    expect(result).toBe(true);
  });

  test('filter method', () => {
    const arrey = new Arrey(1, 2, 3, 4, 5);

    const result = arrey.filter((value) => {
      return value % 2 === 0;
    });

    expect(result.toString()).toEqual('[2, 4]');
  });

  test('map method', () => {
    const arrey = new Arrey(1, 2);

    const result = arrey.map((value) => {
      return value * 2;
    });

    expect(result.toString()).toEqual('[2, 4]');
  });

  test('reduce method', () => {
    const arrey = new Arrey(1, 2, 3);

    const result = arrey.reduce((sum, value) => {
      return sum + value;
    }, 0);

    expect(result).toBe(6);

    const result2 = arrey.reduce((s, value) => {
      return s + ' ' + value;
    }, '');

    expect(result2).toBe(' 1 2 3');

    const evens = new Arrey();
    const result3 = arrey.reduce((e, value) => {
      if (value % 2 === 0) {
        e.push(value);
      }
      return e;
    }, evens);

    expect(result3.toString()).toBe('[2]');
  });
});
