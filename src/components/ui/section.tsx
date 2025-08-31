import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    className?: string;
    children: React.ReactNode;
}

export function Section({ as: Comp = 'section', className, children, ...props }: SectionProps) {
    return (
        <Comp className={cn("container", className)} {...props}>
            {children}
        </Comp>
    );
}

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: React.ReactNode;
}

export function SectionTitle({ as: Comp = 'h2', className, children, ...props }: SectionTitleProps) {
    return (
        <Comp className={cn("mb-8 text-center text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl", className)} {...props}>
            {children}
        </Comp>
    );
}

export function SectionSubtitle({ as: Comp = 'p', className, children, ...props }: SectionTitleProps) {
    return (
        <Comp className={cn("mx-auto max-w-[700px] text-center text-muted-foreground md:text-xl", className)} {...props}>
            {children}
        </Comp>
    );
}