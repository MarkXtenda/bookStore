<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import Navbar from '$lib/components/Navbar.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
    import '$lib/firebase/firebase.client'
</script>

<Navbar/>
<ErrorMessage/>
<main class="container">
    <slot></slot>
</main>