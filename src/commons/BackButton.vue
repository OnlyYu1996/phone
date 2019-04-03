<template>
  <mu-button class="back" large @click="$router.back(-1)" style="background:#ff88bb" color="white">
    <mu-icon value="arrow_back"></mu-icon>
  </mu-button>
</template>

<script>
export default {
  name: "BackButton"
};
</script>

<style>
</style>