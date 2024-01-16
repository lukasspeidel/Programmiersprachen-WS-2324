<script>
    export let color = `rgb(0, ${Math.random() * 200}, 0)`;
    export let links;
    export let oben;
    export let breite = 10+Math.random()*20;
</script>

<main>
    <div class="tree" style="background-color: {color}; top: {oben}px; left: {links}px; width: {breite}px; height: {breite}px"></div>
</main>

<style>
    .tree {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
    }
</style>
