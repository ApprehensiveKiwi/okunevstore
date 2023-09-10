<script>
	import SearchInput from "./components/searchInput.svelte";
    import MaterialSymbolsShoppingCart from '~icons/material-symbols/shopping-cart'
</script>
<div class="flex flex-col bg-accent-900 p-2 text-white">
    <div class="flex flex-row justify-between px-2">
        <div class="self-center">
            <a href = '/' class="hover:bg-accent-600 p-2 rounded-md">
                OKUNEVSTORE
            </a>
            
        </div>
            <div class=" w-[75%]">
                <SearchInput></SearchInput>
            </div>
        <button class="">
            <MaterialSymbolsShoppingCart></MaterialSymbolsShoppingCart>
        </button>
    </div>
    <div class="flex-auto">

    </div>
</div>
