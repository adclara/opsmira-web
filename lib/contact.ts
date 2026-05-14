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
  const res = await fetch(
    "https://formsubmit.co/ajax/adrianclara@opsmira.ai",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        "Preferred Contact": data.preferredContact,
        "Industry": data.industry,
        "Monthly Request Volume": data.requestVolume,
        "Most Urgent Outcome": data.urgentOutcome,
        "Workflow Problem": data.problem,
        "Current Tools": data.tools,
        _subject: `OpsMira intake — ${data.company || data.name}`,
        _gotcha: data._gotcha,
        _template: "table",
      }),
    }
  );

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(
      (body as { message?: string } | null)?.message ??
        "Submission failed. Please try again."
    );
  }
}
