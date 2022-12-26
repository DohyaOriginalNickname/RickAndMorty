import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getDatabase, ref as refDatabase, set, get, child } from 'firebase/database'

export async function name(file, userData) {
    const currentUser = userData.uid
    const fileExt = file.name.slice(file.name.lastIndexOf('.'))

    await uploadBytes(ref(getStorage(), `images/${currentUser}${fileExt}`), file)
    const imageSrc = await getDownloadURL(ref(getStorage(), `images/${currentUser}${fileExt}`))

    await get(child(refDatabase(getDatabase()), `users/${currentUser}/`))
        .then(user => {
            Object.keys(user.val()).forEach(key => {
                const userData = user.val()[key]
                set(refDatabase(getDatabase(), `users/${userData.uid}/${key}`), { ...userData, imageSrc })
                sessionStorage.setItem('user', JSON.stringify({ ...userData, imageSrc }))
            })
        })
}