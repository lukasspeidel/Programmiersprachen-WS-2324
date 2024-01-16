<script>
  let catImageUrl = '';

  async function fetchCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    catImageUrl = data[0].url;
  }
</script>

<main>
  <h1>Random Cat Image</h1>
  <button on:click={fetchCatImage}>Get New Cat</button>
  {#if catImageUrl}
    <img src={catImageUrl} alt="Random Cat" />
  {/if}
</main>

<style>
  /* Add some styling here pups hihi*/
</style>
