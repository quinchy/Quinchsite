import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerIcon } from "@/components/icons";
import { showToast } from "@/components/toast";
import { QueryProvider } from "@/providers/query-provider";
import { type ContactFormData, contactValidation } from "@/validation/contact";

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
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <fieldset className="field">
        <div className="field__label-row">
          <label htmlFor="subject" className="field__label">
            Subject
          </label>
          {errors.subject && (
            <span className="field__error">{errors.subject.message}</span>
          )}
        </div>
        <input
          type="text"
          id="subject"
          placeholder="Enter a subject line..."
          autoComplete="off"
          className="field__input"
          {...register("subject")}
        />
      </fieldset>
      <fieldset className="field">
        <div className="field__label-row">
          <label htmlFor="body" className="field__label">
            Body
          </label>
          {errors.body && (
            <span className="field__error">{errors.body.message}</span>
          )}
        </div>
        <textarea
          id="body"
          placeholder="Please include your name, email address, and a brief description of your inquiry."
          autoComplete="off"
          className="field__textarea"
          {...register("body")}
        />
      </fieldset>
      <button
        type="submit"
        disabled={mutation.isPending}
        className="contact-form__submit"
      >
        {mutation.isPending ? (
          <>
            <SpinnerIcon className="icon-4 spin" />
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
    <QueryProvider>
      <ContactFormInner
        key={formKey}
        onSuccess={() => setFormKey((prev) => prev + 1)}
      />
    </QueryProvider>
  );
}
