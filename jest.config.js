module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  setupFiles: ['<rootDir>./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.{stories.tsx}', '!**/*.d.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
  modulePathIgnorePatterns: ['<rootDir>/lib'],
  coverageThreshold: {
    global: {
      statements: 89,
      branches: 84,
      functions: 89,
      lines: 89
    }
  }
};
