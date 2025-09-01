<script setup lang="ts">
import { useNaiveUI } from "@lazypack/naive-ui";

defineOptions({
  name: "Index",
  inheritAttrs: false,
});

const ui = useNaiveUI();

function onClick() {
  ui.notification?.create({
    title: "Title lorem ipsum dolor sit amet",
    description: "Description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    closable: true,
    keepAliveOnHover: true,
    duration: 10000,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });
}
</script>

<template>
  <div>
    <img
      src="https://placehold.co/600x400/EEE/31343C"
      alt="Placeholder Image"
      @click="onClick"
    >
  </div>
</template>
