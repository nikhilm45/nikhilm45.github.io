import {
  Section,
  SectionTitle,
  SectionSubtitle,
} from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" className="bg-muted/40">
      <SectionTitle>Education & Certifications</SectionTitle>
      <SectionSubtitle>
        My academic background and qualifications.
      </SectionSubtitle>
      <div className="mt-12 grid gap-8 md:grid-cols justify-center items-center">
        {education.map((edu) => (
          <Card key={edu.institution} className="flex">
            <div className="p-6 flex items-center justify-center bg-primary/5 text-primary">
              <edu.icon className="h-10 w-10" />
            </div>
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {edu.degree}
                </CardTitle>
                <p className="text-muted-foreground">{edu.institution}</p>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
