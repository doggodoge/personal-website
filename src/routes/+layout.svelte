<script>
  import "../app.css";
</script>

<div class="site">
  <nav class="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/parades">Parades</a>
  </nav>
  <div class="content">
    <slot></slot>
  </div>
</div>



<style>
  :root {
    font-family: 'Anonymous Pro', monospace;
  }

  .site {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  .content {
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
    width: 100%;
  }

  .nav {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    background: #fff;
    border-right: 1px solid #eee;
    height: 100%;
  }
</style>
