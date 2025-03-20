import LightsGenerator from "@/app/components/LightsGenerator";
import BlogsList from "./BlogsList";
import { DevToPost } from "./types";

export default async function BlogPage() {
  const USER_NAME = `mohammad_kh4441`;
  const DEV_DOT_TO_ENDPOINT = `https://dev.to/api/articles?username=${USER_NAME}`;

  const data = await fetch(DEV_DOT_TO_ENDPOINT);
  const posts: DevToPost[] = await data.json();

  return (
    <div className="min-h-screen  page relative z-0">
      <LightsGenerator />
      <div className="page-overlay"></div>

      <main className="container py-8">
        <section>
          <BlogsList posts={posts}></BlogsList>
        </section>
      </main>
    </div>
  );
}

// Sample blog post data
