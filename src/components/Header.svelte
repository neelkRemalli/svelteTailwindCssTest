<script>
    import {backArrow} from '../store'
    import {textHeader} from '../store'
    import {bgTextHeader} from '../store'
    import {wrapText} from '../store'
    import {wrapSubText} from '../store'
    import {headerText} from '../store'

</script>
<div class='flex items-center bg-blue-200 md:px-0  py-6'>
    <img src={backArrow} alt='back arrow icon' />
    <h1 class='lg:text-5xl md:text-3xl text-2xl md:w-10/12 w-full  ml-4 text-left font-bold text-gray-600'>
        {headerText}
       </h1>
</div>
<ul class='flex flex-wrap'>
    {#each textHeader as {text}}
    <li class='mr-4 text-sm'>{text}</li>
    {/each}
</ul>

<ul class='flex  flex-wrap md:my-8 my-12'>
    {#each bgTextHeader as {bgText}}
    <li class='mr-4  md:mt-0 mt-8 text-sm'><span class=' bg-gray-lighter font-semibold text-gray-800 px-3 py-2 rounded-xl'>{bgText}</span></li>
    {/each}
</ul>

<div class='sm:text-base text-xs'>
   <div class='bg-gray-lighter sm:w-80  w-64 rounded-xl relative py-2'>
       <h4 class='ml-3  font-semibold'>{wrapText}</h4>
       <span class=' bg-blue-500 inline-block rounded-xl  text-white right-0 absolute top-0 px-2 py-2  '>{wrapSubText}</span>
   </div>
</div>




