import { site } from "@/lib/site";

// Placeholder until the WordPress content is migrated. The live site keeps
// serving from WordPress until the domain cuts over, so only Vercel preview
// URLs ever show this.
export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-4">
      <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
    </main>
  );
}
