import type { LoadingBarApi, ModalApi } from "naive-ui";
import { defineStore } from "pinia";

interface StoreNaiveAPI {
  loadingBar?: LoadingBarApi;
  modal?: ModalApi;
}

export const useNaiveUI = defineStore("app", () => {
  let loadingBarInst: LoadingBarApi | undefined;

  function setup(api: StoreNaiveAPI) {
    loadingBarInst = api.loadingBar;
  }

  const loadingBar = {
    start() {
      loadingBarInst?.start();
    },
    stop(failed: boolean = false) {
      if (failed) {
        loadingBarInst?.error();
      }
      else {
        loadingBarInst?.finish();
      }
    },
  };

  return {
    setup,
    loadingBar,
  };
});
