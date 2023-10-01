<script>
    import AuthForm from "$lib/components/Auth/AuthForm.svelte";
    import {forgotPasswordReset} from "$lib/firebase/auth.client.ts"
    import errorMessagesStore from '$lib/stores/errorMessages.store';
    import { goto } from '$app/navigation';

    let hide = false
    async function forgotPass(event) {
        const userData = new FormData(event.target);
        const email = userData.get('email');
        try {
            await forgotPasswordReset(email);
            hide = true;
            errorMessagesStore.showSuccess("Form submitted Successfuly!");
            goto('/login');
        } catch (error) {
            
        }
        
    }
</script>

<div class='row'>
    <div class='col'>
        <h1>Forgot Password</h1>
        {#if !hide}
        <AuthForm on:submit={forgotPass} forgotPassword={true} buttonName="Forgot Password"/>
        {/if}
    </div>
</div>