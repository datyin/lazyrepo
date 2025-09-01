<script setup lang="ts">
import type { ConfigProviderProps, DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, ModalProviderProps, NotificationProviderProps } from "naive-ui";
import { NConfigProvider, NDialogProvider, NLoadingBarProvider, NMessageProvider, NModalProvider, NNotificationProvider } from "naive-ui";

defineOptions({
  name: "NWrapper",
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
  <NConfigProvider abstract v-bind="configProvider">
    <NLoadingBarProvider v-bind="loadingBarProvider">
      <NMessageProvider :duration="10000" keep-alive-on-hover closable v-bind="messageProvider">
        <NNotificationProvider keep-alive-on-hover scrollable v-bind="notificationProvider">
          <NModalProvider v-bind="modalProvider">
            <NDialogProvider>
              <slot />
            </NDialogProvider>
          </NModalProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
