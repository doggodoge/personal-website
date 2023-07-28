<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</head>

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
