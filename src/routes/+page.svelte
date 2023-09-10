<script>
    import Header from "../components/header/index.svelte";
	import LargeAd from "../components/deepsea.svelte";
	import SearchHeader from "../components/searchHeader/index.svelte";
	import Deepsea from "../components/deepsea.svelte";
	import Abovetheclouds from "../components/abovetheclouds.svelte";
	import Intotheearth from "../components/intotheearth.svelte";
</script>
<div class="flex flex-col">
    <Header></Header>
    <SearchHeader></SearchHeader>
    <div class="w-full">
        <Deepsea></Deepsea>
        <Abovetheclouds></Abovetheclouds>
        <Intotheearth></Intotheearth>
    </div>

</div>
