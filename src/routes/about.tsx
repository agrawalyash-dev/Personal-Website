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
    year: "2026 — Present",
    title: "Full Stack Developer Intern",
    org: "Codeflame Technology Pvt. Ltd.",
    desc:
      "Contributing to real-world full-stack projects by building responsive frontend experiences, backend APIs, and database-driven applications while working with modern development workflows and production-focused engineering practices.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2024 — 2026",
    title: "Software Engineer",
    org: "Freelance · Self-Employed",
    desc:
      "Delivered end-to-end websites, web apps, and backend APIs for 4+ clients — third-party integrations, payment gateways, and admin dashboards, each shipped on time.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2023 — 2027",
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
              Hi, I'm Yash Agrawal, a software engineer focused on building
              complex, high-scale web applications and solving technically
              challenging problems that require deep thinking beyond routine
              development.
              <br />
              <br />
              My specialization is Communication & Social Platforms — the
              systems that enable people, communities, and organizations to
              communicate, collaborate, and build meaningful networks online.
              I’m particularly interested in the engineering challenges behind
              real-time communication, distributed systems, privacy, security,
              networking, and intelligent interaction.
              <br />
              <br />
              My work in this space includes Zenvaa Meet, a WebRTC-based
              end-to-end encrypted video calling platform, and Zenvaa Chat, an
              end-to-end encrypted real-time messaging application. I’m
              currently building VUIN, an exclusive social networking platform
              for technology professionals, while also experimenting with BroML,
              exploring how agentic systems can enable new forms of
              communication and professional networking.
              <br />
              <br />
              I’m drawn to problems where engineering depth matters — real-time
              systems, scalability, security, distributed architectures, and
              emerging ways of connecting people and intelligent systems.
              <br />
              <br />
              My long-term goal is to go deep into the Communication & Social
              Platforms domain and contribute to building the next generation of
              communication and networking systems.
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
