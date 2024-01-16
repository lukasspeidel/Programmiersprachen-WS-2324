<script>

import Router from 'svelte-spa-router';
import Home from './Home.svelte';
import About from './About.svelte';

const routes = {
  '/': Home,
  '/about': About,
};

</script>

<header>Funny Demo Site</header>

<nav>
  <a href="#">Start</a>
  <a href="#/about">About</a>
</nav>

<main>

  <Router {routes} />

</main>

<footer></footer>

<style>
  nav {
    background-color: rgb(138, 44, 124);
  }

  footer {
    background-color: rgb(26, 154, 62);
  }

</style>