module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/src/tests/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/src/tests/fileMock.js', // Add this line to handle image imports
  },
  testMatch: ['**/tests/**/*.test.(js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testEnvironment: 'jsdom',
};
