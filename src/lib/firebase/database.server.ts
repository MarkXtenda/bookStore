import { db } from "$lib/firebase/firebase.server";
import { firestore } from "firebase-admin";
import { saveFileToBucket } from "./firestorage.server";

interface BookInterface {
    title: string, 
    short_description: string,
    description: string
    author: string,
    small_picture: File,
    main_picture: File,
}

export async function addBook(book: BookInterface, userId: string) {
    const bookCollection = db.collection('books')
    const bookRef = await bookCollection.add({
        title: book.title,
        description: book.description,
        short_description: book.short_description,
        author: book.author,
        user_id: userId,
        created_at: firestore.Timestamp.now().seconds,
        likes: 0
    })

    const smallPictureUrl = await saveFileToBucket(book.small_picture, `${userId}/${bookRef.id}/small_picture`);

    const mainPictureUrl = await saveFileToBucket(book.main_picture, `${userId}/${bookRef.id}/main_picture`);

    await bookRef.update({
        main_picture: mainPictureUrl,
        small_picture: smallPictureUrl
    })

    return bookRef.id;
}