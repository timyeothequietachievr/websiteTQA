const EMAIL_KEY = "tqa_playbook_email";

export function getStoredPlaybookEmail(): string | null {
  if (typeof window === "undefined") return null;
  const email = localStorage.getItem(EMAIL_KEY)?.trim().toLowerCase();
  return email && email.includes("@") ? email : null;
}

export function setStoredPlaybookEmail(email: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(EMAIL_KEY, email.trim().toLowerCase());
}

export function hasPlaybookAccess(): boolean {
  return Boolean(getStoredPlaybookEmail());
}
