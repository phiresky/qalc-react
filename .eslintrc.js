module.exports = {
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		//"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["prettier", "@typescript-eslint"],
	env: { es6: true, browser: true, node: true },
	parser: "@typescript-eslint/parser",
	rules: {
		"prettier/prettier": ["warn"],
		"no-console": "off",
	},
	ignorePatterns: ["*.js"],
};
