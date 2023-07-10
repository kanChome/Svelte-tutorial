<script lang="ts">
  import Child from "$lib/components/Child.svelte";
  import type { Arr } from "../types/Arr.type";
  import type { Obj } from "../types/Obj.type";

  let text = "text,txt";

  let html = "1<br>2<br>3";
  let arr: Arr = [
    {
      link: "#1",
      text: "text01",
    },
    {
      link: "#2",
      text: "text02",
    },
    {
      link: "#3",
      text: "text03",
    },
  ];

  let obj: Obj = {
    imagePath: "https://picsum.photos/200/300",
    text: "text",
  };
</script>

<Child {text} {html} {arr} {obj} />

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
</style>
