<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const handleClick = () => {
    dispatch("myEvent", { data: "Custom event triggered" });
  };
</script>

<button on:click={handleClick}>Trigger Custom Event</button>
