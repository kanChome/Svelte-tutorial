<script lang="ts">
  import Binding from "$lib/components/Binding.svelte";
  import Child from "$lib/components/Child.svelte";
  import DispatcherChild from "$lib/components/DispatcherChild.svelte";
  import DomElementBinding from "$lib/components/DomElementBinding.svelte";
  import GroupBinding from "$lib/components/GroupBinding.svelte";
  import Increment from "$lib/components/Increment.svelte";
  import ReactiveIncrement from "$lib/components/ReactiveIncrement.svelte";
  import ReactiveStetment from "$lib/components/ReactiveStetment.svelte";
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

<Child {text} {html} {arr} {obj} />

<button on:click={alertToggle} on:click|once={consoleToggle}
  >multi toggle</button
>
<button on:click|once={alertToggle} on:click={consoleToggle}>once toggle</button
>
<br />

<DispatcherChild on:myEvent={handleCustomEvent} />
<br />

<Increment />

<ReactiveIncrement />

<ReactiveStetment />

<Binding />

<GroupBinding />

<DomElementBinding />
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
</style>
