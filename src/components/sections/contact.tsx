"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      <Send className="mr-2 h-4 w-4" />
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function Contact() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const [progressMsg, setProgressMsg] = useState("");
  const [progressSubMsg, setProgressSubMsg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProgressMsg("This functionality is under progress!");
    setProgressSubMsg("We are working on it. Stay tuned!");
  }

  useEffect(() => {
    if (state.message) {
      if (Object.keys(state.errors).length > 0) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <Section id="contact" className="bg-muted/40">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionSubtitle>
        Have a project in mind or just want to say hello? I'd love to hear from
        you.
      </SectionSubtitle>
      <Card className="mx-auto mt-12 max-w-xl">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} action={dispatch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your Name" required />
              {state.errors?.name && (
                <p className="text-sm text-destructive">
                  {state.errors.name[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
              {state.errors?.email && (
                <p className="text-sm text-destructive">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                rows={6}
              />
              {state.errors?.message && (
                <p className="text-sm text-destructive">
                  {state.errors.message[0]}
                </p>
              )}
            </div>
            <SubmitButton />
          </form>
          {progressMsg && (
            <div className="mt-4 text-center flex flex-col items-center justify-center gap-2">
              <p className="text-red-600 font-semibold flex items-center gap-2">
                <span role="img" aria-label="alert">
                  🚧
                </span>
                {progressMsg}
              </p>
              {progressSubMsg && (
                <span className="text-xs text-red-400 mt-1">
                  {progressSubMsg}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
}
