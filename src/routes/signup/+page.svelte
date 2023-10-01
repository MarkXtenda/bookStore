<script lang="ts">
	import AuthForm from "$lib/components/Auth/AuthForm.svelte";
	import GoogleLogin from "$lib/components/GoogleLogin.svelte";
	import { registerWithEmailAndPassword } from "$lib/firebase/auth.client";
    import {page} from "$app/stores"
    import {afterLogin} from '$lib/helpers/route.helper.ts'

    async function register(event) {
        const userData = new FormData(event.target)
        const email = userData.get('email');
        const password = userData.get('password');
        const user = await registerWithEmailAndPassword({email, password});
        await afterLogin($page.url, user.uid);
    }
</script>

<div class="row">
    <div class="col">
        <h1>Sign Up</h1>
    <hr>
    <AuthForm on:submit={register} buttonName={'Sign Up'} />
    <hr>
    <GoogleLogin/>
</div>
</div>


<svelte:head>
    <title>Sign Up</title>
</svelte:head>