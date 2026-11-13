"use server";

export interface AIAdvisorResult {
  techStackRecommendations: string[];
  developmentRoadmap: Array<{
    step: string;
    description: string;
  }>;
}

export async function getAIProjectAdvisorRecommendations({
  projectDescription,
}: {
  projectDescription: string;
}): Promise<AIAdvisorResult> {
  const desc = projectDescription.toLowerCase();

  // Smart heuristic recommendations tailored to Prospira's tech stack
  let techStack: string[] = ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma ORM", "Docker"];

  if (desc.includes("mobile") || desc.includes("app") || desc.includes("ios") || desc.includes("android")) {
    techStack.push("React Native", "Expo", "Supabase");
  }
  if (desc.includes("ai") || desc.includes("agent") || desc.includes("bot") || desc.includes("llm")) {
    techStack.push("OpenAI API", "LangChain", "Vector DB / Pinecone", "FastAPI Python");
  }
  if (desc.includes("game") || desc.includes("3d") || desc.includes("unity") || desc.includes("webgl")) {
    techStack.push("Three.js", "WebGL", "Unity WebGL", "WebSockets");
  }
  if (desc.includes("saas") || desc.includes("dashboard") || desc.includes("crm") || desc.includes("b2b")) {
    techStack.push("Stripe Billing", "Auth0 / NextAuth", "Recharts", "Redis Cache");
  }
  if (desc.includes("realtime") || desc.includes("chat") || desc.includes("collaboration") || desc.includes("live")) {
    techStack.push("Socket.io", "Redis Pub/Sub", "LiveKit WebRTC");
  }

  // De-duplicate tech stack items
  techStack = Array.from(new Set(techStack));

  const developmentRoadmap = [
    {
      step: "Phase 1: Architecture Blueprint & UX Strategy",
      description:
        "Comprehensive scoping, schema modeling, high-fidelity Figma prototypes, and tech stack validation.",
    },
    {
      step: "Phase 2: Core Infrastructure & MVP Engine",
      description:
        "Building scalable backend APIs, authentication pipelines, database migrations, and reactive UI foundation.",
    },
    {
      step: "Phase 3: Domain Features & Advanced Integrations",
      description:
        "Implementing domain logic, third-party payment/AI APIs, real-time sync, and performance-critical pathways.",
    },
    {
      step: "Phase 4: Hardening, QA & Global Launch",
      description:
        "End-to-end stress testing, edge deployment on Vercel/AWS, SEO optimization, and live production rollout.",
    },
  ];

  // Optional slight simulated latency for real feel
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    techStackRecommendations: techStack,
    developmentRoadmap,
  };
}

