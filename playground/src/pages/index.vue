<script setup lang="ts">
defineOptions({
  name: "Index",
  inheritAttrs: false,
});
</script>

<template>
  <NP v-for="i in 100" :key="i">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur, suscipit unde et doloremque, perferendis consectetur quibusdam quidem nobis itaque, sint non? Corporis excepturi, quidem rerum quo maiores nihil ab!
  </NP>
</template>
