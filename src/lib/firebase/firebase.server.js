import admin from 'firebase-admin'
import  ServiceAccount from '$lib/firebase/firebase-key.server.json'

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(ServiceAccount)
    })
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();