export default {
  root: "src/app",
  cache: {
    tags: ["articles"],
    ttl: 200,
  },
  export(paths) {
    return [...paths, { path: "/popular" }];
  },
};
