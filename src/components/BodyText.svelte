<script>
  import { createEventDispatcher } from "svelte";
  import { bodyText } from "../store.js";
  import { hoverCardItem } from "../store.js";
  import SubCard from "./SubCard.svelte";

  export let showCard;
  //    export let showCopyLink
</script>

<section class="my-8 lg:w-10/12 relative ">
  <div class="">
    {#if showCard}
      <ul
        class="inline-block bg-gray-100  w-56 hideMenu absolute ml-60 lg:ml-72 mt-12"
      >
        <li class=" border-b border-gray-300 " on:click>
          <div class="flex items-center justify-start px-2 py-2 cursor-pointer">
            <img src={hoverCardItem[0].icon} alt="icon" />
            <span class="ml-2">{hoverCardItem[0].name}</span>
          </div>
        </li>
        <li class=" border-b border-gray-300">
          <a href="/" class="flex items-center justify-start px-2 py-2">
            <img src={hoverCardItem[1].icon} alt="icon" />
            <span class="ml-2">{hoverCardItem[1].name}</span>
          </a>
        </li>
        <li class=" border-b border-gray-300">
          <a href="/" class="flex items-center justify-start px-2 py-2">
            <img src={hoverCardItem[2].icon} alt="icon" />
            <span class="ml-2">{hoverCardItem[2].name}</span>
          </a>
        </li>
        <li class=" border-b border-gray-300 relative showSubMenu">
          <a href="/" class="flex items-center justify-start px-2 py-2">
            <img src={hoverCardItem[3].icon} alt="icon" />
            <span class="ml-2 text-blue-500">{hoverCardItem[3].name}</span>
            <img
              src={hoverCardItem[3].iconArrow}
              class="ml-auto w-4"
              alt="icon"
            />
          </a>
          <div class="hideSubMenu">
            <SubCard />
          </div>
        </li>
      </ul>
    {/if}
  </div>

  <p on:mouseup>{bodyText}</p>
</section>
<h2 class="text-gray-700 text-2xl font-semibold">Held</h2>

<style>
  .showSubMenu .hideSubMenu {
    display: none;
  }
  .showSubMenu:hover .hideSubMenu {
    display: block;
  }
</style>
