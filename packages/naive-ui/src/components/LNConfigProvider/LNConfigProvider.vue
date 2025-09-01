<script setup lang="ts">
import type { ConfigProviderProps, DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, ModalProviderProps, NotificationProviderProps } from "naive-ui";
import NWrapper from "./NWrapper.vue";
import NWrapperAPI from "./NWrapperAPI.vue";

defineOptions({
  name: "LNConfigProvider",
  inheritAttrs: false,
});

defineProps<{
  configProvider?: ConfigProviderProps;
  loadingBarProvider?: LoadingBarProviderProps;
  messageProvider?: MessageProviderProps;
  notificationProvider?: NotificationProviderProps;
  modalProvider?: ModalProviderProps;
  dialogProvider?: DialogProviderProps;
}>();
</script>

<template>
  <NWrapper
    :config-provider="configProvider"
    :loading-bar-provider="loadingBarProvider"
    :message-provider="messageProvider"
    :notification-provider="notificationProvider"
    :modal-provider="modalProvider"
    :dialog-provider="dialogProvider"
  >
    <NWrapperAPI>
      <slot />
    </NWrapperAPI>
  </NWrapper>
</template>
