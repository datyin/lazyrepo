<script setup lang="ts">
import type { ModalProps } from "naive-ui";
import { NIcon, NInput, NModal } from "naive-ui";
import { shallowRef } from "vue";
import FluentSearch16Regular from "~icons/fluent/search-16-regular";

defineOptions({
  name: "LNSearchPopup",
  inheritAttrs: false,
});

const props = defineProps<{
  modal?: Omit<ModalProps, "show" | "preset">;
}>();

const show = shallowRef<boolean>(false);
</script>

<template>
  <NInput readonly class="max-w-[250px]" @click="show = true">
    <template #prefix>
      <NIcon :component="FluentSearch16Regular" />
    </template>
  </NInput>

  <NModal
    v-model:show="show"
    preset="card"
    v-bind="props.modal"
    class="max-w-[800px]"
  >
    aaa
  </NModal>
</template>
