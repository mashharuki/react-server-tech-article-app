import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime
    );

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

export const getPopular = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { limit } = args;
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles
      .sort((a, b) => (b.viewCount ?? 0) - (a.viewCount ?? 0))
      .slice(0, limit ?? 10);
    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});
