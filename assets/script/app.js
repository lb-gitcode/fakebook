'use strict';

class User {
  #id;
  #name;
  #userName;
  #email;
  constructor(id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }
  get id() { return this.#id }
  get name() { return this.#name }
  get userName() { return this.#userName }
  get email() { return this.#email }
  getInfo() {
    return `ID: ${this.#id} | Name: ${this.#name} | Username: ${this.#userName} | Email: ${this.#email}`;
  }
}

class Subscriber {
  #pages;
  #groups;
  #canMonetize;
  constructor(pages, groups, canMonetize) {
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }
  get pages() { return this.#pages }
  get groups() { return this.#groups }
  get canMonetize() { return this.#canMonetize }
}

const userOne = new User(1234, 'Maxwell', 'MaxAttax', 'max@meowmail.com');
console.log(userOne.getInfo());