<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import FluentBook16Regular from "~icons/fluent/book-16-regular";
import { $t } from "@/plugins/i18n.ts";
import { renderIcon, renderRouterLink } from "@/utilities/naive-ui.ts";

defineOptions({
  name: "NavigationMenu",
  inheritAttrs: false,
});

const options = computed<MenuOption[]>(() => ([
  {
    key: "home",
    label: renderRouterLink($t("GetStarted"), { to: "/" }),
    icon: renderIcon({ component: FluentBook16Regular }),
  },
]));
</script>

<template>
  <NMenu
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options
  />
</template>
