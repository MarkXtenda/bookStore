<script lang='ts'>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import Navbar from '$lib/components/Navbar.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
    import messagesStore from '$lib/stores/errorMessages.store';
    import '$lib/firebase/firebase.client'
    import {onMount} from 'svelte';
    import {sendJWTToken} from '$lib/firebase/auth.client'
    let timerId;

    async function refreshToken() {
        try {
            await sendJWTToken();
        } catch (error) {
            clearInterval(timerId)
            messagesStore.showErr()
            console.log(error)
        }
    }

    onMount(async ()=>{
        try {
            timerId = setInterval(async () => {
                await refreshToken();
            }, 1000 * 60 * 10);
        } catch (error) {
        }

        return () => {
            clearInterval(timerId)
        }
    })
</script>

<Navbar/>
<ErrorMessage/>
<main class="container">
    <slot></slot>
</main>