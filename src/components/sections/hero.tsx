"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowDown } from "lucide-react";
import { socialLinks } from "@/lib/data";

export function Hero() {
  return (
    <Section
      id="hero"
      className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center text-center bg-muted/40"
    >
      <div className="z-10 animate-fade-in-up">
        <Image
          src="/images/profile.png"
          alt="Professional headshot"
          width={160}
          height={160}
          data-ai-hint="professional headshot"
          className="mx-auto mb-6 rounded-full border-4 border-primary shadow-lg"
          priority
        />
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
          Hello, I'm a Developer
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          I specialize in building exceptional, high-quality websites and
          applications. Passionate about clean code, modern technologies, and
          creating interactive user experiences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          {socialLinks.map((social) => (
            <Button key={social.name} asChild variant="outline" size="icon">
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">
              My Work <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
