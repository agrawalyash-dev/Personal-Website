import { createFileRoute } from "@tanstack/react-router";
import {
  SiCloudflare,
  SiConvex,
  SiCss,
  SiDiagramsdotnet,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiJenkins,
  SiLangchain,
  SiMongodb,
  SiMongoose,
  SiNeo4J,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPydantic,
  SiPython,
  SiQdrant,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiUbuntu,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrain, TbRoute, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const techCategories = [
  {
    category: "Programming Languages",
    items: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPython, name: "Python" },
      { icon: FaJava, name: "Java" },
    ],
  },
  {
    category: "Databases",
    items: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiRedis, name: "Redis" },
      { icon: SiQdrant, name: "QdrantDB" },
      { icon: SiNeo4J, name: "Neo4J" },
    ],
  },
  {
    category: "Object Mappers / ORMs",
    items: [
      { icon: SiPrisma, name: "Prisma" },
      { icon: SiMongoose, name: "Mongoose" },
      { icon: SiDrizzle, name: "Drizzle" },
    ],
  },
  {
    category: "Backend",
    items: [
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiNestjs, name: "Nest.js" },
      { icon: SiConvex, name: "Convex" },
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiFirebase, name: "Firebase" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { icon: SiReact, name: "React.js" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTanstack, name: "Tanstack" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiShadcnui, name: "ShadCN" },
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss, name: "CSS" },
    ],
  },
  // {
  //   category: "AI & LLM",
  //   items: [
  //   { icon: SiLangchain, name: "LangChain" },
  //   { icon: TbRoute, name: "LangGraph" },
  //   { icon: SiPydantic, name: "Pydantic AI" },
  //   { icon: SiHuggingface, name: "Hugging Face" },
  //   { icon: SiOpenai, name: "OpenAI" },
  //   { icon: SiPytorch, name: "PyTorch" },
  //   { icon: SiTensorflow, name: "TensorFlow" },
  //   { icon: SiScikitlearn, name: "Scikit-learn" },
  //   { icon: SiQdrant, name: "Qdrant" },
  //   { icon: SiPinecone, name: "Pinecone" },
  //   { icon: SiOllama, name: "Ollama" },
  // ],
  // },
  {
    category: "DevOps & Cloud",
    items: [
      { icon: SiDocker, name: "Docker" },
      { icon: FaAws, name: "AWS" },
      { icon: SiGooglecloud, name: "GCP" },
      { icon: SiCloudflare, name: "Cloudflare" },
      { icon: SiJenkins, name: "Jenkins" },
      { icon: SiGit, name: "Git" },
      { icon: SiGithub, name: "GitHub" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: VscVscode, name: "VS Code" },
      { icon: SiUbuntu, name: "Linux (Ubuntu)" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiFigma, name: "Figma" },
      { icon: SiDiagramsdotnet, name: "Draw.io" },
    ],
  },
];

export const Route = createFileRoute("/technologies")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <section className="pt-4 text-muted-foreground">
        <h1 className="text-4xl font-medium tracking-tight text-primary md:text-5xl text-balance">
          Technologies
        </h1>
        <p className="mt-2 max-w-xl text-balance">
          Languages, frameworks & tools I build with
        </p>
      </section>

      <div className="mt-12 flex flex-col gap-8">
        {techCategories.map((cat) => (
          <section key={cat.category}>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                {cat.category}
              </h2>
              <span className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs text-muted-foreground/60">
                {cat.items.length}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:border-primary/50"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md border bg-muted">
                    <item.icon className="size-4 text-muted-foreground" />
                  </div>
                  <span className="truncate text-xs leading-tight font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
