<script>
    export let color = 
    `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        
    export let links;
    export let oben;
    let interval= Math.random() * 1000+10;

    let shining = true;

    function blink() {
        shining = !shining;
    }
    
    setInterval(blink, interval);

</script>

<div
    class="lamp"
    class:hidden={!shining}
    style="background-color: {color}; top: {oben}px; left: {links}px"
></div>

<style>
    .lamp {
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
    }

    .hidden {
        opacity: 0;
    }
</style>
