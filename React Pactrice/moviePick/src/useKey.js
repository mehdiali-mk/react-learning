import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callbackForEventListener(event) {
        if (event.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callbackForEventListener);

      return function () {
        document.removeEventListener("keydown", callbackForEventListener);
      };
    },
    [action, key]
  );
}
