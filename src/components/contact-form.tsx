"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactValidation, type ContactFormData } from "@/validation/contact";
import { showToast } from "@/components/toast";
import { SpinnerIcon } from "@/components/icons";

function ContactFormInner({ onSuccess }: { onSuccess: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      subject: "",
      body: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send email");
      }
      return response.json();
    },
    onSuccess: (data: { remaining: number }) => {
      const messageText = data.remaining === 1 ? "message" : "messages";
      showToast(
        `Your email has been sent. ${data.remaining} ${messageText} left for this day.`,
        "success",
      );
      onSuccess();
    },
    onError: (error: Error) => {
      showToast(error.message, "error");
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 px-8 py-4"
    >
      <fieldset className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          {errors.subject && (
            <span className="text-red-500 text-xs">
              {errors.subject.message}
            </span>
          )}
        </div>
        <input
          type="text"
          id="subject"
          placeholder="Enter a subject line..."
          autoComplete="off"
          className="transition-all text-sm border border-border px-2 py-1 focus-visible:ring-4 ring-border focus-visible:border-primary focus-visible:outline-none"
          {...register("subject")}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="body" className="font-semibold">
            Body
          </label>
          {errors.body && (
            <span className="text-red-500 text-xs">{errors.body.message}</span>
          )}
        </div>
        <textarea
          id="body"
          placeholder="Please include your name, email address, and a brief description of your inquiry."
          autoComplete="off"
          className="resize-none transition-all min-h-30 max-h-30 text-sm border border-border px-2 py-1 focus-visible:ring-4 ring-border focus-visible:border-primary focus-visible:outline-none"
          {...register("body")}
        />
      </fieldset>
      <button
        type="submit"
        disabled={mutation.isPending}
        className="mt-2 bg-primary text-sm font-semibold brightness-75 transition-all duration-300 active:brightness-85 active:scale-[98%] hover:brightness-100 text-background py-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {mutation.isPending ? (
          <>
            <SpinnerIcon className="animate-spin size-4" />
            Sending Email...
          </>
        ) : (
          "Send Email"
        )}
      </button>
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return (
    <ContactFormInner
      key={formKey}
      onSuccess={() => setFormKey((prev) => prev + 1)}
    />
  );
}
