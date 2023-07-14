<script lang="ts">
  import { afterUpdate } from "svelte";

  afterUpdate(() => {
    console.log("component updated");
  });
</script>
