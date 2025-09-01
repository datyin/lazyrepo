<script setup lang="ts">
import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from "naive-ui";
import { onBeforeUnmount, onMounted } from "vue";
import { defineNaiveUI, disposeNaiveUI } from "./api.ts";

defineOptions({
  name: "NWrapperAPI",
  inheritAttrs: false,
});

const loadingBar = useLoadingBar();
const modal = useModal();
const message = useMessage();
const dialog = useDialog();
const notification = useNotification();

onMounted(() => {
  defineNaiveUI({
    loadingBar,
    modal,
    notification,
    message,
    dialog,
  });
});

onBeforeUnmount(() => {
  disposeNaiveUI();
});
</script>

<template>
  <slot />
</template>
