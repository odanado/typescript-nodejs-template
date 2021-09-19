module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "html"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};
