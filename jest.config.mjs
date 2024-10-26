const config = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  roots: ["tests", "src"],
};

export default config;
