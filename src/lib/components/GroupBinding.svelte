<script lang="ts">
  // セレクトボックスで選択するたびにselectedFruitも更新する
  let selectedFruit = "";
  let fruits = ["apple", "orange", "banana"];
</script>

<select bind:value={selectedFruit}>
  <option value="">Choose a fruit</option>
  {#each fruits as fruit}
    <option>{fruit}</option>
  {/each}
</select>

<p>You selected: {selectedFruit || "nothing"}</p>
