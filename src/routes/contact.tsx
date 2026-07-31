import { createFileRoute } from "@tanstack/react-router";
import { Loader, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "#/components/ui/toast";
import { Button } from "#/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

const FORMSPARK_ENDPOINT = "https://submit-form.com/eci8gHntO";

function RouteComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.add({ title: "Please fill in all required fields." });
      return;
    }

    setIsSubmitting(true);
    const submitPromise = fetch(FORMSPARK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "New message from portfolio site",
        message: formData.message,
      }),
    });

    toast.promise(submitPromise, {
      loading: "Sending your message...",
      success: () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        return "Message sent! I'll get back to you soon.";
      },
      error: "Something went wrong. Please try again or email me directly.",
    });

    try {
      const res = await submitPromise;
      if (!res.ok) throw new Error("Failed to submit");
    } catch {
      // error toast already handled by toast.promise
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <section className="pt-4 text-muted-foreground">
        <h1 className="text-4xl font-medium tracking-tight text-primary md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-2 max-w-xl text-balance">
          Have a project in mind, a role to discuss, or just want to say hi?
          Drop a message below.
        </p>
      </section>

      <Card className="lg:col-span-3 mt-12 py-5">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me a bit about what you have in mind..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting
                ? (
                  <>
                    <Loader className="size-4 animate-spin" />
                    Sending...
                  </>
                )
                : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
