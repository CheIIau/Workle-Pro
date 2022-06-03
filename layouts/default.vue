<template>
  <div>
    <div class="main-layout">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheFooter from '~~/components/TheFooter.vue';

</script>

<style>
.main-layout {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>