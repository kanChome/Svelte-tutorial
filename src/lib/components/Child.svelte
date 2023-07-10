<script lang="ts">
  import type { Arr } from "../../types/Arr.type";
  import type { Obj } from "../../types/Obj.type";

  export let text: string;

  export let html: string;

  export let arr: Arr;

  export let obj: Obj;
</script>

<p class="text">{text}</p>

<p class="html">{@html html}</p>

<ul class="array-list">
  {#each arr as ar, i}
    <li>
      <a href={ar.link}>
        {i + 1} <span>{ar.text}</span>
      </a>
    </li>
  {/each}
</ul>

<div class="object-card">
  {#if obj.imagePath}
    <img src={obj.imagePath} alt={obj.text} />
  {/if}
  <p class="text">{obj.text}</p>
</div>
