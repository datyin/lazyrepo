<script setup lang="ts">
import type { SwitchProps } from "naive-ui";
import { NIcon, NSwitch } from "naive-ui";
import FluentWeatherMoon16Regular from "~icons/fluent/weather-moon-16-regular";
import FluentWeatherSunny16Regular from "~icons/fluent/weather-sunny-16-regular";

defineOptions({
  name: "LNThemeSwitch",
  inheritAttrs: false,
});

const props = defineProps<{
  value?: SwitchProps["value"];
  size?: SwitchProps["size"];
  loading?: SwitchProps["loading"];
  disabled?: SwitchProps["disabled"];
  round?: SwitchProps["round"];
  checkedValue?: SwitchProps["checkedValue"];
  uncheckedValue?: SwitchProps["uncheckedValue"];
  railStyle?: SwitchProps["railStyle"];
  rubberBand?: SwitchProps["rubberBand"];
  themeOverrides?: SwitchProps["themeOverrides"];
}>();

const emit = defineEmits<{
  (e: "update:value", value: boolean): void;
}>();
</script>

<template>
  <NSwitch v-bind="props" @update:value="(value) => emit('update:value', value)">
    <template #checked-icon>
      <NIcon :component="FluentWeatherMoon16Regular" />
    </template>

    <template #unchecked-icon>
      <NIcon :component="FluentWeatherSunny16Regular" />
    </template>
  </NSwitch>
</template>
