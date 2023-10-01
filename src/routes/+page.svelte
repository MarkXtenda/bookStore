<script>
    import { onMount } from "svelte";
    import { getAuth } from "firebase/auth";
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<h2>Number of Users: {data.count}</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
