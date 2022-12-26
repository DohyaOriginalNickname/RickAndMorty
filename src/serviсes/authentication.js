import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { getDatabase, ref, set, push, get, child } from "firebase/database";


export async function createNewUser(name, surname, middleName, email, password) {
    await createUserWithEmailAndPassword(getAuth(), email, password)
        .then(user => {
            sessionStorage.setItem('user', JSON.stringify({ name, middleName, surname, email, password, uid: user.user.uid }))
            set(push(ref(getDatabase(), `users/${user.user.uid}`), {
                name, surname, middleName, email, password, uid: user.user.uid
            }));
        })
        .catch(err => console.log(err))
}

export async function loginUser(email, password) {
    await signInWithEmailAndPassword(getAuth(), email, password)
        .then((user) => {
            get(child(ref(getDatabase()), `/users/${user.user.uid}/`))
                .then(user => {
                    Object.keys(user.val()).forEach(key => {
                        const userData = user.val()[key]
                        sessionStorage.setItem('user', JSON.stringify({ ...userData }))
                    })
                })
        })
}

export async function changeUserData(obj) {
    const currentUser = getAuth().currentUser.uid
    await get(child(ref(getDatabase()), `/users/${currentUser}/`))
        .then(user => {
            Object.keys(user.val()).forEach(key => {
                const userData = user.val()[key]
                set(ref(getDatabase(), `users/${currentUser}/${key}`), {
                    ...userData, name: obj.newName, middleName: obj.newMiddleName, surname: obj.newSurname,
                })
                sessionStorage.setItem('user', JSON.stringify({ name: obj.name, middleName: obj.middleName, surname: obj.surname, ...userData }))
            })
        })
}

export async function changeUserPassword(oldPass, newPass) {
    const currentUser = getAuth().currentUser
    await updatePassword(currentUser, newPass)
        .then(() => {
            get(child(ref(getDatabase()), `/users/${currentUser.uid}/`))
                .then(user => {
                    Object.keys(user.val()).forEach(key => {
                        const userData = user.val()[key]
                        set(ref(getDatabase(), `users/${currentUser.uid}/${key}`), {
                            ...userData, password: newPass
                        })
                        sessionStorage.setItem('user', JSON.stringify({ ...userData, password: newPass }))
                    })
                })
        })
}
