"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-blue-600 px-5 py-2 text-white disabled:opacity-50"
    >
      {pending ? "Publishing..." : "Publish Post"}
    </button>
  );
}