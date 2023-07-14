<script lang="ts">
  // checkboxが変化するとselectedColorsの値も更新される
  let selectedColors: string[] = [];
  let colors = ["apple", "orange", "banana"];

  // div要素とバインドしたmyElementを参照する
  let myElement: HTMLDivElement;
</script>

{#each colors as color}
  <label>
    <input type="checkbox" bind:group={selectedColors} value={color} />
    {color}
  </label>
{/each}

<p>Selected colors: {selectedColors.join(", ") || "none"}</p>

<div bind:this={myElement}>Hello DOM Element Binding!</div>
<button on:click={() => console.log(myElement)}>Log DOM Element</button>
