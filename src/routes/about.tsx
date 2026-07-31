import {
  Timeline,
  TimelineConnector,
  TimelineIndicator,
  TimelineItem,
} from "#/components/timeline";
import { Badge } from "#/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness, Dot, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

const journey = [
  {
    year: "2024 — Present",
    title: "Software Engineer",
    org: "Freelance · Self-Employed",
    desc:
      "Delivered end-to-end websites, web apps, and backend APIs for 4+ clients — third-party integrations, payment gateways, and admin dashboards, each shipped on time.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2023 — Present",
    title: "BCA Honours",
    desc: "Bachelor of Computer Applications (Honours)",
    icon: GraduationCap,
  },
  {
    year: "2022",
    title: "HSC — Commerce",
    desc: "Higher Secondary Certificate.",
    icon: GraduationCap,
  },
  {
    year: "2020",
    title: "SSC",
    desc: "Secondary School Certificate.",
    icon: GraduationCap,
  },
];

function RouteComponent() {
  return (
    <div>
      <section className="pt-4 text-muted-foreground">
        <h1 className="text-4xl font-medium tracking-tight text-primary md:text-5xl">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:items-end">
          <p className="mt-2 max-w-xl text-balance">
            Software Engineer building web apps and AI-powered systems — from
            first commit to production.
          </p>

          <img
            src="/profile-image.png"
            alt="Yash Agrawal"
            className="border bg-muted rounded-full object-cover size-16"
          />
        </div>
      </section>

      <div className="mt-6 sm:mt-12 flex flex-col gap-12">
        <Card>
          <CardContent>
            <p className="text-base leading-relaxed text-muted-foreground">
              Hi, I'm Yash Agrawal, a Software Engineer, having good experience
              in building highly complex web applications. I enjoy working on
              problems that are technically challenging and require deep
              thinking, not just routine development work.
              <br />
              <br />
              Presently, I am exploring different domains like aerospace, AI,
              cloud computing, etc. to figure out which field I want to commit
              myself to in the long run. I have not finalized on any one domain
              as of now, and honestly, I am in no hurry to do so.
              <br />
              <br />
              The only thing I am clear about is that I want to be part of a
              domain which is highly future innovation oriented, something where
              real advancement is happening and not just surface level changes.
              Once I find that space, I want to grow deeply into it rather than
              just working on the surface.
            </p>
          </CardContent>
        </Card>

        <div>
          <div className="flex items-center gap-4 text-muted-foreground text-lg">
            01 <Dot className="size-6" /> <span>Journey</span>
          </div>
          <h2 className="mt-4 mb-8 font-heading text-4xl font-semibold md:text-5xl">
            Education & Experience<span className="text-primary">.</span>
          </h2>

          <Timeline>
            {journey.map((j, i) => (
              <TimelineItem key={i}>
                <TimelineConnector />
                <TimelineIndicator icon={j.icon} />
                <Card>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-base font-semibold">
                        {j.title}
                      </CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {j.org}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="font-mono text-xs text-muted-foreground p-3"
                    >
                      {j.year}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {j.desc}
                    </p>
                  </CardContent>
                </Card>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
