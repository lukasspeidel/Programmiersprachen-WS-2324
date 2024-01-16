<script>
  import Land from "./Land.svelte";
</script>

<main>
  <Land w={350} h={600} treeCount={135} lakeCount={2} />
  <Land w={400} h={400} treeCount={100} lakeCount={2}/>
  <Land w={200} h={600} treeCount={55} lakeCount={2}/>
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
