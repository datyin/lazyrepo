<script setup lang="ts">
import { LNConfigProvider } from "@lazypack/naive-ui";
import DefaultLayout from "./layouts/DefaultLayout.vue";

defineOptions({
  name: "Playground",
  inheritAttrs: false,
});
</script>

<template>
  <LNConfigProvider>
    <DefaultLayout />
  </LNConfigProvider>
</template>
