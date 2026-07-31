import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { SiLeetcode, SiX } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Route = createFileRoute("/profiles")({
  component: RouteComponent,
});

const socialProfiles = [
  {
    icon: FaLinkedin,
    platform: "LinkedIn",
    handle: "@agrawalyash-dev",
    url: "https://www.linkedin.com/in/agrawalyash-dev/",
    colorBg: "bg-[#0A66C20d]",
    color: "text-[#0A66C2]",
    span: "md:col-span-2",
  },
  {
    icon: SiX,
    platform: "X (Twitter)",
    handle: "@agrawalyash_dev",
    url: "https://x.com/agrawalyash_dev",
    colorBg: "bg-[#1118270d]",
    color: "text-[#111827] dark:text-foreground",
    span: "",
  },
  {
    icon: SiLeetcode,
    platform: "Leetcode",
    handle: "@agrawalyash-dev",
    url: "https://leetcode.com/u/agrawalyash-dev/",
    colorBg: "bg-yellow-100",
    color: "text-yellow-800",
    span: "",
  },
  {
    icon: FaGithub,
    platform: "Github",
    handle: "@agrawalyash-dev",
    url: "https://github.com/agrawalyash-dev",
    colorBg: "bg-muted",
    color: "text-black",
    span: "md:col-span-2",
  },
];

function RouteComponent() {
  return (
    <div>
      <section className="pt-4 text-muted-foreground">
        <h1 className="text-4xl font-medium tracking-tight text-primary md:text-5xl text-balance">
          Connect with Me Online
        </h1>
        <p className="mt-2 max-w-xl text-balance">
          You can find me across the platforms below, where I share projects,
          ideas, and the occasional behind-the-scenes look at what I'm building.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-12">
        {socialProfiles.map((p) => (
          <a
            key={p.platform}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group no-underline ${p.span}`}
          >
            <Card className="flex h-full flex-col transition-colors hover:border-primary/50">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div
                  className={`flex size-10 items-center justify-center rounded-md border ${p.colorBg}`}
                >
                  <p.icon className={`size-5 ${p.color}`} />
                </div>
                <ExternalLink className="size-4 text-muted-foreground hover:text-primary" />
              </CardHeader>

              <CardContent className="flex-1 space-y-2">
                <div>
                  <h3 className="leading-none font-semibold test-base">
                    {p.platform}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {p.handle}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  View profile →
                </span>
              </CardFooter>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
}
