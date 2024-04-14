<script setup lang="ts">
interface beer {
  id: number;
  name: string;
}

function getRandomSubarray(arr) {
  // Create a new array with the same length as the original array
  const randomIndices = new Array(arr.length).fill(0).map((_, i) => i);

  // Shuffle the indices
  for (let i = randomIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomIndices[i], randomIndices[j]] = [randomIndices[j], randomIndices[i]];
  }

  // Get a random count between 10 and 20 (inclusive)
  const randomCount = Math.floor(Math.random() * 11) + 10;

  // Take the first `randomCount` elements from the shuffled indices
  return randomIndices.slice(0, randomCount).map((i) => arr[i]);
}
const {
  data: beers,
  error,
  refresh,
  pending,
} = await useAsyncData(
  "beer",
  () => $fetch("https://api.sampleapis.com/beers/ale"),
  {
    lazy: true,
    transform: (d) => getRandomSubarray(d),
  }
);
</script>

<template>
  <div>
    <h1>About page</h1>
    <button @click="refresh()">refresh</button>
    <img src="~/assets/img/download.jpg" alt="Discover Nuxt 3" />
    <NuxtLink to="/">Home page</NuxtLink>
    <div v-if="!pending" v-for="b in beers">{{ b?.name ?? "" }}</div>
  </div>
</template>
