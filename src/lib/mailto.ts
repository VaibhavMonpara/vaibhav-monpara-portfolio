/** Builds a mailto: link so the visitor's own email app sends the message. */
export function buildMailto(to: string, name: string, email: string, message: string): string {
  const subject = `Hello from ${name.trim()}`;
  const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
