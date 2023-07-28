<script lang="ts">
  export let emoji: string;
  export let size: string;
</script>

<span class="emoji" style="font-size: {size}">{emoji}</span>

<style>
  .emoji {
    transition: 150ms ease-in-out;
  }

  .emoji:hover {
    transform: scale(1.1);
  }
</style>
