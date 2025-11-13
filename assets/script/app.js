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
    return [`${this.#id}`, `${this.#name}`, `${this.#userName}`, `${this.#email}`];
  }
}

class Subscriber extends User {
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
    console.log(printInfo);
    return printInfo;
  }
}


// POSTING

// get elements
const postButton = getElement('post-button');
const postText = getElement('new-post-text');
const realFileButton = getElement('real-file');
const fileButton = getElement('new-file');
const fileText = getElement('file-text');
const postFeed = getElement('post-feed');

const userOne = new Subscriber(1234, 'Maxwell', 'MaxAttax', 'max@meowmail.com', ['My page', 'Another page', 'Friend\'s page'], ['Cat lovers', 'Cat haters', 'Cat neutrals'], false);
userOne.getInfo();

listen('click', fileButton, function() {
  realFileButton.click();
});

listen('change', realFileButton, function(){
  if (realFileButton.value) {
    fileText.innerText = realFileButton.value;
    console.log(realFileButton.value);
  } else {
    fileText.innerText = 'File upload unsucccessful.';
  }
});

function post() {
  let textValue = postText.value;
  let currentTime = new Date();
  let timeString = currentTime.toLocaleString();
  if(checkText(textValue) === false && checkImg(realFileButton) === false){
    alert('No content!');
  } else if (checkImg(realFileButton) === true) {
    postFeed.innerHTML += 
    `<div class="post">
            <div class="post-format">
              <div class="icon"></div>
              <div class="username">${userOne.getInfo()[1]}</div>
              <div class="post-time">${timeString}</div>
            </div>
            <div class="post-content">
              <div class="post-text">${textValue}</div>
              <div class="post-img">
                <img src="${URL.createObjectURL(realFileButton.files[0])}">
              </div>
            </div>
          </div>`;
    realFileButton.value = '';
    fileText.innerText = 'No file selected.';
    } else {
      postFeed.innerHTML += 
    `<div class="post">
      <div class="post-format">
        <div class="icon"></div>
        <div class="username">${userOne.getInfo()[1]}</div>
        <div class="post-time">${timeString}</div>
      </div>
      <div class="post-content">
        <div class="post-text">${textValue}</div>
      </div>
    </div>`;
  }
  postText.value = '';
}

function checkText(text) {
  if(text === '') {
    return false;
  } else {
    return true;
  }
}

function checkImg(img) {
  if(img.value) {
    return true;
  } else {
    return false;
  }
}

listen('click', postButton, post);

// POP-UP

// get elements
const popUpIcon = getElement('pop-up-icon');
const closeModal = getElement('close-modal');
const popUpModal = getElement('pop-up-modal');

const userId = getElement('user-id');
const userName = getElement('user-name');
const userUserName = getElement('user-username');
const userEmail = getElement('user-email');
const userGroups = getElement('user-groups');
const userPages = getElement('user-pages');
const userIsMonetized = getElement('user-is-monetized');

// user info display

userId.innerText = userOne.getInfo()[0];
userName.innerText = userOne.getInfo()[1];
userUserName.innerText = userOne.getInfo()[2];
userEmail.innerText = userOne.getInfo()[3];
userPages.innerText = userOne.getInfo()[4].join(', ');
userGroups.innerText = userOne.getInfo()[5].join(', ');


if (userOne.getInfo()[6] === true) {
  userIsMonetized.innerText = 'Active';
} else if (userOne.getInfo()[6] === false) {
  userIsMonetized.innerText = 'Inactive';
} else {
  userIsMonetized.innerText = 'Null';
}

// popping up
let popUp = false;

listen('click', popUpIcon, function() {
  if (popUp === false) {
    popUpModal.style.visibility = 'visible';
    popUpModal.style.opacity = '1';
    popUp = true;
  } else if (popUp === true) {
    popUpModal.style.visibility = 'hidden';
    popUpModal.style.opacity = '0';
    popUp = false;
  }
});

listen('click', closeModal, function() {
  popUpModal.style.visibility = 'hidden';
  popUpModal.style.opacity = '0';
  popUp = false;
});