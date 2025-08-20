import type { IconProps } from "naive-ui";
import type { RouterLinkProps } from "vue-router";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";

export function renderIcon(props: IconProps) {
  return () => h(NIcon, props);
}

export function renderRouterLink(label: string, props: RouterLinkProps) {
  return () => h(RouterLink, props, { default: () => label });
}
