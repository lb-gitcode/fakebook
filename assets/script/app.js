'use strict';
// Uncaught SyntaxError: Cannot use import statement outside a module
// get HTML element by ID
function getElement(selector, scope = document) { return scope.getElementById(selector); }
// select HTML element 
function select(selector, scope = document) { return scope.querySelector(selector); }
// select a list of HTML elements as an array
function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }
// adding event listener
function listen(event, selector, callback) { return selector.addEventListener(event, callback); }

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
    return [ `${this.#id}`, `${this.#name}`, `${this.#userName}`, `${this.#email}`];
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

// get elements
const postButton = getElement('post-button');
const postText = getElement('new-post-text');
const postFile = getElement('new-file');
const postFeed = getElement('post-feed');

// app
const userOne = new User(1234, 'Maxwell', 'MaxAttax', 'max@meowmail.com');

function post() {
  let textValue = postText.value;
  if(textValue === ''){
    console.log('No text!');
  } else {
    postFeed.innerHTML += 
    `<div class="post">
        <div class="post-format">
          <div class="icon"></div>
          <div class="username">Insert Name</div>
          <div class="post-time">Time</div>
        </div>
        <div class="post-content">
          <div class="post-text">${textValue}</div>
          <div class="post-img">
            <img src="./assets/media/favicon.png">
          </div>
        </div>
      </div>`;
  }
}

listen('click', postButton, post)