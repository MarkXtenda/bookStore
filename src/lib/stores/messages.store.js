import { writable } from "svelte/store";

const messageStore = writable({show: false, message: '', type: 'error'});

export default messageStore.subscribe