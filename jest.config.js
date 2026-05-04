/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          moduleResolution: 'node',
          paths: {
            '@/*': ['./src/*'],
          },
        },
      },
    ],
  },
  // Ignore Next.js build output and node_modules
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  // Allow importing TSX files
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};

module.exports = config;
