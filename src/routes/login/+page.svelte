<script>
	import GoogleLogin from "$lib/components/GoogleLogin.svelte";
    import AuthForm from "$lib/components/Auth/AuthForm.svelte";
    import {loginWithEmailAndPassword} from "$lib/firebase/auth.client.ts"
    import {page} from "$app/stores"
    import {afterLogin} from '$lib/helpers/route.helper.ts'

    async function login(event) {
        const userData = new FormData(event.target);
        const email = userData.get('email');
        const password = userData.get('password');
        const user = await loginWithEmailAndPassword({email, password})
        await afterLogin($page.url, user.uid);
    }
</script>

<div class="row">
    <div class="col">
        <h1>Login</h1>
        <AuthForm on:submit={login} buttonName={'Sign In'}/>
        <hr>
        <GoogleLogin/>
        <hr>
        <a href="/forgot-password" class="btn btn-warning w-100">Forgot Password?</a>
    </div>
</div>

<svelte:head>
    <title>Login</title>
</svelte:head>