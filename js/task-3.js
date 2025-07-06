class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    if (typeof str === 'string') {
      return (this.#value += str);
    }
  }
  padStart(str) {
    if (typeof str === 'string') {
      return (this.#value = str + this.#value);
    }
  }
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
    return this.#value;
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
