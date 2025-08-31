"use client";

import { useState } from "react";
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
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/lib/data";
import { Github, PlayCircle, ExternalLink } from "lucide-react";

export function Projects() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SectionSubtitle>
        A selection of my work. See what I've been building.
      </SectionSubtitle>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                {project.title}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 bg-muted/30 p-4">
              {project.repoLink && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedVideoUrl && (
        <Dialog
          open={!!selectedVideoUrl}
          onOpenChange={(isOpen) => !isOpen && setSelectedVideoUrl(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Project Demo</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </Section>
  );
}
