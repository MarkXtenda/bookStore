<script>
    import {loginWithGoogle} from '$lib/firebase/auth.client'
	import messagesStore from '$lib/stores/errorMessages.store';


    async function handleLoginWithGoogle() {
        try {
            const user = await loginWithGoogle();
            console.log(user)
        } catch (error) {
            // @ts-ignore
            if (error.code == 'auth/popup-closed-by-user' || error.code == 'auth/cancelled-popup-request') {
                return;
            }
            messagesStore.showErr();
            console.log(error);
        }
    }
</script>

<div class="row">
    <div class="col">
        <button on:click={handleLoginWithGoogle} class="btn btn-primary w-100">Login With Google</button>
    </div>
</div>