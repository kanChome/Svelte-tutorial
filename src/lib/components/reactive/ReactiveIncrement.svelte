<script lang="ts">
  let count = 0;
  let doubled: number;

  $: doubled = count * 2;

  const reactiveIncrement = () => {
    count += 1;
  };
</script>

<button on:click={reactiveIncrement}>Reactive Increment</button>
<p>Reactive Count: {count}</p>
<p>Doubled: {doubled}</p>
