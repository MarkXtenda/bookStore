<script>
    import messagesStore from '$lib/stores/errorMessages.store';
    import errorMessageStore from '$lib/stores/errorMessages.store'
</script>

{#if $errorMessageStore.show}
<div class="row mt-3">
    <div class="col">
        <div 
        class:alert-danger={$errorMessageStore.type === 'error'}  
        class:alert-success={$errorMessageStore.type === 'success'} 
        class="alert alert-dismissible" 
        role="alert">
            <strong>{$messagesStore.type === 'error' ? 'Error' : 'Success'}:</strong>
            {$errorMessageStore.message}
            <button on:click={()=> errorMessageStore.hide()} type="button" class="btn-close" aria-label="Close" />
        </div>
    </div>
</div>
{:else}
<div class="row mt-3">
    <div class="col">
    </div>
</div>
{/if}