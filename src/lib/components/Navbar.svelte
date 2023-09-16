<script lang="ts">
    import { page } from "$app/stores";
    let currentPage = $page.url.pathname
    console.log(currentPage)
    let isLoggedIn = true;
    let isOpen = false;
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Book Store</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
            on:click={()=>isOpen = !isOpen}
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class:show={isOpen} class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
                {#if isLoggedIn}
				<li class="nav-item">
					<a class:active={currentPage === '/home'} class="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class:active={currentPage === 'add_book'} class="nav-link" href="/add">Add Book</a>
				</li>
				<li class="nav-item">
					<a class:active={currentPage === 'profile'} class="nav-link" href="/profile">Profile</a>
				</li>
				<li class="nav-item">
					<a class:active={currentPage === '/about'} class="nav-link" href="/about">About</a>
				</li>
				<li class="nav-item">
					<span class:active={currentPage === 'logout'} class="nav-link">Logout</span>
				</li>
				<!-- Not Logged In -->
                {:else}
				<li class="nav-item">
					<a class:active={currentPage === 'home'} class="nav-link" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class:active={currentPage === 'about'} class="nav-link" href="/about">About</a>
				</li>

				<li class="nav-item">
					<a class:active={currentPage === 'login'} class="nav-link" href="/login">Login</a>
				</li>
				<li class="nav-item">
					<a class:active={currentPage === 'signin'} class="nav-link" href="/signup">Sign Up</a>
				</li>
                {/if}
			</ul>
		</div>
	</div>
</nav>

<style>
	.nav-item > span {
		cursor: pointer;
	}
</style>
