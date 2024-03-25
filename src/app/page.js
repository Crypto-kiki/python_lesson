// src/app/page.js

import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      블로그를 만들어 봅시다!
    </main>
  );
}
