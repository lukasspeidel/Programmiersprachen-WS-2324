<script>
    import Card from "./Card.svelte";
    import  dinosaurs  from "./dinosaur_data.js";
</script>

    <div id="wrapper">
        <header>
            <h1>Beste Dino-Quartett</h1>
        </header>
        <nav>
            <a href="index.html">Startseite</a>
            <a href="spiel.html">Spiel</a>
            <a class="only-desktop" href="highscore.html">Highscore</a>
        </nav>
        <main>
            <div id="cards-container">
                {#each dinosaurs as dinosaur}
                <Card dino={dinosaur} />
                {/each}
            </div>
        </main>
        <footer>
            <a href="impressum.html">Impressum</a>
            <a href="datenschutz.html">Datenschutz</a>
        </footer>
    </div>

<style>

</style>
