<script>
    import Tree from "./Tree.svelte";
    export let h;
    export let w;
    export let treeCount;
    export let lakeCount;

    let trees = [];
    for (let i = 0; i < treeCount; i++) {
        trees.push({
            lft: Math.random() * w,
            tp: Math.random() * h,
        });
    }

    let lakes = [];
    for (let i = 0; i < lakeCount; i++) {
        lakes.push({
            lft: Math.random() * w,
            tp: Math.random() * h,
        });
    }
</script>

<main>
    <div class="land" style="width: {w}px; height: {h}px">
        {#each trees as tree}
        <Tree links={tree.lft} oben={tree.tp} />
        {/each}
<!--         {#each lakes as lake}
        <Lake linksLake={lake.lft} obenLake={lake.tp} />
        {/each} -->
    </div>
</main>

<style>
    .land {
        border: 4px solid rgb(124, 124, 124);
        background-color: rgb(0, 124, 0);
        border-radius: 50px;
        position: relative;
        padding: 20px;
    }
</style>
