<script setup lang="ts">
import type { LayoutSiderProps } from "naive-ui";
import { LNSearchPopup, LNThemeSwitch } from "@lazypack/naive-ui";
import { NFlex, NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from "naive-ui";
import { shallowRef } from "vue";
import { RouterView } from "vue-router";
import Logo from "@/components/Logo.vue";
import NavigationMenu from "@/components/NavigationMenu.vue";

defineOptions({
  name: "DefaultLayout",
  inheritAttrs: false,
});

const collapsed = shallowRef(false);

const baseSiderProps: LayoutSiderProps = {
  bordered: true,
  width: 240,
  collapsedWidth: 64,
  collapseMode: "width",
};
</script>

<template>
  <NLayout position="absolute" style="top: 0; bottom: 0">
    <NLayoutHeader bordered style="height: 56px;">
      <NLayout has-sider style="height: 55px">
        <NLayoutSider
          v-bind="baseSiderProps"
          :collapsed
          show-trigger
          @update:collapsed="(val) => (collapsed = val)"
        >
          <Logo />
        </NLayoutSider>

        <NFlex :wrap="false" align="center" justify="space-between" class="px-sm w-full">
          <div />

          <LNSearchPopup />

          <NFlex :wrap="false" inline align="center">
            <LNThemeSwitch />
          </NFlex>
        </NFlex>
      </NLayout>
    </NLayoutHeader>

    <NLayout has-sider position="absolute" style="top: 56px; bottom: 0">
      <NLayoutSider
        v-bind="baseSiderProps"
        :native-scrollbar="false"
        :collapsed
      >
        <NavigationMenu />
      </NLayoutSider>

      <NLayoutContent :native-scrollbar="false">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
