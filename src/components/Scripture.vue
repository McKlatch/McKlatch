<template>
  <div class="scripture">
    <blockquote>
      <slot/>
    </blockquote>
    <label>{{ scriptureRef }}</label>
  </div>
</template>

<script>
export default {
  props: ['scriptureRef']
}
</script>

<style scoped>
div {
  --bg-color: #ffec9e;
  --detail-color: #c99157;
}

div.scripture {
  background-color: var(--bg-color);
  border-top: 0.5vmax solid var(--detail-color);
  border-bottom: 0.5vmax solid var(--detail-color);
  margin: 2vmax;
  position: relative;
}

div.scripture blockquote {
  font-family: Georgia, serif;
  font-size: calc(1em + 0.2vw);
  padding: 2vmax;
  text-align: justify;
  text-justify: inter-word;
}

div.scripture label {
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: calc(1em + 0.6vw);
  color: var(--detail-color);
  font-weight: bold;
  text-align: right;
  vertical-align: bottom;
  position: absolute;
  bottom: calc(-1em + 1vmax);
  right: 0.5vmax;
  font-variant-numeric: oldstyle-nums;
}
</style>
