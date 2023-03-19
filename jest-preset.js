module.exports={
  preset : "jest",
  testEnvironment: 'jsdom',
  setupFilesAfterEnv:["testing-library/jest-dom/extend-expect"]
}