import type { IconProps, ImageProps } from "naive-ui";
import type { RouterLinkProps } from "vue-router";
import { NIcon, NImage } from "naive-ui";
import { h } from "vue";
import { RouterLink } from "vue-router";

export function renderIcon(props: IconProps) {
  return () => h(NIcon, props);
}

export function renderRouterLink(label: string, props: RouterLinkProps) {
  return () => h(RouterLink, props, { default: () => label });
}

export function renderImageAsIcon(src: string, props?: Omit<ImageProps, "src" | "previewDisabled" | "width">) {
  return () => h(NImage, {
    src,
    previewDisabled: true,
    width: "100%",
    ...props ?? {},
  });
}
