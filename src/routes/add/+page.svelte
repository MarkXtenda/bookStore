<script>
    import BookForm from '$lib/components/Books/BookForm.svelte'
    export let form;
</script>

<div class='row'>
    <div class='col'>
        {#if form && form.success}
        <h2>Success</h2> 
        {:else}
        <h1>Add Book</h1>
        <BookForm {form}/>
        {/if}
    </div>
</div>

<svelte:head>
    <title>Add Book</title>
</svelte:head>