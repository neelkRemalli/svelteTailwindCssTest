<script>
  import { secondarySubText } from "../store";
  import { secondaryText } from "../store";
  import { linkText } from "../store";
  import { linkIcon } from "../store";

  export let showLink;
</script>

<div>
  <h4 class="my-6 text-blue-400 text-base font-bold">{secondarySubText}</h4>
  <h2
    class="md:text-3xl text-xl font-semibold  text-gray-600 md:w-2/4 w-full  mt-2"
  >
    {secondaryText}
  </h2>
</div>
{#if showLink}
  <div class="mt-8  md:w-5/12 w-full lg:flex justify-between items-center">
    <h2 class="md:text-2xl text-xl lg:mb-0 mb-4  font-semibold">{linkText}</h2>
    <div class="inline-block">
      <span
        class="flex items-center bg-gray-200 rounded-xl overflow-hidden border  border-gray-300 "
      >
        <img
          src={linkIcon}
          alt="icon link"
          class="bg-blue-500 p-4 border border-blue-500"
        />
        <h4 class="px-4 text-sm">link has been copied</h4>
      </span>
    </div>
  </div>
{/if}
