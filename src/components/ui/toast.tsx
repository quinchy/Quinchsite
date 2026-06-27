import { useEffect, useState } from "react";

export type ToastType = "success" | "warning" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

declare global {
  interface Window {
    __quinchToasts?: Toast[];
  }
}

const TOAST_CHANGE_EVENT = "quinch:toast-change";
const TOAST_DURATION = 3000;

const TOAST_STYLES: Record<ToastType, string> = {
  success: "text-primary border-primary/50",
  warning: "text-primary border-primary/50",
  info: "text-primary border-primary/50",
  error: "text-rose-500/80 border-rose-500/80",
};

const getToasts = () => window.__quinchToasts ?? [];

const setGlobalToasts = (toasts: Toast[]) => {
  window.__quinchToasts = toasts;
  window.dispatchEvent(new Event(TOAST_CHANGE_EVENT));
};

export const showToast = (message: string, type: ToastType = "info") => {
  if (typeof window === "undefined") return;

  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const toast: Toast = { id, message, type };

  setGlobalToasts([...getToasts(), toast]);

  setTimeout(() => {
    removeToast(id);
  }, TOAST_DURATION);
};

const removeToast = (id: string) => {
  if (typeof window === "undefined") return;

  setGlobalToasts(getToasts().filter((t) => t.id !== id));
};

export default function Toast() {
  const [toasts, setVisibleToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const syncToasts = () => setVisibleToasts([...getToasts()]);

    syncToasts();
    window.addEventListener(TOAST_CHANGE_EVENT, syncToasts);

    return () => {
      window.removeEventListener(TOAST_CHANGE_EVENT, syncToasts);
    };
  }, []);

  return (
    <div
      className="fixed right-md bottom-md z-50 flex flex-col spacing-xs"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center justify-between spacing-sm border border-dashed bg-background padding-md text-sm font-medium toast-enter ${TOAST_STYLES[toast.type]}`}
        >
          <span>{toast.message}</span>
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="animation-fast hover:opacity-70"
            aria-label="Close toast"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="size-4"
            >
              <path
                fill="currentColor"
                d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
