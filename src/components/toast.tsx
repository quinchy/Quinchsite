import { useEffect, useState } from "react";
import { XIcon } from "@/components/icons";

export type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

const toastStore: {
  toasts: Toast[];
  listeners: Set<(toasts: Toast[]) => void>;
} = {
  toasts: [],
  listeners: new Set(),
};

export const showToast = (message: string, type: ToastType = "info") => {
  const id = Date.now().toString();
  const toast: Toast = { id, message, type };

  toastStore.toasts.push(toast);
  for (const listener of toastStore.listeners) {
    listener([...toastStore.toasts]);
  }

  setTimeout(() => {
    toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
    for (const listener of toastStore.listeners) {
      listener([...toastStore.toasts]);
    }
  }, 3000);
};

const removeToast = (id: string) => {
  toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
  for (const listener of toastStore.listeners) {
    listener([...toastStore.toasts]);
  }
};

export default function Toast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    toastStore.listeners.add(setToasts);
    return () => {
      toastStore.listeners.delete(setToasts);
    };
  }, []);

  return (
    <div className="toast-stack">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast--${toast.type}`}>
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="toast__close"
            aria-label="Close toast"
          >
            <XIcon className="icon-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
