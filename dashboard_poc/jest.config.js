module.export = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
      ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform"
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react/cleanup-after-each'
    ], // setupFiles before the tests are ran
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
    }
  };