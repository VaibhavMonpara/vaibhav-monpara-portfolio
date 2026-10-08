import { useState, type FormEvent } from "react";
import { Check, Copy, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { buildMailto } from "@/lib/mailto";
import Section from "./Section";

const fieldClass =
  "mt-1.5 w-full rounded-md border border-rule bg-white px-3.5 py-2.5 text-base text-ink placeholder:text-graphite/60 transition-colors focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/20";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  const update = (field: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailto(profile.email, form.name, form.email, form.message);
    setOpened(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-tight tracking-tight">
            Hiring for a backend, full stack or platform role? I'd like to hear about it.
          </p>
          <p className="mt-5 max-w-[30rem] text-graphite">
            Email is the fastest way to reach me. Use the form to start a message, or write to me directly.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="link text-lg font-medium">
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-white/70 px-2.5 py-1 text-sm text-graphite transition-colors hover:border-ink hover:text-ink"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-cobalt" aria-hidden="true" />
                ) : (
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
              </button>
            </div>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-graphite transition-colors hover:text-ink"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Message me on LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="contact-note">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Your name
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                className={fieldClass}
              />
            </label>
            <label className="block text-sm font-medium">
              Your email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                className={fieldClass}
              />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Message
            <textarea
              required
              name="message"
              rows={6}
              value={form.message}
              onChange={update("message")}
              placeholder="The role, the team, or what you'd like to talk about"
              className={`${fieldClass} resize-y`}
            />
          </label>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="submit"
              className="rounded-md bg-ink px-5 py-3 font-medium text-paper transition-colors hover:bg-cobalt"
            >
              Open in my email app
            </button>
            <p id="contact-note" className="text-sm text-graphite">
              Opens your email app with this message ready to send.
            </p>
          </div>

          {opened && (
            <p role="status" className="rounded-md bg-cobalt-soft px-4 py-3 text-sm">
              Your email app should have opened with the message filled in. If it didn't, email me directly at{" "}
              <a href={`mailto:${profile.email}`} className="link font-medium">
                {profile.email}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
