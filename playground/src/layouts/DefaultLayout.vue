<script setup lang="ts">
import type { LayoutSiderProps } from "naive-ui";

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
        <NLayoutSider v-bind="baseSiderProps" :collapsed>
          <Logo />
        </NLayoutSider>

        <NFlex align="center" class="px-sm">
          xawxwa
        </NFlex>
      </NLayout>
    </NLayoutHeader>

    <NLayout has-sider position="absolute" style="top: 56px; bottom: 0">
      <NLayoutSider
        v-bind="baseSiderProps"
        show-trigger
        :native-scrollbar="false"
        :collapsed
        @update:collapsed="(state) => collapsed = state"
      >
        <NavigationMenu />
      </NLayoutSider>

      <NLayoutContent :native-scrollbar="false" class="pa-sm">
        <RouterView />
      </NLayoutContent>
    </NLayout>
  </NLayout>
</template>
