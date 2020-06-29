//import firebase from 'firebase/app';
//import 'firebase/auth';
//import 'firebase/firestore';
import { config } from '../../config/firebase.js';

export { createUser, authWithLoginAndPassword, exitUser } from './auth.js';

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
