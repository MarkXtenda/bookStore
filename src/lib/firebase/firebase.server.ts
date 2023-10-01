interface ServiceAccount {
    type: string;
    project_id: string;
    private_key_id: string;
    client_email: string,
    client_id: string,
    auth_uri: string,
    token_uri: string,
    auth_provider_x509_cert_url: string,
    client_x509_cert_url: string,
    universe_domain: string
  }

import admin from 'firebase-admin';
import serviceAccount from '$lib/firebase/firebase-key.server.json';

if (admin.apps.length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();