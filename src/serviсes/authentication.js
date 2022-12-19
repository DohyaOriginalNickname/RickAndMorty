import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import { getDatabase, ref, set, push, get, child } from "firebase/database";


export async function createNewUser(name, surname, middleName, email, password) {
    await createUserWithEmailAndPassword(getAuth(), email, password)
        .then(user => {
            set(push(ref(getDatabase(), `users/${user.user.uid}`), {
                name, surname, middleName, email, password
            }));
        })
        .catch(err => console.log(err))
    localStorage.setItem('user', JSON.stringify({ name, middleName, surname, email, password }))
}

export async function loginUser(email, password) {
    await signInWithEmailAndPassword(getAuth(), email, password)
        .then((user) => {
            get(child(ref(getDatabase()), `/users/${user.user.uid}/`))
                .then(user => {
                    Object.keys(user.val()).forEach(key => {
                        const userData = user.val()[key]
                        localStorage.setItem('user', JSON.stringify({ name: userData.name, middleName: userData.middleName, surname: userData.surname, email: userData.email, password: userData.password }))
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
                localStorage.setItem('user', JSON.stringify({ name: obj.name, middleName: obj.middleName, surname: obj.surname, ...userData }))
            })
        })
}

export async function changeUserPassword(oldPass, newPass) {
    const currentUser = getAuth().currentUser
    const userData = JSON.parse(localStorage.getItem('user'))
    if (userData.password === oldPass) {
        await updatePassword(currentUser, newPass)
            .then(() => {
                get(child(ref(getDatabase()), `/users/${currentUser.uid}/`))
                    .then(user => {
                        Object.keys(user.val()).forEach(key => {
                            const userData = user.val()[key]
                            set(ref(getDatabase(), `users/${currentUser.uid}/${key}`), {
                                ...userData, password: newPass
                            })
                            localStorage.setItem('user', JSON.stringify({ ...userData, password: newPass }))
                        })
                    })
            })
            .catch(err => console.log(err.message))
    }
}
