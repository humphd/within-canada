import json from '@rollup/plugin-json';
import pkg from './package.json';

const deps = Object.keys(pkg.dependencies);
const regions = ['on', 'ab', 'bc', 'nl', 'pe', 'ns', 'nb', 'qc', 'mb', 'sk', 'yt', 'nt', 'nu' ]

// Create individual files for each region
const individual = regions.map(region => ({
	input: `src/region/${region}.js`,
	external: deps,
	output: [
		{ file: `dist/${region}.js`, format: 'cjs' },
		{ file: `dist/${region}.mjs`, format: 'es' }
	],
	plugins: [
		json()
	]
}));

// As well as a single entry point with all regions
const combined = {
	input: `src/index.js`,
	external: deps,
	output: [
		{ file: `dist/index.js`, format: 'cjs' },
		{ file: `dist/index.mjs`, format: 'es' }
	],
	plugins: [
		json()
	]
}

export default [].concat(individual, combined);
