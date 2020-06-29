import { authWithLoginAndPassword, createUser, exitUser } from './services/firebase/index.js';
import { Note } from './notes.js';
import generateUUID from './constants/uuid.js';
import { showElement, hideElement } from './utils/view.js';
import { config } from './config/firebase.js';

(function () {
  const autorizationContainer = document.querySelector('.container_none');
  const loginContainer = document.querySelector('.container');
  const logInForm = document.querySelector('.form');
  const loginInput = document.querySelector('.form-for-login_email');
  const passwordInput = document.querySelector('.form-for-login_password');
  const buttonLogin = document.querySelector('.form-for-login_button');
  const signUpAction = document.querySelector('.signup');

  const regFormEmail = document.querySelector('.form-for-login_email_reg');
  const regFormPassword = document.querySelector('.form-for-login_password_reg');
  const signUpButton = document.querySelector('.registration-button');

  const notesContainer = document.querySelector('.notes_container');
  const buttonForAddNote = document.querySelector('.notes_container__textarea__button');
  const textarea = document.querySelector('#note-textarea');
  const itemList = document.querySelector('.notes_container__item');
  const logOutButton = document.querySelector('.log_out');

  let login = loginInput.value;
  let password = passwordInput.value;
  //let newNote = textarea.value;
  let list = [];

  async function signUp(e) {
    try {
      e.preventDefault();
      await createUser(regFormEmail.value, regFormPassword.value);
      logInForm.reset();
      hideElement(autorizationContainer);
      showElement(notesContainer);
    } catch (err) {
      console.log(err);
    }
  }

  function changeModal(event) {
    event.preventDefault();
    hideElement(loginContainer);
    showElement(autorizationContainer);
  }

  async function logIn(event) {
    event.preventDefault();
    await authWithLoginAndPassword(loginInput.value, passwordInput.value);
    logInForm.reset();
    hideElement(loginContainer);
    showElement(notesContainer);
  }

  function logOut(e) {
    exitUser();
    hideElement(notesContainer);
    showElement(loginContainer);
  }

  function addNote() {
    const note = new Note(generateUUID(), textarea.value);
    let showNotes = '';
    note.create().forEach(function (item, i) {
      showNotes += `
        <li>
            <input type='checkbox' id='item_${i}' hidden >
            <label for='item_${i}'>${item.text}</label>
        </li>
    `;
      itemList.innerHTML = showNotes;
    });
    console.log(note.notes);
  }

  buttonLogin.addEventListener('click', logIn);
  signUpButton.addEventListener('click', signUp);
  signUpAction.addEventListener('click', changeModal);
  //buttonForAddNote.addEventListener('click', console.log(textarea));
  //buttonForAddNote.onclick = addNote;
  logOutButton.addEventListener('click', logOut);
})();
