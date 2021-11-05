module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  setupFiles: ['<rootDir>/utils/setupEnv.ts'],
  setupFilesAfterEnv: ['<rootDir>/utils/setupTests.ts'],
  moduleDirectories: ['node_modules', 'utils', __dirname, 'src', '<rootDir>'],
  modulePaths: ['node_modules', '<rootDir>/utils/test-utils', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|sass|scss|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg|gif)': '<rootDir>/utils/fileMock.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {},
  },
};
