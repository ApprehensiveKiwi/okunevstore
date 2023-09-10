<script>
	import Icon from '$lib/assets/earthcorepromo.jpg';
</script>

<div class="containerImg w-full flex text-white h-[75vh] shadow-xl">
	<div class=" h-full bg-gradient-to-br from-[#803625] to-[#190303] justify-end">
		<div class="w-full h-full flex flex-col justify-around">
			<div class="p-[4vw]">
				<p class="lg:text-[5vw] text-[13vw] font-Header font-bold transition-all duration-500">
					EARTHCORE
				</p>
				<p>
					EarthCore Clothing: Unearth Authentic Style, Wear Nature's Heart, and Connect with
					Sustainable Fashion that Speaks to the Depths of Our Planet.
				</p>
			</div>
			<a
				href="/store"
				class="mt-auto w-full h-1/4 text-[1em] hover:animate-pulse bg-opacity-5 bg-black hover:bg-opacity-20"
				>Explore the Range</a
			>
		</div>
	</div>
	<img
		class=" object-cover lg:w-[60%] hover:opacity-95 shadow-xl transition-all w-0 duration-500"
		src={Icon}
		alt="download icon"
	/>
</div>

<style>
	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>
