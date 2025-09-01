import type { RouteRecordInfo } from "vue-router";
import { useNaiveUI } from "@lazypack/naive-ui";
import { createRouter, createWebHistory, isNavigationFailure, NavigationFailureType } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: () => import("@/pages/Index.vue"),
    },
    {
      name: "get-started",
      path: "/get-started",
      component: () => import("@/pages/GetStarted.vue"),
    },
  ],
});

router.beforeEach((_to, _from, next) => {
  const ui = useNaiveUI();
  ui.loadingBar?.start();

  next();
});

router.afterEach((_to, _from, failure) => {
  const ui = useNaiveUI();
  const isError = isNavigationFailure(failure, NavigationFailureType.aborted | NavigationFailureType.cancelled);
  isError ? ui.loadingBar?.error() : ui.loadingBar?.finish();
});

interface RouteNamedMap {
  "index": RouteRecordInfo<
    "index",
    "/",
    Record<never, never>,
    Record<never, never>,
    never
  >;

  "get-started": RouteRecordInfo<
    "get-started",
    "/get-started",
    Record<never, never>,
    Record<never, never>,
    never
  >;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}
