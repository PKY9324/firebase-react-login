import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
    db.ref(`user/${id}`).set({
        username,
        email,
    });

export const onceGetUsers = () =>
    db.ref('user').once('value');