<script setup lang="ts">
import { NIcon, NInput, NPopover } from "naive-ui";
import { computed, shallowRef } from "vue";
import FluentSearch16Regular from "~icons/fluent/search-16-regular";
import { $t } from "@/plugins/i18n.ts";

defineOptions({
  name: "SearchBar",
  inheritAttrs: false,
});

defineEmits<{
  (e: "search", query: string): void;
}>();

defineSlots<{
  default: () => void;
}>();

const value = shallowRef<string | null | undefined>("test");
const show = computed(() => !!value.value);
</script>

<template>
  <NPopover
    :show="show"
    trigger="manual"
    placement="bottom"
    width="trigger"
  >
    <template #trigger>
      <NInput
        v-model:value="value"
        clearable
        :placeholder="$t('Search')"
        class="max-w-400px w-full"
      >
        <template #prefix>
          <NIcon :component="FluentSearch16Regular" />
        </template>
      </NInput>
    </template>

    <slot />
  </NPopover>
</template>
