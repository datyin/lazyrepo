<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { renderIcon, renderRouterLink } from "@lazypack/naive-ui";
import { NMenu } from "naive-ui";
import { computed } from "vue";
import FluentBook16Regular from "~icons/fluent/book-16-regular";
import { $t } from "@/plugins/i18n.ts";

defineOptions({
  name: "NavigationMenu",
  inheritAttrs: false,
});

const options = computed<MenuOption[]>(() => ([
  {
    key: "get-started",
    label: renderRouterLink($t("GetStarted"), { to: { name: "get-started" } }),
    icon: renderIcon({ component: FluentBook16Regular }),
  },
]));
</script>

<template>
  <NMenu
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="options"
  />
</template>
