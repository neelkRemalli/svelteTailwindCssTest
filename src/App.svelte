<script>
  import Tailwind from "./Tailwind.svelte";
  import Header from "./components/Header.svelte";
  import SubHeader from "./components/SubHeader.svelte";
  import BodyText from "./components/BodyText.svelte";
  let showCard;
  let showLink = false;

  const handleMouseUp = () => {
    showCard = true;
    showLink = false;
  };

  const handleShowLink = () => {
    showLink = true;
    showCard = false;
  };
</script>

<Tailwind />

<main class=" px-6  w-full ">
  <Header />
  <SubHeader {showLink} />
  <BodyText {showCard} on:click={handleShowLink} on:mouseup={handleMouseUp} />
</main>
