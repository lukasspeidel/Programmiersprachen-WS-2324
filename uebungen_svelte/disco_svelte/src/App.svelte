<script>
  import Dancefloor from "./Dancefloor.svelte";
</script>

<main>
  <Dancefloor w={200} h={600} lampCount={35} />
  <Dancefloor w={400} h={400} lampCount={100} />
  <Dancefloor w={200} h={600} lampCount={55} />
</main>

<style>
  main {
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
</style>
