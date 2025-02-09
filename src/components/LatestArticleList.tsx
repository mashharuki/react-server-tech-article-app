"use client";

import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { Article } from "../domain/Article";

export const LatestArticleList = () => {
  const articlesData = useQuery(api.articles.get);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!articlesData) return;

    const articles = articlesData?.map((a) => {
      return new Article(
        a.id,
        a.title,
        a.description,
        a.author,
        a.createdAt,
        a.viewCount
      );
    });
    setArticles(articles);
  }, [articlesData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <span key={index}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  );
};
