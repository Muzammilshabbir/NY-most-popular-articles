export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
