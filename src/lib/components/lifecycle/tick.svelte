<script lang="ts">
  import { tick } from "svelte";
  let count = 0;

  async function handleClick() {
    count++;
    //　描画が完了するのを待つ
    await tick();
    console.log(`count: ${count}`);
  }
</script>

<button on:click={handleClick}>Click Me</button>
