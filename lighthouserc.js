module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000/test", "http://localhost:3000/"],
      startServerCommand: "npm run dev",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
      },
    },
  },
};
