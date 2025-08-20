<script setup lang="ts">
defineOptions({
  name: "NaiveWrapper",
  inheritAttrs: false,
});
</script>

<template>
  <NConfigProvider abstract>
    <NLoadingBarProvider>
      <NMessageProvider :duration="10000" closable>
        <NNotificationProvider scrollable>
          <NModalProvider>
            <slot />
          </NModalProvider>
        </NNotificationProvider>
      </NMessageProvider>
    </NLoadingBarProvider>
  </NConfigProvider>
</template>
