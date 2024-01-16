<script>
    export let colorLake = `rgb(0, 0, ${Math.random() * 200})`;
    export let linksLake;
    export let obenLake;
    export let breiteLake = 40+Math.random()*100;
</script>

<main>
    <div class="lake" style="background-color: {colorLake}; top: {obenLake}px; left: {linksLake}px; width: {breiteLake}px; height: {breiteLake}px"></div>
</main>

<style>	
    .lake {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        z-index: 100;
    }
</style>