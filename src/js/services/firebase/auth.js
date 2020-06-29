const auth = firebase.auth();

export function createUser(login, password) {
  return auth.createUserWithEmailAndPassword(login, password);
}

export function authWithLoginAndPassword(login, password) {
  return auth.signInWithEmailAndPassword(login, password);
}

export function exitUser() {
  auth.signOut().then(() => console.log('Пользователь вышел'));
}
