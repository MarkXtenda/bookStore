<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar/>
<main class="container">
    <slot></slot>
</main>