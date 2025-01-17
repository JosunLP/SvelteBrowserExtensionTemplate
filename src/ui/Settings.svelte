<script lang="ts">
	import { onMount } from "svelte";
	let title = "Hello from Svelte!";

	onMount(() => {
		console.log("Popup mounted");
	});
</script>

<h1>{title}</h1>

<style lang="scss">
h1 {
	color: red;
}
</style>
