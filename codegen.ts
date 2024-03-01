
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://app.blawgsum.com/api/graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/types.ts": {
      plugins: ["typescript"]
    },
    "src/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: "types.ts"
      },
      plugins: ["typescript-operations", "typescript-urql"]
    },
  }
};

export default config;
