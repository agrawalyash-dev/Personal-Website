import { createFileRoute } from "@tanstack/react-router";
import { Brain, Code, Dot, MapPin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Badge } from "#/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function scrollToPortfolio() {
  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
}

function Home() {
  return (
    <div>
      <div>
        <div className="relative overflow-hidden rounded hidden xl:block">
          <img
            src="/hero-bg.webp"
            alt="hero banner"
            className="aspect-1754/700 object-cover rounded-xl"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,20,15,0.80) 0%, rgba(10,20,15,0.30) 45%, rgba(10,20,15,0.05) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,20,15,0.55) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0">
            <div className="absolute top-8 left-8">
              <div className="inline-flex items-center gap-3 rounded border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1.5 text-primary-foreground backdrop-blur-2xl">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                Available for Opportunities
              </div>
            </div>
            <div className="absolute top-24 left-8 flex flex-col gap-4">
              <h1 className="text-6xl font-bold font-heading text-primary-foreground">
                Software Engineer <br />& AI Engineer
              </h1>
              <p className="w-sm text-primary-foreground/80">
                I am a software engineer, having good experience in building
                highly complex web applications. I enjoy working on problems
                that are technically challenging and require deep thinking, not
                just routine development work.
              </p>
              <div className="flex items-center gap-4">
                <Button
                  className="p-6 text-base"
                  variant={"secondary"}
                  onClick={scrollToPortfolio}
                >
                  View Portfolio <MoveRight className="size-xl" />
                </Button>
                <a
                  target="_blank"
                  href="https://drive.google.com/drive/folders/10xXWw4GLVCvuJXbUnUyPm08JGXhopHoJ?usp=sharing"
                >
                  <Button
                    className="p-6 text-base bg-transparent text-background"
                    variant={"outline"}
                  >
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="size-4.5" />
            <p className="text-sm">Vadodara, Gujarat, India</p>
          </div>
        </div>

        <div className="xl:hidden">
          <div className="inline-flex items-center gap-3 rounded bg-foreground text-sm px-3 py-1.5 text-primary-foreground backdrop-blur-2xl">
            <span className="size-2 animate-pulse rounded-full bg-background" />
            Available for Opportunities
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h1 className="text-2xl font-bold text-primary">
              Software Engineer <br />& AI Engineer
            </h1>
            <p className="text-muted-foreground">
              I am a software engineer, having good experience in building
              highly complex web applications. I enjoy working on problems that
              are technically challenging and require deep thinking, not just
              routine development work.
            </p>
            <div className="flex items-center gap-4 mt-2 mb-4">
              <Button
                className="text-sm p-5"
                onClick={scrollToPortfolio}
              >
                View Portfolio <MoveRight className="size-xl" />
              </Button>
              <a
                target="_blank"
                href="https://drive.google.com/drive/folders/10xXWw4GLVCvuJXbUnUyPm08JGXhopHoJ?usp=sharing"
              >
                <Button
                  className="text-sm p-5 bg-transparent"
                  variant={"outline"}
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            <Card className="gap-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold sm:text-2xl">
                  30+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-snug capitalize sm:text-lg">
                  Technologies
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Languages, frameworks, databases, and dev tools across the
                  full stack.
                </p>
              </CardContent>
            </Card>
            <Card className="gap-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold sm:text-2xl">
                  3+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-snug capitalize sm:text-lg">
                  Years of development experience
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  2023 - present
                </p>
              </CardContent>
            </Card>
            <Card className="gap-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold sm:text-2xl">
                  25+
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-snug capitalize sm:text-lg">
                  Projects developed
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Personal, freelance, and side projects built from scratch.
                </p>
              </CardContent>
            </Card>
            <Card className="gap-1">
              <CardHeader>
                <CardTitle className="text-xl font-bold sm:text-2xl">
                  90%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-snug capitalize sm:text-lg">
                  Project completion rate
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Delivered end-to-end, with lessons learned from every
                  engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12" id="portfolio">
        <div className="flex items-center gap-4 text-muted-foreground text-lg">
          01 <Dot className="size-6" /> <span>Portfolio</span>
        </div>
        <h2 className="mt-2 mb-8 font-heading text-4xl font-semibold md:text-5xl">
          Selected Work<span className="text-primary">.</span>
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-8">
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardDescription>Project</CardDescription>
              <CardAction>
                <a href="https://www.broml.com">
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
                </a>
              </CardAction>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-xl font-semibold sm:text-2xl">BroML</p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                A multi-agent AI platform where specialized agents — an email
                agent, a coding agent, and more — collaborate with each other to
                solve tasks outside their own expertise.
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4 bg-primary/10"
              >
                In Progress
              </Badge>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardDescription>Project</CardDescription>
              <CardAction>
                <a
                  href="https://meet.zenvaa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
                </a>
              </CardAction>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-xl font-semibold sm:text-2xl">
                Zenvaa Meet
              </p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                An end-to-end encrypted video call web app — Convex backend for
                realtime signaling, and a React + TypeScript frontend enabling
                peer-to-peer video calls via a simple call code.
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                E2EE
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                TypeScript
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                React.js
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Webrtc
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Convex BAAS
              </Badge>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardDescription>Project</CardDescription>
              <CardAction>
                <a href="https://chat.zenvaa.com">
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
                </a>
              </CardAction>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-xl font-semibold sm:text-2xl">Zenvaa Chat</p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                An end-to-end encrypted chat web application — designed the E2EE
                architecture and key-exchange flow, built a NestJS backend with
                Clerk authentication and ConvexDB (public key storage, username
                system, rate-limited messaging APIs), and a React + TypeScript
                frontend with responsive UI, live user search, and realtime
                messaging via Convex subscriptions.
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                React.js
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                TypeScript
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Tailwind CSS
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                E2EE
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                NestJS
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                ConvexDB
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Clerk Auth
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                ShadCN
              </Badge>
            </CardFooter>
          </Card>
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardDescription>Project</CardDescription>
              <CardAction>
                <a href="https://agrawalyash.notion.site/Vanilla-Junction-Case-Study-3a35c8bb362a80468165c12ba23ad11f">
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                  </Button>
                </a>
              </CardAction>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-xl font-semibold sm:text-2xl">
                Vanilla Junction
              </p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                A full-stack MERN case study for an online ice cream delivery
                platform, built through a structured 4-phase learning journey
                covering UML design, Vanilla JavaScript frontend, secure REST
                APIs with Node.js & MongoDB, and a React + TypeScript admin
                dashboard.
              </p>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                TypeScript
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                JavaScript
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                React.js
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Node.js
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Express.js
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                MongoDB
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Razorpay
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Twilio
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Mongoose ODM
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Tailwind CSS
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                HTML5
              </Badge>
              <Badge
                variant={"outline"}
                className="p-3 text-muted-foreground sm:p-4"
              >
                Cascading Style Sheets (CSS)
              </Badge>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-4 text-muted-foreground text-lg">
            02 <Dot className="size-6" /> <span>Capabilities</span>
          </div>
          <h2 className="mt-2 mb-8 font-heading text-4xl font-semibold md:text-5xl">
            Core Expertise<span className="text-primary">.</span>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2">
            <Card className="gap-3">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-xl border bg-secondary sm:size-14">
                  <Code className="size-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4 text-lg font-serif font-semibold sm:text-xl">
                  Software Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground sm:text-base">
                  As a full-stack software engineer, I am capable of building
                  both the frontend and backend of web applications, including
                  real-time and cloud-native systems. I follow a security-first
                  approach and a structured development process, using SDLC
                  models best suited to each project.
                </p>
              </CardContent>
            </Card>
            <Card className="gap-3">
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-xl border bg-secondary sm:size-14">
                  <Brain className="size-5 text-muted-foreground" />
                </div>
                <CardTitle className="mt-4 text-lg font-serif font-semibold sm:text-xl">
                  AI Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Alongside full-stack development, I am exploring the field of
                  AI engineering, where I specialize in building AI-powered
                  applications with agentic and generative AI, backed by
                  scalable and well-structured AI workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <img
          src="/futuristic-bharat.webp"
          alt="futuristic bharat banner"
          className="aspect-1754/700 object-cover mt-12 rounded-xl"
        />
      </div>
    </div>
  );
}
