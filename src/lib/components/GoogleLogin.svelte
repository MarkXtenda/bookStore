<script>
    import {loginWithGoogle} from '$lib/firebase/auth.client'
	import messagesStore from '$lib/stores/errorMessages.store';
    import {page} from "$app/stores"
    import {afterLogin} from '$lib/helpers/route.helper.ts'

    async function handleLoginWithGoogle() {
        try {
            const user = await loginWithGoogle();
            await afterLogin($page.url, user.uid);
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