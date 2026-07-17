"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({ type: "success", message: data.message || "Your message was sent successfully." });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto my-24 lg:px-8 xl:px-[8%]">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        
        {/* Left Side */}
        <div className="rounded-2xl border border-border p-10 flex flex-col justify-between">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-10">
              I’m excited to connect and discuss your next project.
              Reach out via email, phone, or the form, and I’ll get back
              to you promptly!
            </p>

            <ul className="space-y-8">
              <li className="flex items-center gap-4 text-base md:text-lg">
                <PhoneCall className="w-5 h-5 text-primary" />
                <span>01700592546</span>
              </li>

              <li className="flex items-center gap-4 text-base md:text-lg">
                <Mail className="w-5 h-5 text-primary" />
                <span className="break-all">
                  mohyet0007@gmail.com
                </span>
              </li>

              <li className="flex items-center gap-4 text-base md:text-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Gazipur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-2xl border border-border p-10 flex flex-col">
          
          <form className="flex flex-col gap-8 h-full" onSubmit={handleSubmit}>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-lg border border-border bg-transparent px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-lg border border-border bg-transparent px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="space-y-2 flex-1 flex flex-col">
              <label className="text-sm font-medium">Your Message</label>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full rounded-lg border border-border bg-transparent px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-primary flex-1"
              />
            </div>

            {status ? (
              <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-primary text-primary-foreground py-3 font-medium hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Sending..." : "Send Message →"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
