<script lang="ts">
  import { onMount } from "svelte";
  let title = "Hello from Svelte!";

  onMount(() => {
    console.log("Popup mounted");
  });
</script>

<style lang="scss">
  /* Dein SASS/SCSS Code hier */
  h1 {
    color: red;
  }
</style>

<h1>{title}</h1>
