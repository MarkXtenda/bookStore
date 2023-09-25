<script>
	import GoogleLogin from "$lib/components/GoogleLogin.svelte";
    import AuthForm from "$lib/components/Auth/AuthForm.svelte";
    import {loginWithEmailAndPassword} from "$lib/firebase/auth.client.ts"

    async function login(event) {
        const userData = new FormData(event.target);
        const email = userData.get('email');
        const password = userData.get('password');
        const userLoggedIn = await loginWithEmailAndPassword({email, password})
    }
</script>

<div class="row">
    <div class="col">
        <h1>Login</h1>
        <AuthForm on:submit={login} buttonName={'Sign In'}/>
        <GoogleLogin/>
    </div>
</div>