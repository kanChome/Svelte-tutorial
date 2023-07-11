<script lang="ts">
  let count = 0;

  $: if (count > 5) {
    console.log("Count is 5 or greater");
  }

  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>Increment Statment</button>
<p>Count: {count}</p>
{#if count > 5}
  <p style="color:brown">Larger than 5</p>
{/if}
