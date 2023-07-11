<script lang="ts">
  let count = 0;

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>Increment</button>
<p>Count: {count}</p>
