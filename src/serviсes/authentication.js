import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set, push } from "firebase/database";


export async function createNewUser(name, surname, middleName, email, password) {
    await createUserWithEmailAndPassword(getAuth(), email, password)
        .then(user => {
            set(push(ref(getDatabase(), `users/${user.user.uid}`), {
                name, surname, middleName, email, password
            }));
        })
        .catch(err => console.log(err))
}

export async function loginUser(email, password) {
    await signInWithEmailAndPassword(getAuth(), email, password)
        .then(userCredential => console.log(userCredential))
        // .catch(err => console.log(err.message))
}