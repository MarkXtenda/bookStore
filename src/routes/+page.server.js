import { db } from "$lib/firebase/firebase.server";

export async function load() {
    console.log("in server")
    const count = await db.collection('users').count().get();
    return {
        count: count.data().count
    }
}

export let count;