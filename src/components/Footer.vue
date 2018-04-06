<template>
<!-- TODO: vertical footer -->
  <p>
    © 2015-{{ new Date().getFullYear() }} David & Angela McClatchey. All Rights Reserved.
  </p>
</template>

<script>
export default {
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: calc(0.5em + 0.5vmin);
  text-align: right;
  color: #000;
  position: fixed;
  bottom: -2em;
  right: 0;
  transform: rotate(90deg);
  transform-origin: right top 0;
}
</style>
