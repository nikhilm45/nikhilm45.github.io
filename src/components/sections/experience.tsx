import {
  Section,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Building } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" className="bg-muted/40">
      <SectionTitle>Work Experience</SectionTitle>
      <SectionSubtitle>
        My professional journey as a software developer.
      </SectionSubtitle>
      <div className="relative mt-12">
        <div className="absolute left-0 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
        {experience.map((job, index) => (
          <div
            key={job.company}
            className="group relative mb-8 pl-8 md:pl-10 md:pr-10"
          >
            <div
              className={`flex w-full items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } pr-8 md:pr-10 pl-8 md:pl-10`}
            >
              <div className="w-full md:w-5/12">
                <Card className="transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-headline text-xl">
                        {job.role}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <CardDescription className="flex items-center gap-2 pt-1 text-base">
                      <Building className="h-4 w-4" /> {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="absolute left-0 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary transition-transform duration-300 group-hover:scale-125 md:left-1/2"></div>
          </div>
        ))}
      </div>
    </Section>
  );
}
