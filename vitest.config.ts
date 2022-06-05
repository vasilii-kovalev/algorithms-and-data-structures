import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		environment: 'jsdom',
		/*
			`@testing-library/jest-dom` relies on Jest globals
			(`expect`, for instance). But we don't need the globals to
			be presented in our tests - we need to get them via imports
			from `vitest`. That's why the appropriate types
			(`vitest/globals`) are not added to `tsconfig.json`, as
			advised in the [docs](https://vitest.dev/config/#globals).
		*/
		globals: true,
		setupFiles: ['setupTests.ts']
	}
});
