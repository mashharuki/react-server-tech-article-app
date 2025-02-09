import { Suspense } from "react";
import ArticleCard from "./ArticleCard";

type ArticleJson = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const getArticles = async (limit: number) => {
  const response = await fetch(
    `http://localhost:3000/api/articles/popular?limit=${limit}`
  );
  console.log(response);

  const data = await response.json();
  return data;
};

export default async function ArticleListContent({ limit }: { limit: number }) {
  const articles = (await getArticles(limit)) as ArticleJson[];
  if (articles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <span key={article.id}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  );
}

export function PopularArticleList({ limit }: { limit?: number }) {
  const limitNumber = limit || 10;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <ArticleListContent limit={limitNumber} />
    </Suspense>
  );
}
