const { pathsToModuleNameMapper } = require("ts-jest");
/** @type {import('ts-jest').JestConfigWithTsJest} */
const { compilerOptions } = require("./tsconfig.paths");

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    modulePathIgnorePatterns: ["fixtures", "utils.ts"],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
