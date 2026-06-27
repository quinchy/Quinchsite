import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { showToast } from "@/components/ui/toast";
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
        let message = "Failed to send email";
        try {
          const error = await response.json();
          message = error.message || message;
        } catch {}
        throw new Error(message);
      }
      return response.json();
    },
    onSuccess: () => {
      showToast("Your email has been sent.", "success");
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
      className="flex flex-col spacing-xs padding-lg"
    >
      <fieldset className="flex flex-col spacing-xs border-0">
        <div className="flex items-center spacing-xs">
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          {errors.subject && (
            <span className="text-xs text-red-500">
              {errors.subject.message}
            </span>
          )}
        </div>
        <Input
          type="text"
          id="subject"
          placeholder="Enter a subject line..."
          autoComplete="off"
          {...register("subject")}
        />
      </fieldset>
      <fieldset className="flex flex-col spacing-xs border-0">
        <div className="flex items-center spacing-xs">
          <label htmlFor="body" className="font-semibold">
            Body
          </label>
          {errors.body && (
            <span className="text-xs text-red-500">{errors.body.message}</span>
          )}
        </div>
        <Textarea
          id="body"
          placeholder="Please include your name, email address, and a brief description of your inquiry."
          autoComplete="off"
          {...register("body")}
        />
      </fieldset>
      <Button
        type="submit"
        disabled={mutation.isPending}
        variant="solid"
        className="animation-normal"
      >
        {mutation.isPending ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="size-4 animate-spin"
            >
              <path
                fill="currentColor"
                d="M23 9v6h-1v2h-2v-2h1V9h-1V7h-1V5h-2V4h-2V3h-3V1h3v1h2v1h2v1h1v1h1v2h1v2z"
              />
            </svg>
            Sending Email...
          </>
        ) : (
          "Send Email"
        )}
      </Button>
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
