<script>
	import MaterialSymbolsSearch from '~icons/material-symbols/search';
	import SearchItem from './searchItem.svelte';
	let results = [
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
        {
            name: 'SHIRT',
        },
        {
            name: 'PANT',
        },
    ];
	let searchQuery = '';
	let test = false;
</script>

<div class="flex flex-col group text-white w-full relative">
	<div
		class="flex bg-accent-800 h-12 rounded-md border-4 border-transparent group-hover:rounded-b-none"
	>
		<input
			type="search"
			bind:value={searchQuery}
			class="w-full rounded-md p-3 m-1 ml-5 bg-accent-700 outline-none"
			placeholder="Search..."
		/>
		<div class="text-xl grid place-items-center mr-2">
			<MaterialSymbolsSearch />
		</div>
	</div>
	<div 
		class="flex bg-accent-800  
        rounded-md w-full border-transparent 
        collapse group-hover:visible 
        group-hover:rounded-t-none 
        h-0 group-hover:h-full"
	>
		<ul class="w-full searchContainer pb-2 absolute">
			{#if searchQuery.length > 0}
				{#if results.length > 0}
					{#each results as result}
						<SearchItem product={result}/>
					{/each}
				{:else}
					<div class=" justify-center flex">
						<div>No Results found for query.</div>
					</div>
				{/if}
			{/if}
		</ul>
	</div>
</div>

<style>
</style>
