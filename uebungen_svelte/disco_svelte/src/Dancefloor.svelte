<script>
    import Lamp from "./Lamp.svelte";
    export let h;
    export let w;
    export let lampCount;

    let lamps =[]

    for (let i = 0; i < lampCount; i++) {
        lamps.push({
            lft: Math.random() * w,
            tp: Math.random() * h,
        });
    }
</script>

<div class="dancefloor" style="width: {w}px; height: {h}px">
    {#each lamps as lamp}
    <Lamp links={lamp.lft} oben={lamp.tp}  />
    {/each}
</div>

<style>
    .dancefloor {
        border: 4px solid rgb(124, 124, 124);
        background-color: #000;
        border-radius: 10px;
        position: relative;
        padding: 10px;
    }
</style>
