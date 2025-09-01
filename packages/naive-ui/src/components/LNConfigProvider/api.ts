import type { DialogApi, LoadingBarApi, MessageApi, ModalApi, NotificationApi } from "naive-ui";

interface DefineProps {
  loadingBar: LoadingBarApi | undefined;
  modal: ModalApi | undefined;
  message: MessageApi | undefined;
  notification: NotificationApi | undefined;
  dialog: DialogApi | undefined;
}

const cache: DefineProps = {
  loadingBar: undefined,
  modal: undefined,
  message: undefined,
  notification: undefined,
  dialog: undefined,
};

export function defineNaiveUI(props: DefineProps) {
  cache.loadingBar = props.loadingBar;
  cache.modal = props.modal;
  cache.message = props.message;
  cache.notification = props.notification;
  cache.dialog = props.dialog;
}

export function disposeNaiveUI() {
  cache.loadingBar = undefined;
  cache.modal = undefined;
  cache.message = undefined;
  cache.notification = undefined;
  cache.dialog = undefined;
}

export function useNaiveUI() {
  return cache;
}
