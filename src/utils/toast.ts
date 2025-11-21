// toastUtils.js

import { Toast } from "toastify-react-native";

export const showSuccessToast = (message, description = "", options = {}) => {
  Toast.show({
    type: "success",
    text1: message,
    text2: description,
    ...options,
  });
};

/**
 * Show an error toast
 */
export const showErrorToast = (message, description = "", options = {}) => {
  Toast.show({
    type: "error",
    text1: message,
    text2: description,
    ...options,
  });
};

/**
 * Show an info toast
 */
export const showInfoToast = (message, description = "", options = {}) => {
  Toast.show({
    type: "info",
    text1: message,
    text2: description,
    ...options,
  });
};

/**
 * Show a warning toast
 */
export const showWarningToast = (message, description = "", options = {}) => {
  Toast.show({
    type: "warn",
    text1: message,
    text2: description,
    ...options,
  });
};

/**
 * Show a custom toast
 */
export const showCustomToast = (message, description = "", options = {}) => {
  Toast.show({
    type: "custom",
    text1: message,
    text2: description,
    ...options,
  });
};
