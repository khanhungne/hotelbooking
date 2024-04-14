<template>
  <div>
    <div>Profile</div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>
