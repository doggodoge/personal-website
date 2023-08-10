<script lang="ts">
  export let emoji: string;
  export let size: string;
</script>

<span class="emoji" style="font-size: {size};">{emoji}</span>

<style>
  .emoji {
    user-select: none;
    -moz-user-select: -moz-none;
    -webkit-user-select: none;
    transition: 100ms;
  }

  .emoji:hover {
    transform: scale(1.05);
  }
</style>
