<script lang="ts">
  import Child from "$lib/components/Child.svelte";
  import DispatcherChild from "$lib/components/DispatcherChild.svelte";
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

  const alertToggle = () => {
    alert("click Svelte Event");
  };

  const consoleToggle = () => {
    console.log("once click Svelte Event");
  };

  const handleCustomEvent = (event: CustomEvent) => {
    console.log(event.detail.data);
  };
</script>

<button on:click={alertToggle} on:click|once={consoleToggle}
  >multi toggle</button
>

<button on:click|once={alertToggle} on:click={consoleToggle}>once toggle</button
>

<Child {text} {html} {arr} {obj} />

<DispatcherChild on:myEvent={handleCustomEvent} />
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
</style>
