<script lang="ts">
	import AuthForm from "$lib/components/Auth/AuthForm.svelte";
	import GoogleLogin from "$lib/components/GoogleLogin.svelte";
	import { registerWithEmailAndPassword } from "$lib/firebase/auth.client";

    async function register(event) {
        const userData = new FormData(event.target)
        const email = userData.get('email');
        const password = userData.get('password');
        await registerWithEmailAndPassword({email, password});
    }
</script>

<div class="row">
    <div class="row">
        <h1>Sign Up</h1>
    </div>
    <hr>
    <AuthForm on:submit={register} buttonName={'Sign Up'} />
    <hr>
    <GoogleLogin/>
</div>


<svelte:head>
    <title>Sign Up</title>
</svelte:head>