export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  preferredContact: string;
  phone: string;
  industry: string;
  requestVolume: string;
  urgentOutcome: string;
  problem: string;
  tools: string;
  _gotcha: string;
}

export async function submitContact(data: ContactFormData): Promise<void> {
  const res = await fetch("/api/contact.php", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(
      (body as { error?: string } | null)?.error ??
        "Submission failed. Please try again."
    );
  }
}
