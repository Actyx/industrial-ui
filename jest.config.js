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
      statements: 91,
      branches: 84,
      lines: 91,
      functions: 89
    }
  }
};
