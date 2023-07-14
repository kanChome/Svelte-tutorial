<script lang="ts">
  import { beforeUpdate } from "svelte";

  beforeUpdate(() => {
    console.log("Component will update");
  });
</script>
