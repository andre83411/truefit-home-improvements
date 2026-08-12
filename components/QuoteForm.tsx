"use client";

import { FormEvent, useState } from "react";

export function QuoteForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setState("idle");
      return;
    }
    const data = new FormData(form);
    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      const body = await response.json() as { message?: string };
      if (!response.ok) throw new Error(body.message || "Unable to send your request.");
      setState("success");
      setMessage(body.message || "Thank you! We received your request and will be in touch.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please call or email us instead.");
    }
  }

  return (
    <form className="quote-form" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true"><label>Leave this blank<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-grid">
        <label>Full name <span>*</span><input name="name" autoComplete="name" required minLength={2} /></label>
        <label>Phone <span>*</span><input name="phone" type="tel" autoComplete="tel" required pattern="[0-9()+ .-]{7,}" /></label>
        <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required /></label>
        <label>Project ZIP code <span>*</span><input name="zip" inputMode="numeric" autoComplete="postal-code" required pattern="[0-9]{5}(-[0-9]{4})?" /></label>
        <label>Project type <span>*</span><select name="projectType" required defaultValue=""><option value="" disabled>Select one</option><option>PERGOLUX pergola installation</option><option>General handyman</option><option>Trim or interior doors</option><option>Painting or wallpaper</option><option>LVP flooring</option><option>Drywall or siding repair</option><option>Fixtures</option><option>Other</option></select></label>
        <label>Desired timeframe <span>*</span><select name="timeframe" required defaultValue=""><option value="" disabled>Select one</option><option>As soon as possible</option><option>Within 2–4 weeks</option><option>Within 1–3 months</option><option>Flexible / planning ahead</option></select></label>
        <label className="full">Project description <span>*</span><textarea name="description" rows={6} required minLength={20} placeholder="Tell us what you’d like done, the rooms or areas involved, and anything else that may help." /></label>
      </div>
      <label className="consent"><input type="checkbox" name="consent" required /> I agree that TrueFit Home Improvements may contact me about this request. <span>*</span></label>
      <button className="button button-gold submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send Quote Request"}</button>
      <p className="form-note">Please don’t include sensitive personal or financial information.</p>
      {state !== "idle" && state !== "sending" && <div className={`form-status ${state}`} role="status">{message}</div>}
    </form>
  );
}
