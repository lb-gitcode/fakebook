'use strict';

// utility functions
// get HTML element by ID
export function getElement(selector, scope = document) { return scope.getElementById(selector); }
// select HTML element 
export function select(selector, scope = document) { return scope.querySelector(selector); }
// select a list of HTML elements as an array
export function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
// adding event listener
export function listen(event, selector, callback) { return selector.addEventListener(event, callback); }

// classes
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
    return [`${this.#id}`, `${this.#name}`, `${this.#userName}`, `${this.#email}`];
  }
}

export class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;
  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = canMonetize;
  }
  get pages() { return this.#pages }
  get groups() { return this.#groups }
  get canMonetize() { return this.#canMonetize }
  getInfo() {
    let info = User.prototype.getInfo;
    let printInfo = info.call(this);
    printInfo.push(this.#pages);
    printInfo.push(this.#groups);
    printInfo.push(this.#canMonetize);
    return printInfo;
  }
}
