<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { renderImageAsIcon, renderRouterLink } from "@lazypack/naive-ui";
import { NMenu } from "naive-ui";
import { computed } from "vue";
import Logo from "@/assets/Logo.svg?url";

defineOptions({
  name: "Logo",
  inheritAttrs: false,
});

const options = computed<MenuOption[]>(() => ([
  {
    key: "home",
    label: renderRouterLink("Logo", { to: "/" }),
    icon: renderImageAsIcon(Logo),
  },
]));
</script>

<template>
  <NMenu
    :value="null"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="options"
  />
</template>
