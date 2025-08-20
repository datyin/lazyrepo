<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import FluentBook16Regular from "~icons/fluent/book-16-regular";
import { renderIcon, renderRouterLink } from "@/utilities/naive-ui.ts";

defineOptions({
  name: "Logo",
  inheritAttrs: false,
});

const options = computed<MenuOption[]>(() => ([
  {
    key: "home",
    label: renderRouterLink("Logo", { to: "/" }),
    icon: renderIcon({ component: FluentBook16Regular }),
  },
]));
</script>

<template>
  <NMenu
    :value="null"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options
  />
</template>
