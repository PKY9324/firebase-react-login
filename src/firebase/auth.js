import { auth } from './firebase';

//SIGN UP
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

//SIGN IN
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword

//SIGN OUT
export const doSignOut = () =>
    auth.signOut();

//PASSWORD RESET
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

//PASSWORD CHANGE
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);