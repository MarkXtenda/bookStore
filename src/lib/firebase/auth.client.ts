import { goto } from '$app/navigation';
import errorMessagesStore from '$lib/stores/errorMessages.store';
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth'

function errorToStringConvert(error: string) {
    const errorString = error.split('/')[1].replaceAll('-', ' ')
    // return errorString.charAt(0).toUpperCase() + errorString.slice(1)
}
// @ts-ignore
function setError(error) {
    console.log(error)
    errorMessagesStore.showErr();
}

export async function loginWithGoogle() {
    try {
        const auth = getAuth();
        const userCredentials = await signInWithPopup(auth, new GoogleAuthProvider());
        return userCredentials.user;
    } catch (error) {
        setError(error);
    }
}

export async function logout() {
    try {
        await signOut(getAuth());
        // go to initial page to prevent a user to access what he should not have an acces to
        goto('/')
    } catch (error) {
        setError(error);
    }
}

// @ts-ignore
export async function registerWithEmailAndPassword({email, password}: { email: string, password: string }) {
    try {
        const userCredentials = await createUserWithEmailAndPassword(getAuth(), email, password);
        return userCredentials.user;
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            errorMessagesStore.showErr("You have already registered, please log in.")
            console.log(error)
           goto("/login");
           return;
        }
        else if(error.code) {
            const errorString = errorToStringConvert(error.code)
            errorMessagesStore.showErr(`${errorString}.`)
            return;
        }
        else {
            setError(error);
        }
    }
}

export async function loginWithEmailAndPassword({email, password}: { email: string, password: string }) {
    try {
        const userCredentials = await signInWithEmailAndPassword(getAuth(), email, password);
        return userCredentials.user;
    } catch (error: any) {
        // To prevent data minning
        if(['auth/invalid-email', 'auth/wrong-password', 'auth/user-not-found']) {
            // We show default error to prevent finding a user or email and password
            errorMessagesStore.showErr(`Invalid email or password.`)
        }
        else if(error.code) {
            const errorString = errorToStringConvert(error.code)
            errorMessagesStore.showErr(`${errorString}.`)
            return;
        }
        else {
            setError(error);
        }
    }
}

export async function forgotPasswordReset(email:string) {
    try {
        await sendPasswordResetEmail(getAuth(), email)
    } catch (error: any) {
        // To prevet malicious mining we do not gonna show error
        // console.log(error.code)
    }
}