<script>
  import "../app.css";
</script>

<nav class="nav">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<slot></slot>

<style>
  :root {
    font-family: 'Anonymous Pro', monospace;
  }

  .nav {
    display: flex;
    justify-content: left;
    gap: 1ch;
    padding: 1em;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
</style>
