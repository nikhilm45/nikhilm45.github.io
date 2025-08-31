
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("flex min-h-screen flex-col")}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
