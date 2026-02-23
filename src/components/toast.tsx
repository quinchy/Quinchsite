"use client";

import { useState, useEffect } from "react";
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
  toastStore.listeners.forEach((listener) => listener([...toastStore.toasts]));

  setTimeout(() => {
    toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
    toastStore.listeners.forEach((listener) =>
      listener([...toastStore.toasts]),
    );
  }, 3000);
};

const removeToast = (id: string) => {
  toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
  toastStore.listeners.forEach((listener) => listener([...toastStore.toasts]));
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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`border border-dashed bg-background px-4 py-3 text-sm font-medium toast-slide-in flex items-center justify-between gap-3 ${
            toast.type === "success"
              ? "border-primary/50 text-primary"
              : toast.type === "error"
                ? "border-rose-500/80 text-rose-500/80"
                : "border-primary/50 text-primary"
          }`}
        >
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            aria-label="Close toast"
          >
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
